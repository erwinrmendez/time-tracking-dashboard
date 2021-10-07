# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I did](#what-i-did)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS modules
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library
- React Hooks

### What I did

The reason for taking on this challenge was to try to replicate the proposed design using simple React Components and no CSS framework. My approach was to use CSS grid for the main layout, as well as flexboxes for general positioning and keeping it all in place.

I also decided to change the breakpoint for mobile (max-width: 470px) and added a tablet breakpoint with a three-columns layout (max-width: 800px). The reason for this change was to keep a seamless transition from Desktop to Mobile, without the design getting too cluttered.

Finally, since I decided to dynamically load the data from the JSON file, my solution to get each background color and icon for each section was to use the `title` property to form the reference for the color variable and the icon path. Here is the code snippet:

```js
// ./src/components/Card.js
const str = title.toLowerCase().replace(" ", "-"); // title comes from each "card object" from  JSON data
const bgColor = `var(--color-${str})`; // e.g. var(--color-work), which is hsl(15, 100%, 70%);
const icon = require(`../images/icon-${str}.svg`).default; // using `require` to reference a local image

return (
  <div
  className={styles.card}
  style={{
    backgroundColor: bgColor,
    backgroundImage: "url(" + icon + ")",
  }}
>
{/* Card content */}
</div>;
)
```

### Continued development

In future challenges, I plan to incorporate the use of Hooks for handly more complex logic for state management, as well as any CSS framework/library like Tailwind CSS, styled components or Material UI for styling.

## Author

- Website - [Erwin Méndez](https://github.com/erwinrmendez)
- Frontend Mentor - [@erwinrmendez](https://www.frontendmentor.io/profile/erwinrmendez)
- Twitter - [@ErwinRMendez](https://twitter.com/ErwinRMendez)
