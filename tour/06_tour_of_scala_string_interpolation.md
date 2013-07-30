---
layout: tour
title: "String interpolation"
description: "Scala language tour"
pageNumber: 6
isLast: false
group: tour
nextPage: 07_tour_of_scala_string_formatting.html
prevPage: 05_tour_of_scala_printing_values.html
links:
- text: String interpolation in Scala
  url: http://docs.scala-lang.org/overviews/core/string-interpolation.html
- text: What is this 'Tau' thing?
  url: http://tauday.com
code:
  |
  import math._  
  val Tau = Pi*2  
  println(s"Happy $Tau Day")  
---


From Scala 2.10, string interpolation is supported. 

For complex expressions add curly braces, e.g. 

```scala
s"Two times three: ${2 * 3}"
```