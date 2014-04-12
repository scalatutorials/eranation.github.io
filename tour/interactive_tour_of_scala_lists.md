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
  //Immutable list of type List[Int]  
  val list1 = List(1, 2, 3) //> list1 = List(1, 2, 3)  
  //Immutable list of type List[Any]  
  val list2 = List("a", 2, true) //> list2 = List(a, 2, true)  
  import collection.mutable   
  //the "mutable version" of List  
  val mlist = mutable.ArrayBuffer("a", "b", "c") //> mlist = ArrayBuffer(d, b, e, f, g)  
  
  //Access items using (index) not [index]   
  val firstItem = list1(0) //> firstItem = 1  
  
  //Modify items the same way  (mutable Lists only)    
  mlist(0) = "d"    
  mlist //> ArrayBuffer(d, b, e, f, g)  
  
  //Concatenation using the ++ operator or ::: (lists only)  
  list1 ++ list2 //> List(1, 2, 3, a, 2, true)  
  list1 ::: list2 //> List(1, 2, 3, a, 2, true)  
  
  //Prepending an item using either :: (lists only) or +:  
  0 :: list1 //> List(0, 1, 2, 3)  
  0 +: list1 //> List(0, 1, 2, 3)  
  
  //appending an item using :+ (not efficient for immutable List)  
  list1 :+ 4 //> List(1, 2, 3, 4)  
  
  //all together  
  val concatenated = 1 :: list1 ::: list2 ++ mlist :+ 'd' //> concatenated = List(1, 1, 2, 3, a, 2, true, d, b, c, d)  
  //concatenation doesn't modify the lists themselves     
  list1 //> List(1, 2, 3)  
  
  //Removing elements (mutable list only, creates a new array):  
  
  //creates a new array with "c" removed, mlist is not touched  
  mlist - "c" //> ArrayBuffer(d, b)  
  //creates a new array with e, f removed, mlist is not touched  
  mlist -- List("e", "f") //> ArrayBuffer(d, b, c)  
  //mlist not modified  
  mlist //> ArrayBuffer(d, b, e, f, g)  
  //Removing elements (mutable Lists only):   
  
  //removes c from the list itself  
  mlist -= "c" //> ArrayBuffer(d, b, e, f, g)  
  mlist //> ArrayBuffer(d, b, e, f, g)  
  //removes e and f from mlist itself  
  mlist --= List("e", "f") //> ArrayBuffer(d, b, e, f, g)  
  mlist //> ArrayBuffer(d, b, e, f, g)  
  
  //Adding elements (mutable Lists only)   
  mlist += "e" //> ArrayBuffer(d, b, e, f, g)  
  mlist ++= List("f", "g") //> ArrayBuffer(d, b, e, f, g)  
  
  mlist //ArrayBuffer(d, b, e, f, g) //> ArrayBuffer(d, b, e, f, g)  
  
  //Diff   
  val diffList = List(1,2,3,4) diff List(2,3) //> diffList = List(1, 4)  
  
  //Find (stops when item is found)   
  val personList = List(("Alice",1), ("Bob",2), ("Carol",3)) //> personList = List((Alice,1), (Bob,2), (Carol,3))  
  def findByName(name:String) = personList.find(_._1 == name).getOrElse(("David",4)) //> findByName(name = "foo") => (David,4)  
  val findBob = findByName("Bob") //> findBob = (Bob,2)  
  val findEli = findByName("Eli") //> findEli = (David,4)  
  
  findBob._2 //> 2  
  findEli._2 //> 4  
  
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