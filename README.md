# Alexandre Mouton-Brady Portfolio
This is process, the thoughts and the source code for my personal website

* [Introduction](#introduction)
* [Content Thoughts](#content-thoughts)
  * [Routes](#routes)
  * [Cross pages components](cross-pages-components)

----

## Introduction
*A brief introduction about who I am*

As you might have guessed already, my name's Alexandre. I am a passionate about pretty much anything. Sounds arrogant and boring right? Well, I'm much more than that. I actually tend to love perfection and best practice all around. Therefore, whether I'm codind or taking photos, I always try to go for the best, for what people want to see, but first and foremost for what I believe is right.

I'm from France, yes, however I prefer the universal goold ol' English for my daily talks (and not only because it's the language #1 in programming :P).

As for the programming itself, I have no real preference. I love them all. Some are ugly, some are easy. I have some facilities with front end languages such as **HTML**, **CSS** and **JavaScript**. What I really love about those three is that they are complentary and work together. Of course, libraries and framework are so damn cool. That's why I use regularly preprocessor such as [**SASS/SCSS**](http://sass-lang.com/) (the indent styled one because it's cleaner), [**JADE**](https://pugjs.org/api/getting-started.html), [**React**](https://facebook.github.io/react/), [**Vue**](https://vuejs.org/), etc.

## Content Thoughts
*My first step is to think about the acutal content*

### Routes
*What will be the differents pages available on my site*

* Home
* About
* Skills
* Projects
* Contact
* Law related

### Cross Pages Components
*What will the components that will be the same across the pages*

* Header [Logo + Navigation(Home, About, Skills, Projects, Contact)]
* Main [Background color/image]
* Footer [Copyright + Legal stuff link]

### Problerms Encountered
*What are the problems that I have encounteered during the devlopment*

* Well here is a major problem I didn't think about by doing a full vanilla website (only HTML, CSS & JS, no libraries nor framework): Since I'm routing by folder name containing index.html files for each route, I have to recreate a different CSS & JS file for EVERY single route of my website. This is a major issues which will slow me down insanly!
