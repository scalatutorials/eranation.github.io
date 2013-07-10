---
layout: post
title: "Why Scala Rocks"
description: ""
category: Code
tags: [scala]
---
{% include JB/setup %}

Without trying to provoke language flame wars, after reading [Why Ruby Rocks](http://skofo.github.io/blog/why-ruby-rocks/) I thought it would be nice to try and see how Scala is doing in the "rocks or not" metric using the same examples. (although I'm sure there are more exciting features in both languages other than automatic getters / setters and dynamic methods, but I'm sure the OP just used them as a representing sample)

### Automatic getters / setters

Just like in Ruby, the boilerplate of writting getters / setters for simple properties is eliminated. Scala automatically generates a getter and setter method (named the same as the member)  

```scala
class Person(var sanity:Int = 50)

object Main extends App {
  val programmer = new Person(50)
  programmer.sanity += 1000000
  println(programmer.sanity)
}
```
This is equivalent more or less to Ruby's `attr_accessor :sanity`

The syntactic desugar version of it is something (very roughly) like this: 

```scala
class Person(private[this] var _sanity:Int = 50) {
  def sanity:Int = this._sanity
  def sanity_= (sanity:Int) {this._sanity = sanity}
}
```

### Dynamic methods 

The second example was Ruby's `method_missing`, here is the Scala equivalent more or less 

```scala 

import scala.language.dynamics
class Useless extends Dynamic {
  def applyDynamic(name: String)(args: Any*) {
    println(s"Sorry, I wish I could $name...")
    if (!args.isEmpty) {
      println(s"Here, you can have your ${args.mkString(", ")} back.")
    }
  }
}

object Main {
  def main(args: Array[String]) {
    val useless = new Useless
    useless.reticulate("splines")
  }
}
```

This will print pretty much the same as the Ruby example 


    Sorry!, I wish I could reticulate...
    Here, you can have your splines back.


There are of course many other features that can grant Scala a "it rocks" attribute, I'll post some of my favorites soon