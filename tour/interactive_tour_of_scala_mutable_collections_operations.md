---
layout: tour
title: "Mutable Collections Operations"
description: "Scala language tour"
pageNumber: 27
isLast: false
group: tour
nextPage: interactive_tour_of_scala_immutable_collections_with_var.html
prevPage: interactive_tour_of_scala_mutable_collections.html
links:
- text: BufferLike
  url: http://www.scala-lang.org/api/current/index.html#scala.collection.mutable.BufferLike
code:
  |
  import scala.collection.mutable  
  
  val arrayBuffer = mutable.ArrayBuffer(1, 2, 3)   
  val listBuffer = mutable.ListBuffer("a", "b", "c")  
  val hashMap = mutable.Map("one" -> 1, "two" -> 2, "three" -> 3)  
  
  arrayBuffer += 4  
  listBuffer += "d"  
  arrayBuffer -= 1  
  listBuffer -= "a"  
  hashMap += "four" -> 4  
  hashMap -= "one"  
  
  arrayBuffer ++= List(5, 6, 7)  
  hashMap ++= Map("five" -> 5, "six" -> 6)  
  hashMap --= Set("one", "three")  
  
  
  println(arrayBuffer)  
  println(listBuffer)  
  println(hashMap)  
---

- Mutable collections allow to add / remove a single / multple items while modifying the collection itself 
- the methods  `+=`,  `++=`, `-=`, `--=` are actually defined in the mutable collections 
