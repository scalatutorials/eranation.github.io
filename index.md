---
layout: page
description: "Guides and tutorials for the Scala programming language"
#title: Coming soon
#tagline: Recent Posts
---
{% include JB/setup %}

<!-- 
Read [Jekyll Quick Start](http://jekyllbootstrap.com/usage/jekyll-quick-start.html)

Complete usage and documentation available at: [Jekyll Bootstrap](http://jekyllbootstrap.com)

## Update Author Attributes

In `_config.yml` remember to specify your own data:
    
    title : My Blog =)
    
    author :
      name : Name Lastname
      email : blah@email.test
      github : username
      twitter : username

The theme should reference these variables whenever needed.
    
## Sample Posts

This blog contains sample posts which help stage pages and blog data.
When you don't need the samples anymore just delete the `_posts/core-samples` folder.

    $ rm -rf _posts/core-samples

Here's a sample "posts list".
 -->

<div class="alert alert-info">NEW: Try the alpha interactive Tour of Scala <a href="tour/" class="btn btn-success btn-small">Give it a try</a> (Work in progress, feedback welcome)</div>

<div class="hero-unit">
  <h1>Coming Soon</h1>
  <p>
  <!-- Begin MailChimp Signup Form -->
    <link href="http://cdn-images.mailchimp.com/embedcode/slim-081711.css" rel="stylesheet" type="text/css">
    <style type="text/css">
      #mc_embed_signup form{ 
        padding: 0;
      }
      /* Add your own MailChimp form style overrides in your site stylesheet or in this style block.
         We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
    </style>
    <div id="mc_embed_signup" style="back">
    <form action="http://scalatutorials.us4.list-manage2.com/subscribe/post?u=88bb0ae2c547a703dfa7bb4df&amp;id=89b98532cc" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="" target="_blank" novalidate>
      <label for="mce-EMAIL">Please sign up to stay tuned when the site launches!</label>
      <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
      <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="btn btn-primary btn-large"></div>

    </form>
    </div>

  <!--End mc_embed_signup-->

  </p>
</div>

<div>{% include custom/followme %}  <iframe src="http://ghbtns.com/github-btn.html?user=scalatutorials&type=follow"
  allowtransparency="true" frameborder="0" scrolling="0" width="160" height="20"></iframe></div>
<br>

<iframe src="http://www.scalakata.com/51e610a4e4b0d23dc07a870b" width="100%" height="550" scrolling="no" frameborder="no"></iframe>
(Powered by <a href="http://www.scalakata.com/">scalakata.com</a>)

<br>



 
<!-- <div>
    {% for post in site.posts limit:0 %}
    <h2><a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></h2>
    <strong>{{ post.date | date_to_string }}</strong><br><br>
        {{ post.content }}<br>
    <hr>
    {% endfor %}
</div>
 -->
<!-- <div>

</div>
 -->

<!-- <ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>
 -->

{% include other-tutorials.md %}
