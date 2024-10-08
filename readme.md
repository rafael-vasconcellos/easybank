# About

This is a solution to the [Easybank landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [How to build](#how-to-build)
- [Author](#author)
- [Recommended hosts](#recommended-hosts)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [Solid JS](https://docs.solidjs.com/quick-start) - JS library
- [Astro](https://docs.astro.build/en/concepts/why-astro/) - UI framework agnostic
- [tailwindcss](https://tailwindcss.com/docs/installation) - For styles

### What I learned
the purpose behind the stack choice was to learn how to build static files with astro, especially for landing pages, using various UI frameworks, similar to Gatsby with React. see what I learned below:

#### core concepts
+ .astro files (for pages, layouts and components)
+ integrations and templates
+ component islands

#### cool stuff
+ suport for view transitions
+ endpoints & middleware
+ localization

#### Anatomy of the build (from what I got)

static components -> embedded CSS  
astro bundle -> embedded JS  
**_astro/web.CKEhz0Ta.js:** UI Framework (solid)  
**_astro/client.DKvI4T_I:** "renderer"

#### Base URL

the configuration of the base url for static files

```javascript
// https://astro.build/config
export default defineConfig({
  // Enable Solid to support Solid JSX components.
  integrations: [solid(), tailwind()],
  base: 'easybank/', // base url for static files, configured for github pages
});
```

## How to build

```bash
# install the dependencies
$ npm install

# build
$ npm run build

# preview
$ npm run preview
```

the files will be built into the *dist* folder

## Author

- Website - [Rafael](https://rafael-vasconcellos.github.io/)
- Frontend Mentor - [@rafael-vasconcellos](https://www.frontendmentor.io/profile/rafael-vasconcellos)

## Recommended hosts

- [GitHub Pages](https://pages.github.com/)
- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [Cloudflare](https://www.cloudflare.com/)


