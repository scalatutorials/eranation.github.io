---
layout: tour
title: "Maps"
description: "Scala language tour"
pageNumber: 25
isLast: false
group: tour
nextPage: interactive_tour_of_scala_mutable_collections.html
prevPage: interactive_tour_of_scala_sets.html
links:
- text: Predef source
  url: https://github.com/scala/scala/blob/v2.10.2/src/library/scala/Predef.scala#L97
- text: Predef docs
  url: http://www.scala-lang.org/api/current/index.html#scala.Predef$
- text: Map's scala docs
  url: http://www.scala-lang.org/api/current/index.html#scala.collection.immutable.Map
- text: Map's sources
  url: https://github.com/scala/scala/blob/v2.10.2/src/library/scala/collection/immutable/Map.scala#L1
code:
  |
  val map1 = Map("one" -> 1, "two" -> 2, "three" -> 3)   
  //Map of type Map[String, Int]  
  val map2 = Map(1 -> "one", "2" -> 2.0, 3.0 -> false)   
  //Map of type Map[Any, Any]  
  
  import collection.mutable  
  val mmap = mutable.HashMap("a" -> 1, "b" -> 2 , "c" -> 3)   
  //the "mutable version" of Map  
  
  //Maps remove duplicate keys:  
  println(Map("a" -> 1, "a" -> 2)) //Map(a -> 2)  
  
  //Get items using map(key)   
  val one = map1("one")  
  
  //NoSuchElementException will be thrown if key doesn't exist!  
  //e.g. this code: val fourExists = map1("four")   
  //throws NoSuchElementException: key not found: four  
  //the get method returns an Option, which will be explained later  
  val fourExistsOption = map1.get("four")  
  
  println(one) // 1  
  println(fourExistsOption.isDefined) // false  
  
  //You can set / modify items using map(key) = value  
  mmap("d") = 4   
  println(mmap) //Map(b -> 2, d -> 4, a -> 1, c -> 3)  
  
  //Concatenation using the ++ operator   
  //(removes duplicate keys, order not guaranteed)  
  val concatenated = map1 ++ map2 ++ mmap  
  println(concatenated)   
  // Map(three -> 3, 1 -> one, two -> 2, a -> 1, b -> 2, 3.0 -> false, 2 -> 2.0, c -> 3, one -> 1, d -> 4)  
  //Concatenation doesn't modify the maps themselves   
  println(map1) //Map(one -> 1, two -> 2, three -> 3)  
  
  //Removing elements (mutable Sets only)  
  mmap -= "c"  
  println (mmap) //Map(b -> 2, d -> 4, a -> 1)  
  
  //Adding elements (mutable Lists only)  
  mmap += "e" -> 5  
  mmap ++= Map("f" -> 6, "g" -> 7)  
  
  println (mmap) //Map(e -> 5, b -> 2, d -> 4, g -> 7, a -> 1, f -> 6)  
  
  //Find   
  val personMap = Map(("Alice",1), ("Bob",2), ("Carol",3))  
  def findByName(name:String) = personMap.getOrElse(name, 4)  
  val findBob = findByName("Bob")  
  val findEli = findByName("Eli")  
  
  println(findBob) //2  
  println(findEli) //4  
---

- Maps are constructed simply using `Map(key1 -> value1, key2 -> value2, ...)`
- The Map can contain mixed types, but the final type of the Map keys / values will be the lowest common denominator type
- The default `Map` is `Predef.Map` which points to `scala.collection.immutable.Map`
- As it currently stands, Map implementation up to size of 4 has a specific class Map1, Map2, Map3, Map4, beyond that, it uses an immutable `HashMap`
- You can't have duplicate keys, adding a key value pair whose key already exists, overwrites the value 
- Order of iteration is not guaranteed to be consistent 