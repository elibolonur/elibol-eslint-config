# @elibol/eslint-config

Prettier and ESLint configuration for JavaScript &amp; Vue projects

## Table Of Contents

- [Installation](#installation)
- [Usage with Vue 2/3](#default-usage)
- [Usage with Vue 3 &amp; TypeScript](#usage-typescript)
- [Usage with JavaScript only](#usage-javascript)
- [Inheriting Prettier rules](#usage-prettier)
- [Linting your project with NPM scripts](#npm-scripts)
- [Enabling autofix on save for VS Code](#enable-autofix-vscode)

<div id="installation" />

## Installation

1. Install the packages to your project with the command below:

```bash
npm install -D eslint prettier@^2.7.1 @elibol/eslint-config eslint-config-prettier eslint-plugin-prettier eslint-plugin-vue
```

2. Create `.eslintrc.js` file in your project root if it doesn't exist
3. Pick the configuration you need from the list below and replace the content of the file with one of the examples below
4. Create `prettier.config.js` file in your project root if it doesn't exist and replace the content with the [example](#prettier-example) below

<div id="default-usage" />

### Vue 2/3 (default config)

```js
// .eslintrc.js
module.exports = {
  root: true,
  extends: ['@elibol/eslint-config'],
}
```

> **NOTE:** that some rules might not work perfectly with Vue version 2. For those, feel free to override rules in `.eslintrc.js` file.

<div id="usage-typescript" />

### Vue 3 &amp; TypeScript

To be able to use **TypeScript** configuration, make sure to install dependencies below:

```bash
npm install -D @typescript-eslint/parser vue-eslint-parser @vue/eslint-config-typescript
```

```js
// .eslintrc.js
module.exports = {
  root: true,
  extends: ['@elibol/eslint-config/vue3-typescript'],
}
```

<div id="usage-javascript" />

### JavaScript only

If you would only need to import JavaScript rules but not Vue, then you can use the package as following:

```js
module.exports = {
  extends: ['@elibol/eslint-config/javascript'],
}
```

If this is the scenario, you don't need to install `eslint-plugin-vue` either.

<div id="usage-prettier" />

### Example prettier.config.js file

This package uses prettier by default. For the config to work properly, you need to inherit `prettier` rules from the project.

To do that, replace content of your `prettier.config.js` file with the code below

```js
module.exports = require('@elibol/eslint-config/prettier.config')
```

> **NOTE:** By default the package exports **Vue** configuration. So using `extends: ["@elibol/eslint-config"]` or `extends: ["@elibol"]` will <ins>by default include JavaScript and `eslint-plugin-vue` rules</ins>. If you want to use pure JavaScript or Vue TypeScript configuration, see below.

<div id="npm-scripts" />

## Linting your project with npm scripts

Add the scripts below to your `package.json` file. Then you will be able to run

- `npm lint` or `yarn lint` for running the linter dry
- `npm lint:fix` or `yarn lint:fix` to run the linter and fix errors/warnings (those that are fixable)

```json
{
  "scripts": {
    "lint": "eslint \"**/*.{vue,ts,js}\"",
    "lint-fix": "eslint --fix \"**/*.{vue,ts,js}\""
  }
}
```

<div id="enable-autofix-vscode" />

## Enabling autofix on save for VS Code

Add the settings below to your VSCode settings to run linter on every save

`.vscode/settings.json`

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## License

[MIT](http://opensource.org/licenses/MIT)
