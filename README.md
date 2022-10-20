# @elibol/eslint-config

Prettier and ESLint configuration for JavaScript &amp; Vue projects

## Installation

```bash
yarn add -D eslint prettier@^2.7.1 @elibol/eslint-config eslint-config-prettier eslint-plugin-prettier eslint-plugin-vue
```
or
```bash
npm install -D eslint prettier@^2.7.1 @elibol/eslint-config eslint-config-prettier eslint-plugin-prettier eslint-plugin-vue
```

## Usage

Add the `@elibol/eslint-config` to `extends:` array in your `.eslintrc.js` file

##### Example .eslintrc.js file

```js
module.exports = {
  root: true,
  extends: ['@elibol/eslint-config'],
}
```

##### Example prettier.config.js file
To inherit `prettier` rules, you need to import prettier configuration from the package as well.

To do that, replace content of your `prettier.config.js` file with the code below
```js
module.exports = require('@elibol/eslint-config/prettier.config')
```

<br />

> **NOTE:** By default the package exports **Vue** configuration. So using `extends: ["@elibol/eslint-config"]` will by default include JavaScript and `eslint-plugin-vue` rules. If you want to use pure JavaScript rules see below.

## Using JavaScript rules only
If you would only need to import JavaScript rules but not Vue, then you can use the package as following:
```js
module.exports = {
  extends: ['@elibol/eslint-config/javascript'],
}
```

If this is the scenario, you don't need to install `eslint-plugin-vue` either.

## Lint your project with npm scripts

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