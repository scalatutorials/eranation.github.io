---
layout: tour
title: "Printing values"
description: "Scala language tour"
pageNumber: 5
isLast: false
group: tour
nextPage: 06_tour_of_scala_string_interpolation.html
prevPage: 04_tour_of_scala_final_variables.html
links:
- text: scala.Predef
  url: http://www.scala-lang.org/api/current/index.html#scala.Predef$
code:
  |
  println("Hello World")  
---


Scala has a "shortcut" to Java's `System.out.println` (as well as `print`, `printf` etc.)

They are all defined in a class that is imported by default (`scala.Predef`)
