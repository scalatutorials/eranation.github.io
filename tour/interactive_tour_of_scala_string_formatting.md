---
layout: tour
title: "String formatting"
description: "Scala language tour"
pageNumber: 7
isLast: false
group: tour
nextPage: interactive_tour_of_scala_useful_operations.html
prevPage: interactive_tour_of_scala_string_interpolation.html
links:
- text: Printf cheat sheet
  url: http://alvinalexander.com/programming/printf-format-cheat-sheet

code:
  |
  //java.lang.* is imported implicitly by default   
  //(including java.lang.Math  
  printf("Now you have %.16f problems.", Math.nextAfter(2.0, 3))  
---

printf works as well...