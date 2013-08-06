---
layout: tour
title: "Immutable collections with var"
description: "Scala language tour"
pageNumber: 30
isLast: false
group: tour
nextPage: interactive_tour_of_scala_work_in_progress.html
prevPage: interactive_tour_of_scala_mutable_collections_operations.html
links:

code:
  |
  import scala.collection.mutable  
  
  var immutableSet = Set(1, 2, 3)   
  
  immutableSet += 4   
  //this is the same as:  
  immutableSet = immutableSet + 4  
  
  //compare to     
  val mutableSet = mutable.Set(1, 2, 3)    
  
  mutableSet += 4   
  // this is the same as:   
  mutableSet.+=(4)  
  
  println(immutableSet, mutableSet)  
---

One thing to note is the difference between the `+=`,  `+==`, `-=`, `-==` etc functions regarding mutalbe and immutable collections. 

- For immutable collections - they are not methods of the collection (since it's not modifiable) but if used on an immutable collection declared with `var` instead of `val` then the Scala compier expands them to `variable = variable op param`. (seel on the left for an example)
- For mutable collections - they are actually methods on the collection, and they modify the collection when used. 
