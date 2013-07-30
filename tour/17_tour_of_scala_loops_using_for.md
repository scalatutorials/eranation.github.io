---
layout: tour
title: "Loops using for"
description: "Scala language tour"
pageNumber: 17
isLast: false
group: tour
nextPage: 18_tour_of_scala_loops_without_loops.html
prevPage: 16_tour_of_scala_loops_using_while.html
links:
- text: More on for loops
  url: http://www.tutorialspoint.com/scala/scala_for_loop.htm
code:
  |
  //Loops using for  
  var sum = 0  
  for ( i <- 0 until 10) {  
    sum += i  
  }  
  println(sum)  
---

For loops in Scala are powerful and deserve a separate discussion. But they can be used to mimic a c / Java like for loop as well.