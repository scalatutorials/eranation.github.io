---
layout: tour
title: "Lists Continued"
description: "Scala language tour"
pageNumber: 22
isLast: true
group: tour
nextPage: 
prevPage: 21_tour_of_scala_lists.html
links:

code:
  |
  val list2 = 0 +: list1 //prepend, O(1)  
  val list3 = 0 :: list1 //same as above  
  val append = list1 :+ 4 //O(n)  
  println(list1, list2, list3)  
  println(append)  
  println(list2 == list3) //equality is by value, not refernce  
  
  val list4 = 1 to 10 //inclusive range  
  val list5 = 1 until 10 //exclusive range  
  
  println (list4, list5)  
  
  println(List(1,2,3) ++ List(4,5,6,7)) //concatenate lists  
  
  val emptyList = Nil //empty list  
  
  val consList = 1 :: 2 :: 3 :: 4 :: Nil //build a list using "cons" operator  
  
  println(consList)  
---

