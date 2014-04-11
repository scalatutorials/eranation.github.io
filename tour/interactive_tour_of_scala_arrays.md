---
layout: tour
title: "Arrays"
description: "Scala language tour"
pageNumber: 22
isLast: false
group: tour
nextPage: interactive_tour_of_scala_lists.html
prevPage: interactive_tour_of_scala_match_as_a_switch.html
links:
- text: Array's scala docs
  url: http://www.scala-lang.org/api/current/index.html#scala.Array
code:
  |
  val array1 = Array(1, 2, 3) //Mutable array of type Array[Int]  
  val array2 = Array("a", 2, true) //Mutable array of type Array[Any]  
  val array3 = Array("a", "b", "c") //Mutable array of type Array[String]  
  
  //Access items using (index) not [index]  
  val itemAtIndex0 = array3(0)   
  println(itemAtIndex0) // a  
  
  //Modify items the same way  
  array3(0) = "d"  
  println(array3.mkString(",")) //d,b,c  
  
  //Concatenation using the ++ operator  
  val concatenated = array1 ++ array2   
  println(concatenated.mkString(",")) // 1,2,3,a,2,true  
  
  //Finding an index of an item  
  array3.indexOf("b") // 1  
  
  //Diff  
  val diffArray = Array(1,2,3,4).diff(Array(2,3))  
  println(diffArray.mkString(",")) // 1,4  
  
  //Find (stops when item is found)  
  val personArray = Array(("Alice",1), ("Bob",2), ("Carol",3))  
  def findByName(name:String) = personArray.find(_._1 == name).getOrElse(("David",4))  
  val findBob = findByName("Bob")  
  val findEli = findByName("Eli")  
  
  println(findBob._2) //2  
  println(findEli._2) //4  
  
  
---

- Arrays are constructed simply using `Array(element1, element2, ...)`
- Arrays in Scala map to Java primitive Arrays (e.g. Java's `int[]` is Scala's `Array[Int]`, Java's `String[]` is `Array[String]` in Scala)
- Arrays are *mutable* (can't change it's size once created, but can modify it's elements)
- Since they are using Java's arrays, to print nicely an Array's content, use `.mkString(",")`
- Array elements can be of any type, but the Array's final type will be the lowest common denominator 

  ```scala
  class Foo(val value1:Int)
  class Bar(value1:Int, val value2:Int) extends Foo(value1)
  val list:Array[Foo] = Array(new Foo(1), new Bar(2,3))
  ```