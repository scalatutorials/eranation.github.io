---
layout: tour
title: "Operators are methods"
description: "Scala language tour"
pageNumber: 2
isLast: false
group: tour
nextPage: 03_tour_of_scala_variables.html
prevPage: 01_tour_of_scala_scalculator.html
links:
- text: Style Guide - Method Invocation
  url: http://docs.scala-lang.org/style/method-invocation.html
- text: Scala Reference - 6.12.3 Infix Operations
  url: http://www.scala-lang.org/docu/files/ScalaReference.pdf
- text: Scala Operators
  url: http://w
code:
  |
  (1).+(2)  
---

In Scala, primitives are represented as objects. (Although after compilation they are using Java's primitives when possible for performance).

Since they are objects, operators are simply method calls!

So `1 + 2` is simply calling a method named `+` on the object `1` (an `Int` literal)

e.g. 

`1 + 2` is actually: `(1).+(2)`

Scala has precedence for operator-like methods (that will be discussed later) to support correct arithmetic operations. 

This notation is called "operator notation" or "infix notation" is not limited just to arithmetic operations, but this will be explained later.