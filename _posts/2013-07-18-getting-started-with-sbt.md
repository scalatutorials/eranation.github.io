---
layout: post
title: "From zero to a Scala SBT project"
tagline: "<br>with Eclipse / Intellij IDEA support"
description: ""
category: Beginner
tags: [scala, sbt, giter8]
---
{% include JB/setup %}

Get started with a simple real world structure for a simple Scala project

## Basic setup 

(All of the following have instructions for Windows / Mac / Linux)

1. Install Scala from [here](http://www.scala-lang.org/downloads) 
1. Install sbt from [here](http://www.scala-sbt.org/release/docs/Getting-Started/Setup.html#installing-sbt)
2. Install conscript from [here](https://github.com/n8han/conscript)
3. Install giter8: `cs n8han/giter8` 
4. Create a new folder for your project: `mkdir myProject` and `cd myProject`
5. Use a templated project, e.g.: `g8 typesafehub/scala-sbt`
6. Answer the interactive prompt questions (use default options)
6. CD to it `cd myProject\scala-project`
7. Compile it `sbt compile`
8. Run `sbt run` (should print `Hello, Scala Project`)

## IDE support (Eclipse / Intellij)

1. Open `$ ~/.sbt/plugins/build.sbt` (Mac/Linux) or `%userprofile%\.sbt\plugins\build.sbt` (Windows)
2. Add the following lines (the empty line in between is important)

  ```scala
  addSbtPlugin("com.typesafe.sbteclipse" % "sbteclipse-plugin" % "2.2.0")

  addSbtPlugin("com.github.mpeltonen" % "sbt-idea" % "1.4.0")
  ```

  (see [https://github.com/typesafehub/sbteclipse](https://github.com/typesafehub/sbteclipse) and [https://github.com/mpeltonen/sbt-idea](https://github.com/mpeltonen/sbt-idea) for more details)

3. for Eclipse, in the project folder, type `sbt eclipse`, if you want to download sources add `with-source=true` e.g. `sbt eclipse with-source=true`
4. To open the project in Eclipse: File -> Import -> Existing Projects into Workspace
4. for Intellij IDEA, in the project folder, type `sbt gen-idea`

  <div class="alert alert-info">
  NOTE: Intellij just released a new <a href="http://blog.jetbrains.com/scala/2013/07/17/sbt-plugin-nightly-builds/">early release SBT plugin</a> (July 17, 2013) - which can import SBT projects without the need for <code>sbt gen-idea</code>
  </div>