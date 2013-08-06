---
layout: tour
title: "Final Variables"
description: "Scala language tour"
pageNumber: 5
isLast: false
group: tour
nextPage: interactive_tour_of_scala_printing_values.html
prevPage: interactive_tour_of_scala_variables.html
links:

code:
  |
  val x = 1 + 2 //val instead of var  
  println(x)  
  x = 3 * 4 //error: reassignment to val  
  println(x)  
---

Final variables are declared using the `val` keyword (a final variable is a variable that can't be reassigned)

The code on the left looks almost exactly like in the previous step, with one small change. The `var` was changed to `val`. 

Try to run the code on the left, the compiler should complain on line 3, since we are trying to reassign `x` which is a `val`. 

<div class="well"><h5><i class="icon icon-pencil"></i> Exercise</h5> 

Edit the code on the left, so it will run (either change the <code>val</code> back to <code>var</code>, remove the reassignment to <code>x</code> or assign the result of the expression in line 3 to a different <code>val</code> or <code>var</code>)

</div>

<div class="alert alert-warn">
<strong>Note:</strong> Prefer using `val` over `var` (and immutable objects over mutable ones). There are many benefits that are out of the scope of this small tour.
</div>
