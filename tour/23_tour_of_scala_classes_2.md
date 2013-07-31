---
layout: tour
title: "Classes 2"
description: "Scala language tour"
pageNumber: 23
isLast: true
group: tour
nextPage: 
prevPage: 22_tour_of_scala_classes.html
links:

code:
  |
  class Test1(var param:Int)  
  
  class Test2b(private[this] var _param: Int) {  
    def param: Int = _param  
    def param_=(_param: Int) { this._param = _param }  
  }  
  
  val test1 = new Test1(7)  
  test1.param = 8  
  println(test1.param)  
  
  
  val test2 = new Test2b(7)  
  test2.param = 8  
  println(test2.param)  
---

Under construction