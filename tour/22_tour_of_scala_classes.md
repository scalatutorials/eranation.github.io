---
layout: tour
title: "Classes"
description: "Scala language tour"
pageNumber: 22
isLast: false
group: tour
nextPage: 23_tour_of_scala_classes_2.html
prevPage: 21_tour_of_scala_lists.html
links:

code:
  |
  class Test1(var param:Int)  
  
  class Test2a(private[this] var param: Int) {  
    def param: Int = param  
    def param_=(param: Int) { this.param = param }  
  }  
  
---

Under construction