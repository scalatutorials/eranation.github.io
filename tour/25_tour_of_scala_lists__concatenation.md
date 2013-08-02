---
layout: tour
title: "Lists - Concatenation"
description: "Scala language tour"
pageNumber: 25
isLast: false
group: tour
nextPage: 26_tour_of_scala_maps__concatenation_.html
prevPage: 24_tour_of_scala_arrays__concatenation.html
links:
- text: "::: vs ++"
  url: http://stackoverflow.com/questions/6559996/scala-list-concatenation-vs
code:
  |
  val list1 = List(1, 2, 3) ++ List(4, 5, 6) //One way of doing it  
  val list2 = List(1, 2, 3) ::: List(4, 5, 6) //Another way  
  println(list1, list2)  
  list1 == list2  
---

- List concatenation is done using either the `++` operator or the `:::` which have the same affect
- You can `chain` this to concatenate multiple `List`s
- Concatenation is not modifying the lists, it simply generates a new list that contains all elements of the first list followed by the elements of the second