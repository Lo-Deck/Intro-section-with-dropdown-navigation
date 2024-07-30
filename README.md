# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page


### Screenshot

![screenshot mobile](https://github.com/Lo-Deck/Intro-section-with-dropdown-navigation/blob/main/screenshot/Intro%20section%20with%20dropdown%20navigation-mobile.png).
![screenshot mobile-menu](https://github.com/Lo-Deck/Intro-section-with-dropdown-navigation/blob/main/screenshot/Intro%20section%20with%20dropdown%20navigation-mobile-menu.png).
![screenshot desktop](https://github.com/Lo-Deck/Intro-section-with-dropdown-navigation/blob/main/screenshot/Intro%20section%20with%20dropdown%20navigation-desktop.png).


### Links

- Solution URL: [Repositories](https://github.com/Lo-Deck/Intro-section-with-dropdown-navigation).
- Live Site URL: [Website](https://lo-deck.github.io/Intro-section-with-dropdown-navigation/).


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JS


### What I learned

I learned to display a menu with JS when you cliked on it.

```js
if(!displayMenu.style.visibility)
{
            displayMenu.style.visibility = 'visible';
            btnMenu.innerHTML = '<svg width="26" height="26" xmlns="http://www.w3.org/2000/svg"><g fill="#151515" fill-rule="evenodd"><path d="m2.393.98 22.628 22.628-1.414 1.414L.979 2.395z"/><path d="M.98 23.607 23.609.979l1.414 1.414L2.395 25.021z"/></g></svg>';
            background.style.visibility = 'visible';            
}
```


### Continued development

Learning from each challenge, I will continue to make website with JS and learning from different challenge from Front-end Mentor.


### Useful resources

- [Mozilla mdn](https://developer.mozilla.org/) - Very useful.


## Author

- Frontend Mentor - [@Lo-deck](https://www.frontendmentor.io/profile/Lo-Deck)


## Acknowledgments

Thanks to Front-end Mentor and its community.
