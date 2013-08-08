---
layout: tour
title: "Overview"
description: "Scala language tour"
pageNumber: 1
isLast: false
group: hidden
nextPage: interactive_tour_of_scala_scalculator.html
prevPage: 
links:
- text: Scala official site
  url: http://scala-lang.org
- text: Scala on Wikipedia
  url: http://en.wikipedia.org/wiki/Scala_(programming_language)
code:
  |
  //type inference, semicolons optional    
  var number = -1   
  
  //Lists are lists...      
  val list = List(1, 2, 3, 4 ,5)   
  
  //Maps are maps     
  val map = Map(1 -> "one", 2 -> "two")   
  
  //`return` keyword is optional, so are {} on one liners  
  def square(x:Int) = x * x   
  
  //higher order functions  
  list.filter(_ > 2).map(_ * 3).sum   
  
  //convenient string ops    
  val strAsNum = "1000".toInt   
  
  //easy output (uses System.out.println)    
  println(strAsNum)   
  
  //convenient number ops     
  number = number.abs   
  
  //easy ranges     
  val range = 1 until 100 by 2   
  
  //easy tuples    
  val tuple = ("Tuples are", 1, true, "awesome thing")   
  
  //convenient collection ops     
  val tsil = list.reverse   
  
  //easy iterations    
  for ((k, v) <- map) println(k, v)   
  
  //easy nested loops. Everythign is an expression   
  val result = for(i <- 0 to 10; j <- 0 to i) yield (i, j)   
  
  //lambda functions / function literals   
  val functionLiteral = (n:Int) => math.sqrt(n) * n    
  
  //String literals   
  val longString = """    
  put " anything  you like in here except three consecutive " :)     
  """    
  
  //default values for parameters   
  def lotsOfParams(num:Int = 10, str:String = "N/A") = str * num  
  
  //named parameters  
  lotsOfParams(str = "wat")  
  
  //partial functions   
  def addNumbers(x:Int)(y:Int) = x + y  
  def add2 = addNumbers(2)_  
  add2(3)   
  
  //easy interfaces / mixins     
  trait Namable { val name:String; def greet:String = s"Hi $name!"}   
  
  //lazy evaluation    
  trait Randomable { lazy val rand:Int = (math.random * 100).toInt }   
  
  //easy class definition, support for mixins using traits     
  case class Person(name:String, favoriteLanguage:String) extends Namable with Randomable    
  case class Superhero(name:String) extends Namable with Randomable    
  
  //type aliases   
  type NamRam = Namable with Randomable   
  
  val person:NamRam = Person("Alice", "Scala")     
  //val person:Namable = Superhero("man")     
  
  //Pattern Matching   
  person match {     
    case p @ Person(n, fl) => println(s"${p.greet} p.s. we like $fl too!" +  
        s"Random number: ${p.rand}. (Still ${p.rand})")    
    case sh @ Superhero(n) => println(sh.greet, sh.rand)    
    case _ => println("hm...")    
  }    
  
  //everything is an expression #2    
  val condition = if(person.name == "Alice") "Hi Alice!" else "Superman?"     
  
  //Pimp my library     
  implicit class SuperInt(val i:Int) {      
    def square = i * i     
    def sqrt = math.sqrt(i)    
  }     
  
  println(7.square, 49.sqrt)  
  
  //Duck typing     
  def quackTheDuck( quackable: {def quack:String }) = {  
   "What does a duck say? " + quackable.quack    
  }  
  class RealDuck { def quack = "Quack!" }    
  class ImposterDuck { def quack = "Qwaack!" }    
  quackTheDuck(new RealDuck)    
  quackTheDuck(new ImposterDuck)    
  
  //Dynamic method calls (don't do it unless you have a good reason...)     
  
  import scala.language.dynamics    
  class Useless extends Dynamic {    
    def applyDynamic(name: String)(args: Any*) {    
      println(s"Sorry, I wish I could $name...")    
      if (!args.isEmpty) {    
        println(s"Here, you can have your ${args.mkString(", ")} back.")    
      }    
    }    
  }    
  val useless = new Useless    
  useless.reticulate("splines", "marbles")    
  
  
---

- Scala is a statically typed, object oriented functional language, merging two popular programming approches into one
- Built by Martin Odersky at EPFL, launched in 2003, open source
- Used by Twitter, Linked In, Yammer, Foursquare, OpenStudy, eBay, Amazon and many others
- It runs on the JVM (had an experimental .NET CLR backend that was discontinued, and has an experimental LLVM compiler)
- Therefore it has great interop with Java (and any other JVM language) 