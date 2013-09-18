---
layout: tour
title: "Assign multiple variables"
description: "Scala language tour"
pageNumber: 17
isLast: false
group: tour
nextPage: interactive_tour_of_scala_loops_using_while.html
prevPage: interactive_tour_of_scala_declare_multiple_variables.html
links:

code:
  |
  var (x, y, z, c, python, java) = (1, 2, 3, true, false, "no!")  
  println(x, y, z, c, python, java)  
---

Using Tuples, it is possible to assign multiple values to multiple variables (either `var` or `val`).