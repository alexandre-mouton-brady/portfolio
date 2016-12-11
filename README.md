# Alexandre Mouton-Brady Portfolio
This is process, the thoughts and the source code for my personal website

* [Introduction](#introduction)
* [Content Thoughts](#content-thoughts)
  * [Routes](#routes)
  * [Cross pages components](#cross-pages-components)
  * [Contact Required Fields](#contact-required-fields)
* [Design Direction](#design-direction)
* [Thoughts for the future](#thoughts-for-the-future)
* [Problems Encountered](#problems-encountered)

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
* Law related **Still need to be done**

### Cross Pages Components
*What will the components that will be the same across the pages*

* Header [Logo + Navigation(Home, About, Skills, Projects, Contact)]
* Main [Background color/image]
* Footer [Copyright + Legal stuff link]

### Contact Required Fields
*Relative thoughts abour the proper way to display the contact page*

As for the contact page I think I need at least:

* **Name** (company or person)
* **Email** (to reply back)
* **Message** (object of the email)

But I could also need some additional information like:

* **Phone number**? It could definitely be useful, but also cause problem if that's international...
* Split name into First **Name | Last Name** and add optionally **Company Name**

## Design Direction
*I mostly design as I code, as I've yet to prove myself in design*

At first, I was trying to go for something original, something that would set me somewhat appart. But then I thought it would be *too much* to do such thing. I then processed and read a lot of design guideline and really enjoyed the Google's **Material Design** one. I've been trying to recreate some of the core feature of the language and fit them with my overall personality. It turns out pretty simple on paper, but forced me to push my limits and create interesting design (ie: the input of the contact page, the moving indicator of the navigation bar, etc.)

## Thoughts for the future
*What are the lessons I can learn from it for the future based on the prolems I got*

* Well on thing for sure is that vanilla JS/HTML/CSS is a lot of fun as you know it will work right off the bat. However it imply a lot of downside. I never will use such basic developpemùent environnement for the sole reason that it takes so much time.
* I'm thinking of redoing my portfolio entirely in a front-end JavaScript framework and see if it actually makes things better. Here are my top contender:
  * [Vue.js](https://vuejs.org/): really versatile, easy and I'm quite familiar with it already
  * [Inferno.js](https://github.com/trueadm/inferno): much more complicated to use and develop with from a beginner perspective as it is a react like library. However it's not some random React library, it's the **fastest and lightest** in the world with only 13kb for the basic package. That's dope!

## Problems Encountered
*What are the problems that I have encounteered during the devlopment - Fiou -*

* Well here is a major problem I didn't think about by doing a full vanilla website (only HTML, CSS & JS, no libraries nor framework): Since I'm routing by folder name containing index.html files for each route, I have to recreate a different CSS & JS file for EVERY single route of my website. This is a major issues which will slow me down insanly!

* Deploying all those files are a real mess to convert from developpement to production.
  * I have to copy all the files into a dist folder
  * Minify the CSS for each page to include it into the head. Since they are relatively small files, I can inline the CSS. This allows me to avoid FOIT (Flash Of Invisible Text) and give me better result for SEO.
  * I have to repeat the process for JavaScript, only I don't have to inline it in the HTML since I still can defer / async the scripts for it to be parsed at the end of the document.
  * Finally I have to modify all the links for it to match the real world adress and not the developpement environnement anymore.
