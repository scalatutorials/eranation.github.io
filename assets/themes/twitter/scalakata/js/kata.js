$.fn.openkata = function(kataOptions, codeMirrorOptions) {

  'use strict';
  var actionToMode, codeMirrorDefaults, form;

  form = this;
  codeMirrorDefaults = {
    lineNumbers: true,
    matchBrackets: true,
    indentWithTabs: false,
    smartIndent: false,
    styleActiveLine: true,
    indentUnit: 2,
    tabSize: 2,
    autoClearEmptyLines: true,
    firstLineNumber: 0,
    lineWrapping: true,
    // theme:"solarized dark"
    //theme:"monokai"
    theme: "eclipse"
  }
  codeMirrorOptions = $.extend(codeMirrorDefaults, codeMirrorOptions)

  // Show once
  if ($(this).hasClass("kataifyed")) return
  $(this).addClass("kataifyed")

  $(this).find(".kata-code").each(function() {
    var options, mirror, testMirror, lang, action, autoUpdate;
    testMirror = null;
    autoUpdate = false;
    action = $(form).attr("action");
    lang = action.substring(action.indexOf("api/") + "api/".length, action.length);
    options = $.extend(codeMirrorOptions, {
      mode: "text/x-" + lang
    });
    mirror = CodeMirror.fromTextArea(this, options);
    var timeout;
    mirror.on("change", function(instance, change) {
      if (autoUpdate) {
        console.log(instance, change);
        if (timeout != null) {
          clearTimeout(timeout);
        }
        timeout = setTimeout(runCode, 1000);
      }
    });
    $(this).data("editor", mirror);
    $(form).find(".kata-test").each(function() {
      delete options.autofocus;
      testMirror = CodeMirror.fromTextArea(this, options);
    });

    function runCode() {
      autoUpdate = false;
      console.log("calling runCode()");
      var $console, $result, $run, code, test;

      // disable until response from server
      $run = $(form).find("[name='run']");
      if ($run.prop("disabled")) {
        return;
      }
      $run.prop("disabled", true);

      $console = $(form).find(".kata-console");
      $result = $(form).find(".kata-result")

      $console.empty();
      $result.empty();

      function pushState(code, result, success) {
        var path;
        if (result.id !== undefined && kataOptions.pushState) {
          path = "/";
          if (-1 != window.location.pathname.indexOf("tdd")) {
            path = "/tdd/"
          }
          window.history.pushState($.extend(result, {
            code: code,
            status: success
          }), null, path + result.id);
        }
      }

      function renderEval(data) {
        if (data.errors !== undefined && data.errors.length > 0) {
          var $errorList;
          $console.text("Errors")
          $errorList = $("<ol/>");
          $result.append($errorList);
          $.each(data.errors, function(i, error) {
            var $errorElement, $errorSeverity, $errorLine, $errorMessage;
            error.column -= 1;
            $errorElement = $("<li/>");
            $errorElement.addClass("error");
            $errorSeverity = $("<div/>")
            $errorSeverity.text(error.severity);
            $errorSeverity.addClass("severity");

            function showError(error, cm, code) {
              var lines = cm.getValue().split("\n");
              var foundLine = -1;
              var foundCol = -1;
              var posSoFar = 0;
              for (var i = 0; i < lines.length; i++) {
                var line = lines[i];
                var prevSoFar = posSoFar;
                posSoFar += line.length;
                if (error.position <= posSoFar) {
                  error.line = i;
                  error.column = error.position - prevSoFar;
                  break;
                }
              }
              $errorLine = $("<div/>");
              $errorLine.text((code ? "" : "test ") + "L" + error.line +
                ":" + error.column);
              $errorLine.addClass("line");
              $errorLine.click(function() {
                cm.setSelection(
                  CodeMirror.Pos(error.line, error.column),
                  CodeMirror.Pos(error.line, Infinity)
                );
              });
            };

            showError(error, mirror, true);

            $errorMessage = $("<pre/>");
            $errorMessage.text(error.message);
            $errorMessage.addClass("message")
            $errorElement.append($errorSeverity);
            $errorElement.append($errorLine);
            $errorElement.append($errorMessage);
            $errorList.append($errorElement);
          })
        } else { // No errors, display insights
          
          $result[0].innerHTML = (data.output ? data.output + "</br>" : ""); //+
          
          var lineNrToInsightTextMap = {};
          
          // Populate insight map - TODO: move to separate function
          for (var insightIdx = 0; insightIdx < data.insight.length; insightIdx++ ) {
            // Example insight object: {line:1, result:"3", type:"CODE"}
            var insightObj = data.insight[insightIdx];
            var insightText = insightObj.result.trim();
            // Subroutines such as println calls return the void object "()". Not interesting to display
            if(insightObj.type == "CODE" && insightText.length > 0 && insightText != "()") {
              var insightLineNr = insightObj.line - 1;  // 1-based!
              lineNrToInsightTextMap[insightLineNr] = insightText;
            }
          }

          var editor = mirror;
          var editorLines = editor.getValue().split("\n");
          var rebuildCode = "";
          
          // Go through all editor lines
          for (var editorLineNr = 0; editorLineNr < editorLines.length; editorLineNr++) {
            var editorLine = editorLines[editorLineNr];
            editorLine = editorLine.replace(/\/\/>.*/, "")
            //var originalLength = editorLine.length; // TODO: unused variable, remove

            var insight = lineNrToInsightTextMap[editorLineNr];
            
            if (insight) {
              //right trim the line
              editorLine = editorLine.replace(/\s+$/, "") + " //> " + insight;
            }
            //editor.replaceRange(editorLine, {i: 0}, {i:originalLength});

            rebuildCode += editorLine + (editorLineNr+1 < editorLines.length?"\n":"");
          }
          editor.setValue(rebuildCode);

        }
        setTimeout(function(){
          //autoUpdate = true;
        }, 100);

      }

      function renderFail(data) {
        $console.text("");
        if (data)
          $result.text(data.error);
      }

      function renderAlways() {
        if ($(form).find(".kata-result").text().trim() != "")
          $(form).addClass("with-results");

        $run.prop("disabled", false);
      }

      // replay history
      if (kataOptions.pushState) {
        window.onpopstate = function(event) {
          var data;
          data = event.state;
          if (null !== data) {
            mirror.setValue(data.code);
            if (true === data.status) {
              renderEval(data);
            } else {
              renderFail(data);
            }
            renderAlways(data);
          } else {
            // intial state
            mirror.setValue("");
            $(form).removeClass("with-results");
          }
        };
      }

      code = mirror.getValue();
      test = "";
      if (null !== testMirror) {
        test = testMirror.getValue();
      }
      var maxAttempts = 5;
      var curAttempt = 1;

      var ajaxCall = function() {
        //var socket = new WebSocket("wss://codebrew.io/eval");
        $.when(codebrew.insight(code)).then(
          function(result) {
            console.log(result);
            renderEval(result);
            pushState(code, result, true);
            //alert(status + ", things are going well");
          },
          function(result) {
            console.log(result);
            if (curAttempt++ < maxAttempts) {
              //alert("trying again");
              setTimeout(ajaxCall, 2);
            } else {
              var result;
              result = data.responseJSON;
              renderFail(result);
              pushState(code, result, false);
            }
          },
          function(status) {
            console.log(status);
          }
        ).always(renderAlways);;

      }

      /*function () {

                $.ajax({
                    url: form[0].action,
                    type: "POST",
                    data: JSON.stringify({
                        code: code,
                        test: test
                    }),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json"
                }).
                done(function(result){
                    renderEval(result);
                    pushState(code,result,true);
                }).
                fail(function(data){
                    if(curAttempt++ < maxAttempts) {
                        //alert("trying again");
                        setTimeout(ajaxCall, 2);
                    } else {
                        var result;
                        result = data.responseJSON;
                        renderFail(result);
                        pushState(code,result,false);
                    }

                }).
                always(renderAlways);
            }
            */
      ajaxCall();

      return false;
    }
    $(form).keydown(function(e) {
      if ((e.ctrlKey || e.metaKey) && // command or ctrl +
        (e.keyCode == 13 || e.keyCode == 83)) { // enter, (s)ave
        e.preventDefault();
        runCode();
      }
    })
    $(form).submit(function(e) {
      e.preventDefault();
      runCode();
    });
  });
};

var codebrew = (function() {
  var fetching = false;
  var url = "wss://codebrew.io/eval";
  var socket = new WebSocket(url);
  var callbacks = {};
  var currentCallbackId = 0;
  var lastMessage = null;

  function getCallbackId() {
    currentCallbackId += 1;
    /* max: http://ecma262-5.com/ELS5_HTML.htm#Section_8.5*/
    if (currentCallbackId >= 9007199254740992 - 1) {
      currentCallbackId = 0;
    }
    return currentCallbackId;
  }

  function listener(data) {
    if (callbacks.hasOwnProperty(data.callback_id)) {
      callbacks[data.callback_id].resolve(data);
      delete callbacks[data.callback_id];
    }
  }

  socket.onmessage = function(message) {
    listener(JSON.parse(message.data));
    fetching = false;
  };

  socket.onopen = function() {
    if (null !== lastMessage) {
      socket.send(lastMessage);
      lastMessage = null;
    }
  };

  function send(request, serviceName) {
    fetching = true;
    var defer = $.Deferred();
    var callbackId = getCallbackId();
    callbacks[callbackId] = defer;
    request[serviceName].callback_id = callbackId;

    switch (socket.readyState) {
      case socket.OPEN:
        socket.send(JSON.stringify(request));
        break;
      case socket.CONNECTING:
        lastMessage = JSON.stringify(request);
        break;
      case socket.CLOSED:
        lastMessage = JSON.stringify(request);
        socket = new WebSocket(url); // reopen
        break;
    }

    return defer.promise();
  }

  return {
    "insight": function(code) {
      return send({
        "insight": {
          "code": code
        }
      }, "insight");
    },
    "autocomplete": function(code, position) {
      return send({
        "autocomplete": {
          "code": code,
          "position": position
        }
      }, "autocomplete");
    },
    "fetching": fetching
  };
}());
