# The ACM Website

![Node.js CI](https://github.com/uclaacm/website/workflows/Node.js%20CI/badge.svg)
[![Lint](https://github.com/uclaacm/website/actions/workflows/lint.yml/badge.svg)](https://github.com/uclaacm/website/actions/workflows/lint.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/0089cafa-e447-4791-9837-dd8f45f61229/deploy-status)](https://app.netlify.com/sites/jovial-pasteur-581b4a/deploys)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)

Hey there! This repo contains all of the code for ACM @ UCLA's front-facing website, which you can view at [uclaacm.com](https://uclaacm.com) or at [acm.cs.ucla.edu](https://acm.cs.ucla.edu). You can find out more about our organization, the events we hold, and all the different committees within ACM!

Our website is built with [Next.js](https://nextjs.org/) on top of [React](https://reactjs.org), with a style and [design system](https://design.uclaacm.com) internally developed by our dev team and [ACM Design](https://design.uclaacm.com). The site is deployed on [Netlify](https://www.netlify.com/); we're grateful for their support in the open-source program.

## Development Setup

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

Note that `next dev` ships with Hot Module Reloading, so every time you modify a file, the app will automatically recompile and reload!

### Contribution Workflow

Want to make a change to the website? Great! Here are the steps:

1. Either make a new branch or a fork of this repository. `master` is a protected branch, **so you cannot push to it**.
2. Follow the instructions in "Development Setup" above. If you're on a fork, replace the URL with the fork's URL; if you're on a different branch, check it out using `git checkout`.
3. Make your changes!
4. **Before you push**, make sure your app builds with `npm build`. If there are any errors, our CI/CD service will **reject your build**.
5. Once you're ready, stage and commit your changes!
6. Make a [pull request](https://github.com/uclaacm/website/pulls) with your changes, and let someone on the dev team know.
7. If your code passes code review, we'll merge it into `main`. Congratulations! If you'd like, it's now safe to delete your branch/fork.

### Production Deploy

TODO

### Notes on Previous Iterations

From (some time) to 2019, this website had a more involved build system, still using React but also managing our webpack configuration, ESLint, containerization with Docker, and deploying on Heroku.

In mid-2020, we made two larger changes:

* we followed [ACM Design's](https://design.uclaacm.com) new **Branding 3.0** design system, reworking the visual language of the site
* we moved away from a custom webpack configuration and containerization deployed on Heroku to using [Create React App](https://create-react-app.dev/) deployed on Netlify, with the main goal of reducing development burden and taking advantage of static-site deployers
