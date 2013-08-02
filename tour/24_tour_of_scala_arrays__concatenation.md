---
layout: tour
title: "Arrays - Concatenation"
description: "Scala language tour"
pageNumber: 24
isLast: false
group: tour
nextPage: 25_tour_of_scala_lists__concatenation.html
prevPage: 23_tour_of_scala_maps.html
links:

code:
  |
  val array1 = Array(1,2,3)   
  val array2 = Array(4,5,6)  
  val concat = array1 ++ array2 ++ Array(7,8,9)   
  
  println(concat.mkString(","))  
  println(array1.length) //array1 was not modified   
  println(array2.length) //array2 was not modified either   
---

- Arrays can be concatenated using the `++` method 
- You can `chain` this to concatenate multiple Arrays
- Concatenation is not modifying the arrays, it simply generates a new array that contains all elements of the first list followed by the elements of the second and so forth