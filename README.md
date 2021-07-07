# The ACM Website

![Node.js CI](https://github.com/uclaacm/website/workflows/Node.js%20CI/badge.svg)
[![Lint](https://github.com/uclaacm/website/actions/workflows/lint.yml/badge.svg)](https://github.com/uclaacm/website/actions/workflows/lint.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/0089cafa-e447-4791-9837-dd8f45f61229/deploy-status)](https://app.netlify.com/sites/jovial-pasteur-581b4a/deploys)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)

Hey there! This repo contains all of the code for ACM @ UCLA's front-facing website, which you can view at [uclaacm.com](https://uclaacm.com) or at [acm.cs.ucla.edu](https://acm.cs.ucla.edu). You can find out more about our organization, the events we hold, and all the different committees within ACM!

Our website is built with [Next.js](https://nextjs.org/) on top of [React](https://reactjs.org), with a style and [design system](https://design.uclaacm.com) internally developed by our dev team and [ACM Design](https://design.uclaacm.com). The site is deployed on [Netlify](https://www.netlify.com/); we're grateful for their support in the open-source program. Under the hood, we use both [ESLint](https://eslint.org/) and [Stylelint](https://stylelint.io/) to lint our JS and CSS code respectively.

## Quick Table of Contents

* [Notes for Developers](#notes-for-developers)
  * [Development Setup](#development-setup)
  * [Contribution Workflow](#contribution-workflow)
  * [File Structure and Components](#file-structure-and-components)
  * [Some Notes on Next](#some-notes-on-next)
  * [Production Deploy](#production-deploy)
* [Notes on Previous Iterations](#notes-on-previous-iterations)
* [Licensing and Attribution](#licensing-and-attribution)

## Notes for Developers

### Development Setup

We'll follow a very traditional [Node.js](https://nodejs.org) project setup. Before we start, make sure that you have the LTS version of Node (currently ~ `14.x`) and a copy of [`git`](https://git-scm.com/) on your computer.

First, we'll clone the repo and install all of our dependencies. You only need to do this once.

```sh
$ git clone https://github.com/uclaacm/website.git
...
$ cd website
$ npm install
```

Our app's development and build cycle is managed by [Next.js](https://nextjs.org/); so, we can just run `npm start` to serve our app:

```sh
$ npm start

> acm-website@0.1.0 start /Users/matt/code/acm-website
> next dev

ready - started server on 0.0.0.0:3000, url: http://localhost:3000

event - compiled successfully
```

This should automatically open up a window in your browser with our website; if it doesn't, visit [http://localhost:3000](http://localhost:3000).

Note that `next dev` ships with ["Fast Refresh"](https://nextjs.org/docs/basic-features/fast-refresh) (their version of hot module reloading), so every time you modify a file, the app will automatically recompile and reload!

### Contribution Workflow

Want to make a change to the website? Great! Here are the steps:

1. Either make a new branch or a fork of this repository. `main` is a protected branch, **so you cannot push to it**.
2. Follow the instructions in "Development Setup" above. If you're on a fork, replace the URL with the fork's URL; if you're on a different branch, check it out using `git checkout`.
3. Make your changes!
4. **Before you push**, make sure your app builds with `npm run build`. If there are any errors, our CI/CD service will **reject your build**.
5. Once you're ready, stage and commit your changes!
6. Make a [pull request](https://github.com/uclaacm/website/pulls) with your changes, and let someone on the dev team know.
7. If your code passes code review, we'll merge it into `main`. Congratulations! If you'd like, it's now safe to delete your branch/fork.

### File Structure and Components

TODO

### Some Notes on Next

TODO

### Production Deploy

We currently deploy our site on [Netlify](https://www.netlify.com/), which handles both our deploy previews and our production deploy. To use Netlify properly with [Next.js](https://nextjs.org/), we use Netlify's first-party [Essential Next.js](https://github.com/netlify/netlify-plugin-nextjs) plugin. Because Netlify typically only deploys static sites, this plugin allows us to use Next's SSR features, as well as other runtime behaviours like image optimization.

As a note, we've been running into some problems with `next/image` working properly - that's why some parts of the codebase stil use the `<img />` tag. It's likely that these problems have to do with a misconfiguration/misuse of the Netlify plugin, or a lack of feature parity surrounding runtime image optimization.

The CD pipeline is also mimicked in GitHub Actions. To ensure that your build passes production deploy, ensure that `npm run build` passes; you should get something like:

```sh
$ npm run build

> acm-website@0.1.0 build /Users/matt/code/acm-website
> next build

info  - Using webpack 5. Reason: Enabled by default https://nextjs.org/docs/messages/webpack5
info  - Checking validity of types
info  - Creating an optimized production build
warn  - Compiled with warnings
info  - Collecting page data
info  - Generating static pages (8/8)
info  - Finalizing page optimization

Page                              Size     First Load JS
┌ ○ /                             1.96 kB         102 kB
├   /_app                         0 B            74.5 kB
├ ○ /404                          1.36 kB        75.8 kB
├ ○ /about                        2.35 kB         102 kB
├ ○ /committees                   2.7 kB          103 kB
├ ○ /events                       579 B          84.6 kB
├ ○ /sponsors                     1.28 kB         101 kB
└ ○ /techgala                     841 B           101 kB
+ First Load JS shared by all     74.5 kB
  ├ chunks/framework.2191d1.js    42.4 kB
  ├ chunks/main.d8370c.js         20.3 kB
  ├ chunks/pages/_app.bdb986.js   11 kB
  ├ chunks/webpack.715970.js      804 B
  └ css/15f1248eb2a7bef58d0d.css  6.13 kB

λ  (Lambda)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
○  (Static)  automatically rendered as static HTML (uses no initial props)
●  (SSG)     automatically generated as static HTML + JSON (uses getStaticProps)
   (ISR)     incremental static regeneration (uses revalidate in getStaticProps)
```

Outside of image optimization, the rest of our site is SSG'd by Next. In other words, after build-time, you should expect a fully-functional site (barring image serving).

## Notes on Previous Iterations

From (some time) to 2019, this website had a more involved build system, still using React but also managing our webpack configuration, ESLint, containerization with Docker, and deploying on Heroku.

In mid-2020, we made two larger changes:

* we followed [ACM Design's](https://design.uclaacm.com) new **Branding 3.0** design system, reworking the visual language of the site
* we moved away from a custom webpack configuration and containerization deployed on Heroku to using [Create React App](https://create-react-app.dev/) deployed on Netlify, with the main goal of reducing development burden and taking advantage of static-site deployers

In mid-2021, we made another set of changes surrounding performance and robustness:

* we swapped out Create React App for [Next.js](https://nextjs.org/), with the goal of using the hybrid SSG + SSR/ISR model to deliver better performance and SEO-friendly pages
* some more stuff coming soon :)

## Licensing and Attribution

Unlike the majority of ACM at UCLA's projects, this website is under the slightly-less-permissive [Mozilla Public License 2.0 (MPL 2.0)](https://github.com/uclaacm/website/blob/main/LICENSE). You can find the [public official copy on the Mozilla website](https://www.mozilla.org/en-US/MPL/2.0/), as well as [an FAQ on the license](https://www.mozilla.org/en-US/MPL/2.0/FAQ/). We echo a sentiment shared on the FAQ:

> Please note that, while this FAQ is intended to be accurate and helpful, *it is not the license*, and may not cover important issues that affect you and your specific situation. As a result, reading the FAQ should not serve as a substitute for reading the license itself, or for seeking legal advice from a lawyer.

We'd love to hear from you if this repository was helpful in any way (especially if it inspires your own work)! Send us an email at [acm@ucla.edu](mailto:acm@ucla.edu) - I promise we don't bite!
