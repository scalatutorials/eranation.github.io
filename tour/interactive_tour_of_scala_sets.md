---
layout: tour
title: "Sets"
description: "Scala language tour"
pageNumber: 25
isLast: false
group: tour
nextPage: interactive_tour_of_scala_maps.html
prevPage: interactive_tour_of_scala_lists.html
links:
- text: Predef source
  url: https://github.com/scala/scala/blob/v2.10.2/src/library/scala/Predef.scala#L98
- text: Predef docs
  url: http://www.scala-lang.org/api/current/index.html#scala.Predef$
- text: Set's scala docs
  url: http://www.scala-lang.org/api/current/index.html#scala.collection.immutable.Set
- text: Set's sources
  url: https://github.com/scala/scala/blob/v2.10.2/src/library/scala/collection/immutable/Set.scala#L1
code:
  |
  val set1 = Set(1, 2, 3) //Immutable set of type Set[Int]  
  val set2 = Set("a", 2, true) //Immutable list of type Set[Any]  
  import collection.mutable  
  val mset = mutable.HashSet("a", "b", "c") //the "mutable version" of Set  
  
  //Sets remove duplicates   
  println(Set(1,2,3,2,4,3,2,1,2)) //Set(1, 2, 3, 4)  
  
  //Check if item exists using (item)   
  val oneExists = set1(1)  
  val fourExists = set1(4)  
  println(oneExists) // true  
  println(fourExists) // false  
  
  //You can "modify" items the same way as for Lists  
  //(DON'T use it this way, use mset -="a" instead)  
  mset("a") = false   
  println(mset) //Set(c, b)  
  
  //Concatenation using the ++ operator   
  //(removes duplicates, order not guaranteed)  
  val concatenated = set1 ++ set2 ++ mset  
  println(concatenated) // Set(1, a, true, 2, b, 3, c)  
  //Concatenation doesn't modify the sets themselves   
  println(set1) //Set(1, 2, 3)  
  
  //Removing elements (mutable Sets only)  
  mset -= "c"  
  println (mset) //Set("b")  
  
  //Adding elements (mutable Lists only)  
  mset += "e"  
  mset ++= Set("f", "g")  
  
  println (mset) //Set(f, g, e, b)  
  
  //Diff  
  val diffSet = Set(1,2,3,4) diff Set(2,3)  
  println(diffSet) // Set(1, 4)  
  
  //Find (stops when item is found)  
  
  //Note that this is not an ideal use for Set,   
  //a Map would be much better data structure  
  //Just for illustration purposes   
  val personSet = Set(("Alice",1), ("Bob",2), ("Carol",3))  
  def findByName(name:String) = personSet.find(_._1 == name).getOrElse(("David",4))  
  val findBob = findByName("Bob")  
  val findEli = findByName("Eli")  
  
  println(findBob._2) //2  
  println(findEli._2) //4  
  
  
---

- Sets are constructed simply using `Set(element1, element2, ...)`
- The Set can contain mixed types, but the final type of the elements will be the lowest common denominator 
- The default `Set` is `Predef.Set` which points to `scala.collection.immutable.Set`
- As it currently stands, Set implementation up to size of 4 has a specific class Set1, Set2, Set3, Set4, beyond that, it uses an immutable `HashSet`
- You can't have duplicate values, adding a value that already exists overwrites the value 
- Order of iteration is not guaranteed to be consistent 