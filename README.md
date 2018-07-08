[![Build Status](https://travis-ci.org/jest-community/jest-watch-toggle-coverage.svg?branch=master)](https://travis-ci.org/jest-community/jest-watch-toggle-coverage) [![npm version](https://badge.fury.io/js/jest-watch-toggle-coverage.svg)](https://badge.fury.io/js/jest-watch-toggle-coverage)

<div align="center">
  <a href="https://facebook.github.io/jest/">
    <img width="150" height="150" vspace="" hspace="25" src="https://cdn.worldvectorlogo.com/logos/jest.svg">
  </a>
  <h1>jest-watch-toggle-coverage</h1>
  <p>Switch between code coverage collection / skip at will</p>
</div>

![Watch](FIXME:GIF)

## Usage

### Install

Install `jest`_(it needs Jest 23.FIXME+)_ and `jest-watch-toggle-coverage`

```bash
yarn add --dev jest jest-watch-toggle-coverage

# or with NPM

npm install --save-dev jest jest-watch-toggle-coverage
```

### Add it to your Jest config

In your `package.json`

```json
{
  "jest": {
    "watchPlugins": ["jest-watch-toggle-coverage"]
  }
}
```

Or in `jest.config.js`

```js
module.exports = {
  watchPlugins: ['jest-watch-toggle-coverage'],
}
```

### Run Jest in watch mode

```bash
yarn jest --watch

# or with NPM

npx jest --watch
```
