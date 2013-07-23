---
layout: tour
title: "Variables"
description: "Variables are declared using the var keyword"
pageNumber: 3
scalakata: http://www.scalakata.com/51ed7f04e4b0d23dc07a8f4c
isLast: false
category: Tour
#tags: [scala]
---

Variables are declared using the `var` keyword

In many cases, the type information can be omitted, thanks to Scala's type inference 

To declare a variable with ecplicit type, put the type after the variable name following a colon `:`

e.g. 

```scala
var x: Int = 1 + 2
```

<div class="alert alert-info">
<strong>Tip:</strong> Adding explicit type is a matter of preference, in one hand it helps "documenting" your code, on the other hand it might make it more "cluttered". Use judgement, e.g. add explicit types to public interfaces and APIs, and skip it for internal implementation.
</div>
