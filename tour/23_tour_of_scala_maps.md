---
layout: tour
title: "Maps"
description: "Scala language tour"
pageNumber: 23
isLast: false
group: tour
nextPage: 24_tour_of_scala_arrays__concatenation.html
prevPage: 22_tour_of_scala_lists.html
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
  val map = Map("one" -> 1, "two" -> 2) //Map of type Map[String, Int]  
---

- Maps are cuonstructed simply using `Map(key1 -> value1, key2 -> value2, ...)`
- The Map can contain mixed types, but the final type of the Map keys / values will be the lowest common denominator type
- The default `Map` is `Predef.Map` which points to `scala.collection.immutable.Map`
- As it currently stands, Map implementation up to size of 4 has a specific class Map1, Map2, Map3, Map4, beyond that, it uses an immutable `HashMap`
- You can't have duplicate keys, adding a key value pair whose key already exists, overwites the value 
- Order of iteration is not guaranteed to be consistent 