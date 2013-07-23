---
layout: tour
title: "Final Variables"
description: "Final variables are declared using the val keyword"
pageNumber: 4
scalakata: http://www.scalakata.com/51ed7f4be4b0d23dc07a8f50
isLast: false
category: Tour
#tags: [scala]
---

Final variables are declared using the `val` keyword (a final variable is a variable that can't be reassigned)

The code on the left looks almost exactly like in the previous step, with one small change. The `var` was changed to `val`. 

Try to run the code on the left, the compiler should complain on line 3, since we are trying to reassign `x` which is a `val`. 

<div class="well"><h5><i class="icon icon-pencil"></i> Exercise</h5> 

Edit the code on the left, so it will run (either change the <code>val</code> back to <code>var</code>, remove the reassignment to <code>x</code> or assign the result of the expression in line 3 to a different <code>val</code> or <code>var</code>)

</div>

<div class="alert alert-warn">
<strong>Note:</strong> Prefer using `val` over `var` (and immutable objects over mutalbe ones). There are many benefits that are out of the scope of this small tour.
</div>
