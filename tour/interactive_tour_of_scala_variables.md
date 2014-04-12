---
layout: tour
title: "Variables"
description: "Scala language tour"
pageNumber: 3
isLast: false
group: tour
nextPage: interactive_tour_of_scala_final_variables.html
prevPage: interactive_tour_of_scala_operators_are_methods.html
links:

code:
  |
  var x = 1 + 2 //> x = 3  
  println(x)    
  x = 3 * 4 //> x = 12  
  println(x)    
---

Variables are declared using the `var` keyword

In many cases, the type information can be omitted, thanks to Scala's type inference 

To declare a variable with explicit type, put the type after the variable name following a colon `:`

e.g. 

```scala
var x: Int = 1 + 2
```

<div class="alert alert-info">
<strong>Tip:</strong> Adding explicit type is a matter of preference, in one hand it helps "documenting" your code, on the other hand it might make it more "cluttered". Use judgment, e.g. add explicit types to public interfaces and APIs, and skip it for internal implementation.
</div>