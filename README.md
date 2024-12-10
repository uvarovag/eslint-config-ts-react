# eslint-config-ts-react

Shared ESLint 9 Flat configuration for TypeScript React projects.

## Installation

To use this configuration in your project, install the required dependencies:

```bash
npm install --save-dev @uvarovag/eslint-config-ts-react eslint@^9.16.0
```

## Usage

### Step 1: Create a `eslint.config.js` file

```js
import reactConfig from '@uvarovag/eslint-config-ts-react'

export default [...reactConfig]
```

### Step 2: Run ESLint

```bash
npx eslint '**/*.{ts,tsx}' --fix
```

## Use together with Prettier

## Installation

To use this configuration in your project, install the necessary dependencies:

```bash
npm install --save-dev @uvarovag/prettier-config prettier
```

### Step 1: Create a `.prettierrc` file

```json
"@uvarovag/prettier-config"
```

### Step 2: Format your code

```bash
npx prettier --write '**/*.{ts,tsx,js,json,css,html,md}'
```

## Use Prettier and ESLint in Visual Studio Code

### Step 1: Install Plugins

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

### Step 2: Add the following to settings.json in VSCode

```json
{
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "prettier.requireConfig": true,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": "explicit"
    },
    "eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact"],
    "eslint.experimental.useFlatConfig": true
}
```
