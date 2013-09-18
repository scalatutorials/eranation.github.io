---
layout: tour
title: "Classes - continued"
description: "Scala language tour"
pageNumber: 31
isLast: true
group: tour
nextPage: 
prevPage: interactive_tour_of_scala_classes.html
links:
- text: More on Uniform Access Principle
  url: http://en.wikipedia.org/wiki/Uniform_access_principle
code:
  |
  //A full Java boilerplate style class (not idiomatic Scala!)  
  class JPerson() {  
    var _name: String = null  
    def this(_name:String) = {  
      this()  
           this._name = _name  
    }  
    //Scala style getters and setters   
    def name_=(_name:String) = this._name = _name  
    def name = this._name  
      
    //Java style getters and setters    
    def getName() = name  
    def setName(name:String) = this.name = name  
  }  
  
  //Which can be generated in 1 line of idiomatic Scala   
  import beans._  
  class SPerson(@BeanProperty var name:String)  
  //Note: @BeanProperty is optional   
  //(only if you need Java style getters and setters)  
  
  val jp = new JPerson("Java Style")  
  val sp = new SPerson("Scala Style")  
  
  println(jp.name)  
  println(sp.name)  
  
  jp.name += " sucks!"  
  sp.name += " rocks!"  
  
  println(jp.getName)  
  println(sp.getName)  
---

### Uniform Access

- Scala's getters and setters use the principle of uniform access, e.g. if you change the implentation of a field declared  `var name` to a method `def name` you will not need to recompile the code
- Therefore there can't be a variable or method (`def`, `val` or `var`, private or public) that has the same name in a class

### Java style getters and setters 

- Scala's automatic getters and setters are following the unoform access principle, so the getter and setter name is the same as the field it encapsulates, 
- However if you need to have Java client code accessing your Scala class, it's as easy as adding a `@BeanProperty` annotation to instruct the compiler to automatically add a Java bean style getter and setter. 
- For boolean properties of style `isFlag` use `@BooleanBeanProperty` instead 