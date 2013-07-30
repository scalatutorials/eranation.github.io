---
layout: tour
title: "Method definition 2"
description: "Scala language tour"
pageNumber: 9
isLast: false
group: tour
nextPage: 10_tour_of_scala_method_definition_3.html
prevPage: 08_tour_of_scala_method_definition.html
links:

code:
  |
  def add(x:Int, y:Int) = { //result type is inferred   
    x + y //"return" keyword is optional  
  }  
  println(add(42,13))  
---

- `return` keyword is optional
- Return type is inferred (for non recursive methods and methods that don't have an explicit `return` value)
