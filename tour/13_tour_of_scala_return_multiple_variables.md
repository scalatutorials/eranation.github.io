---
layout: tour
title: "Return multiple variables"
description: "Scala language tour"
pageNumber: 13
isLast: false
group: tour
nextPage: 14_tour_of_scala_declare_multiple_variables.html
prevPage: 12_tour_of_scala_anonymous_functions_2.html
links:
- text: More on Tuples
  url: http://www.tutorialspoint.com/scala/scala_tuples.htm

code:
  |
  def swap(x:String, y:String) = (y, x)  
  val (a,b) = swap("hello","world")  
  println(a, b)  
---

It is possible to return multiple variables using Tuples