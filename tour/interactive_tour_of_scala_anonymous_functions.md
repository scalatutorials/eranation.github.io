---
layout: tour
title: "Anonymous Functions"
description: "Scala language tour"
pageNumber: 12
isLast: false
group: tour
nextPage: interactive_tour_of_scala_anonymous_functions_2.html
prevPage: interactive_tour_of_scala_method_definition_3.html
links:
- text: More on anonymous functions 
  url: http://www.scala-lang.org/node/133
code:
  |
  //a method that requires a function as a parameter  
  //the function's type is (Int,Int) => Int  
  //e.g. maps from 2 Ints to an Int  
  def doWithOneAndTwo(f: (Int, Int) => Int) = {  
    f(1, 2)  
  }  
  
  //Explicit type declaration  
  val call1 = doWithOneAndTwo((x: Int, y: Int) => x + y)  
  
  //The compiler expects 2 ints so x and y types are inferred  
  val call2 = doWithOneAndTwo((x, y) => x + y)  
  
  //Even more concise syntax  
  val call3 = doWithOneAndTwo(_ + _)  
  
  println(call1, call2, call3)  
---

Anonymous functions in Scala are of the following forms:

```scala
(x: Int) => x * x //type is: Int => Int, e.g. gets an Int and returns an Int
(x: Int, y: Int) => x + y //type is: (Int, Int) => Int, e.g. gets 2 Ints and returns an Int
```

Which is basically a "syntactic sugar" for this form:

```scala
new Function1[Int ,Int] {
  def apply(x: Int): Int = x * x
}

new Function2[Int ,Int ,Int] {
  def apply(x: Int, y: Int): Int = x + y
}
```

### Type 

The *type* of the 2nd anonymous function is `(Int, Int) => Int` and reads: "A function that map from two integers (`Int, Int`) to (`=>`) an integer (`Int`)"
 
The method `doWithOneAndTwo` expects a parameter of that type, so we can pass `(x ,y) => x + y` as a parameter.

### Parameter type inference

Note that we were able to drop the type declarations for x and y here, becase the compiler already "knows" that `doWithOneAndTwo` expects a function that gets 2 Int parameters, therefore we can omit the type information for the parameters x and y in the second call in the example on the left.

### Shorter syntax
Furthermore, there is even a shorter syntax for anonymous functions, (with a limitation that each variable is used exactly once in the body of the function). A place holder is used `_` to replace each parameter, the first occurrence of `_` stands for the first parameter, the second for the second parameter and so forth. 