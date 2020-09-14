# Amazon Clone Project
[![CircleCI](https://circleci.com/gh/chornaya-com/amazon-clone/tree/master.svg?style=svg&circle-token=63f6f27e841f7eff22bbd348eaee6daf742f2c66)](https://circleci.com/gh/chornaya-com/amazon-clone/tree/master)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#)

Clone of Amazon Website (incl. authentication, catalog and shopping cart functionalities).
Implemented with React, state management based on React Context API and Firebase integration.

[**Live demo**](https://clone-17e8e.web.app/)

![Preview](https://user-images.githubusercontent.com/61564546/92927813-1bcc3300-f436-11ea-98d8-5c08c0200dba.png)

## Features

- [x] firebase setup
- [x] sign in functionality
- [x] sign out functionality
- [x] shopping cart functionality
- [x] product catalog UI
- [ ] local storage for items added to shopping cart
- [ ] product search functionality
- [ ] payment functionality

## How To
### Install Dependencies
```
yarn install
```
### Development
to start development server run:
```
yarn start
```
### Tests
to run unit tests execute:
```
yarn test
```
### Deployment
- create production build:
```
yarn build
```
- deploy to firebase:
```
yarn deploy
```

