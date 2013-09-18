---
layout: tour
title: "Useful operations"
description: "Scala language tour"
pageNumber: 9
isLast: false
group: tour
nextPage: interactive_tour_of_scala_method_definition.html
prevPage: interactive_tour_of_scala_string_formatting.html
links:

code:
  |
  //Number operations   
  //Ranges   
  
  val range = 1 to 10 //creates a range between 1 to 10 inclusive  
  val range2 = 1 until 10 //creates a range between 1 to 10 exclusive   
  val range3 = 2 until 10 by 3 //from 2 to 10 with jumps of 3  
  
  println(range3.toList) //List(2, 5, 8)  
  
  //Number convinience methods   
  val num = -5  
  val numAbs = num.abs //absolute value  
  val max5or7 = numAbs.max(7)  
  val min5or7 = numAbs.min(7)  
  println(numAbs) //5  
  println(max5or7) //7   
  println(min5or7) //5  
  
  //String operations   
  
  val reverse = "Scala".reverse //reverse a string   
  println(reverse) //alacS  
  
  val cap = "scala".capitalize //make first char caps  
  println(cap) //Scala  
  
  val multi = "Scala!" * 7 //repeat n times   
  println(multi) //Scala!Scala!Scala!Scala!Scala!Scala!Scala!  
  
  val int = "123".toInt //parse as Int  
  println(int)  
  
  //Useful methods on collections   
  
  //filter - keep only items larger than 4   
  val moreThan4 = range.filter(_ > 4)  
  println(moreThan4) //Vector(5, 6, 7, 8, 9, 10)  
  
  //map - transform each item in the collection   
  val doubleIt = range2.map(_ * 2)  
  println(doubleIt) //Vector(2, 4, 6, 8, 10, 12, 14, 16, 18)  
  
  
---

Scala has many "syntactic sugars" for many common operations. 
Some useful ones are shown on the left. 

Play with the examples (click the green "Play" button to run) and once you feel comfortable continue to the next step

More will be explained later on