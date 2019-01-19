# tslint-config-f1v

This package provides F1V's .eslintrc as an extensible shared config. It can be used to enforce F1V's code style and provides a shared base configuration for our Typescript projects.

## Install
### `yarn`
```sh
yarn add --dev tslint-config-f1v tslint
```
### `npm`
```sh
npm install --save-dev tslint-config-f1v tslint
```

## Usage

Add `"extends": "tslint-config-f1v"` to your `tslint.json`.

We have two configurations in this package, listed below:

### `tslint-config-f1v`
    *  Provides base rules for F1V Typescript projects.

### `tslint-config-f1v/react`
    * Provides base and React rules for F1V Typescript/React projects.

## Resources
- [TSLint docs](https://palantir.github.io/tslint/)
- [`tslint-consistent-codestyle`](https://github.com/ajafff/tslint-consistent-codestyle) - TSLint rules to enforce consistent code style in TypeScript
- [ESLint rules for TSLint](https://github.com/buzinas/tslint-eslint-rules) - Improve your TSLint with the missing ESLint Rules
- [`tslint-microsoft-contrib`](https://github.com/Microsoft/tslint-microsoft-contrib) - A set of TSLint rules used on some Microsoft projects
- [`tslint-config-prettier`](https://github.com/alexjoverm/tslint-config-prettier)
- [`tslint-react`](https://github.com/palantir/tslint-react) - Lint rules related to React & JSX.