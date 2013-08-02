---
layout: tour
title: "Maps - Concatenation "
description: "Scala language tour"
pageNumber: 26
isLast: true
group: tour
nextPage: 
prevPage: 25_tour_of_scala_lists__concatenation.html
links:

code:
  |
  val map1 = Map("one" -> 1, "two" -> 2)   
  val map2 = Map("three" -> 3, "four" -> 4)   
  
  
  val concat = map1 ++ map2   
  val concat2 = map1 ++ map2 ++ Map("four" -> 5)   
  
  println(concat)   
  println(concat2)   
  println(map1.size) //map1 was not modified   
  println(map2.size) //map2 was not modified either   
---

- Maps can be also concatenated using the `++` method 
- Duplicate keys are overwritten by the rightmost Map that has them 
- You can `chain` this to concatenate multiple Maps
- Concatenation is not modifying the maps, it simply generates a new map