---
layout: tour
title: "Mutable Collections"
description: "Scala language tour"
pageNumber: 26
isLast: false
group: tour
nextPage: interactive_tour_of_scala_mutable_collections_operations.html
prevPage: interactive_tour_of_scala_maps.html
links:
- text: Concrete Mutable Collection Classes
  url: http://www.scala-lang.org/api/current/index.html#scala.collection.mutable.package
- text: What is scala's equivalent of java.util.ArrayList in stackoverflow
  url: http://stackoverflow.com/questions/8287360/scala-equivalent-of-java-util-arraylist
- text: scala.collections.mutable package docs
  url: http://www.scala-lang.org/api/current/index.html#scala.collection.mutable.package
code:
  |
  import scala.collection.mutable  
  
  val arrayBuffer = mutable.ArrayBuffer(1, 2, 3)   
  val listBuffer = mutable.ListBuffer("a", "b", "c")  
  val hashSet = mutable.Set(0.1, 0.2, 0.3)  
  val hashMap = mutable.Map("one" -> 1, "two" -> 2)  
  
---

Scala "encourages" using immutable collections (hence they are those used by default) however sometimes mutable collections might have some benefits, either for CPU / memory performance, for code readability or simply a matter of preference. As we saw earlier, Scala provides concrete mutable collections in `scala.collections.mutable`

- Best practice suggests that you prefix mutable collections with `mutable`, this might not seem useful for `ArrayBuffer`, but it will for `scala.collections.mutable.Map`
- `ArrayBuffer` is the more or less equivalent to java's `java.util.ArrayList` which is backed by an array
- `ListBuffer` is the mutable partner for scala's immutable `List`, implemented as a Linked List
- There are many other mutable collections types, see links below for more information 