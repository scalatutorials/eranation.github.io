---
layout: tour
title: "Sets"
description: "Scala language tour"
pageNumber: 24
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
  Set(1, 2, 3) //Immutable set of type Set[Int]  
  Set("a", 2, true) //Immutable set of type Set[Any]  
  
  
---

- Sets are constructed simply using `Set(element1, element2, ...)`
- The Set can contain mixed types, but the final type of the elements will be the lowest common denominator 
- The default `Set` is `Predef.Set` which points to `scala.collection.immutable.Set`
- As it currently stands, Set implementation up to size of 4 has a specific class Set1, Set2, Set3, Set4, beyond that, it uses an immutable `HashSet`
- You can't have duplicate values, adding a value that already exists overwrites the value 
- Order of iteration is not guaranteed to be consistent 