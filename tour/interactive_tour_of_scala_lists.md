---
layout: tour
title: "Lists"
description: "Scala language tour"
pageNumber: 23
isLast: false
group: tour
nextPage: interactive_tour_of_scala_sets.html
prevPage: interactive_tour_of_scala_arrays.html
links:
- text: List's scala docs
  url: http://www.scala-lang.org/api/current/index.html#scala.collection.immutable.List
- text: scala package object docs
  url: http://www.scala-lang.org/api/current/index.html#scala.package
code:
  |
  val list1 = List(1, 2, 3) //Immutable list of type List[Int]  
  val list2 = List("a", 2, true) //Immutable list of type List[Any]  
  import collection.mutable  
  val mlist = mutable.ArrayBuffer("a", "b", "c") //the "mutable version" of List  
  
  //Access items using (index) not [index]  
  val firstItem = list1(0)  
  println(firstItem) // 1  
  
  //Modify items the same way  (mutable Lists only)  
  mlist(0) = "d"  
  println(mlist) //ArrayBuffer(d, b, c)  
  
  //Concatenation using the ++ operator  
  val concatenated = list1 ++ list2 ++ mlist  
  println(concatenated) // List(1, 2, 3, a, 2, true, d, b, c)  
  //Concatenation doesn't modify the lists themselves   
  println(list1) //List(1, 2, 3)  
  
  //Removing elements (mutable Lists only)  
  mlist -= "c"  
  println (mlist) //ArrayBuffer(d, b)  
  
  //Adding elements (mutable Lists only)  
  mlist += "e"  
  mlist ++= List("f", "g")  
  
  println (mlist) //ArrayBuffer(d, b, e, f, g)  
  
  //Diff  
  val diffList = List(1,2,3,4) diff List(2,3)  
  println(diffList) // List(1, 4)  
  
  //Find (stops when item is found)  
  val personList = List(("Alice",1), ("Bob",2), ("Carol",3))  
  def findByName(name:String) = personList.find(_._1 == name).getOrElse(("David",4))  
  val findBob = findByName("Bob")  
  val findEli = findByName("Eli")  
  
  println(findBob._2) //2  
  println(findEli._2) //4  
  
  
---

- List are constructed simply using `List(element1, element2, ...)`
- List elements can be of any type, but the List final type will be the lowest common denominator 

  ```scala
  class Foo(val value1:Int)
  class Bar(value1:Int, val value2:Int) extends Foo(value1)
  val list:List[Foo] = List(new Foo(1), new Bar(2,3))
  ```
- The default `List` in scala, is `scala.List` which points to `scala.collection.immutable.List` [src](https://github.com/scala/scala/blob/v2.10.2/src/library/scala/collection/immutable/List.scala#L1) [docs](http://www.scala-lang.org/api/current/index.html#scala.collection.immutable.List), and defined in scala/package.scala [src](https://github.com/scala/scala/blob/v2.10.2/src/library/scala/package.scala#L63) [docs](http://www.scala-lang.org/api/current/index.html#scala.package)
- The default List is implemented as a Linked list
- It is immutable (any "changes" craete a new list, the original is untouched)