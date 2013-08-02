---
layout: tour
title: "Lists"
description: "Scala language tour"
pageNumber: 22
isLast: false
group: tour
nextPage: 23_tour_of_scala_sets.html
prevPage: 21_tour_of_scala_arrays.html
links:
- text: List's scala docs
  url: http://www.scala-lang.org/api/current/index.html#scala.collection.immutable.List
- text: scala package object docs
  url: http://www.scala-lang.org/api/current/index.html#scala.package
code:
  |
  List(1, 2, 3) //Immutable list of type List[Int]  
  List("a", 2, true) //Immutable list of type List[Any]  
  
  
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