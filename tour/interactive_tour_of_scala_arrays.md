---
layout: tour
title: "Arrays"
description: "Scala language tour"
pageNumber: 22
isLast: false
group: tour
nextPage: interactive_tour_of_scala_lists.html
prevPage: interactive_tour_of_scala_match_as_a_switch.html
links:
- text: Array's scala docs
  url: http://www.scala-lang.org/api/current/index.html#scala.Array
code:
  |
  val array1 = Array(1, 2, 3) //Mutable array of type Array[Int]  
  val array2 = Array("a", 2, true) //Mutable array of type Array[Any]  
  
  println(array1.mkString(","))  
---

- Arrays are constructed simply using `Array(element1, element2, ...)`
- Arrays in Scala map to Java primitive Arrays (e.g. Java's `int[]` is Scala's `Array[Int]`, Java's `String[]` is `Array[String]` in Scala)
- Arrays are *mutable* (can't change it's size once created, but can modify it's elements)
- Since they are using Java's arrays, to print nicely an Array's content, use `.mkString(",")`
- Array elements can be of any type, but the Array's final type will be the lowest common denominator 

  ```scala
  class Foo(val value1:Int)
  class Bar(value1:Int, val value2:Int) extends Foo(value1)
  val list:Array[Foo] = Array(new Foo(1), new Bar(2,3))
  ```