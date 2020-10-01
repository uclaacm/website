# The ACM Website

![Node.js CI](https://github.com/uclaacm/website/workflows/Node.js%20CI/badge.svg)
[![Netlify Status](https://api.netlify.com/api/v1/badges/0089cafa-e447-4791-9837-dd8f45f61229/deploy-status)](https://app.netlify.com/sites/jovial-pasteur-581b4a/deploys)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)

Hey there! This repo contains all of the code for ACM @ UCLA's front-facing website, which you can view at [uclaacm.com](https://uclaacm.com) or at [acm.cs.ucla.edu](https://acm.cs.ucla.edu). You can find out more about our organization, the events we hold, and all the different committees within ACM!

Our website is built with [React](https://reactjs.org), with a style and design internally developed by our dev team and ACM Design. 

## Development Setup

We'll follow a very traditional [Node.js](https://nodejs.org) project setup. Before we start, make sure that you have the LTS version of Node (currently ~ `12.18`) and a copy of [`git`](https://git-scm.com/) on your computer.

First, we'll clone the repo and install all of our dependencies. You only need to do this once.

```sh
$ git clone https://github.com/uclaacm/website.git
...
$ cd website
$ npm install
```

As our app is bootstrapped with [Create React App](https://create-react-app.dev/), we can just run `npm start` to serve our app:

```sh
$ npm start
Compiled successfully!

You can now view acm-website in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.1.5:3000

Note that the development build is not optimized.
To create a production build, use npm run build.
```

This should automatically open up a window in your browser with our website! Note that Hot Module Reloading is on, so every time you modify a file, the app will automatically recompile and reload!

### Contribution Workflow

Want to make a change to the website? Great! Here are the steps:

1. Either make a new branch or a fork of this repository. `master` is a protected branch, **so you cannot push to it**.
2. Follow the instructions in "Development Setup" above. If you're on a fork, replace the URL with the fork's URL; if you're on a different branch, check it out using `git checkout`.
3. Make your changes!
4. **Before you push**, make sure your app builds with `npm build`. If there are any errors, our CI/CD service will **reject your build**.
5. Once you're ready, stage and commit your changes!
6. Make a [pull request](https://github.com/uclaacm/website/pulls) with your changes, and let someone on the dev team know.
7. If your code passes code review, we'll merge it into `master`. Congratulations! If you'd like, it's now safe to delete your branch/fork.

### Production Deploy

CRA has an automatic build script that manages creating a deploy-ready bundle, which can be triggered by `npm run build`. It runs a strict ESLint config, and then webpacks (and tree-shakes) the relevant modules to create a minified bundle.

TODO: CI/CD.

### Notes on Previous Iterations

Previously, this website had a more involved build system, still using React but also managing our webpack configuration, ESLint, containerization with Docker, and deploying on Heroku. In 2020, we moved away from this model to simplify the development workflow and look to use static-site deployers.

