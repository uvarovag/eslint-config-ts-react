# eslint-config-ts-react

A shared ESLint configuration for TypeScript and React projects.

## Installation

To use this configuration in your project, install the required dependencies:

```bash
npm install --save-dev @uvarovag/eslint-config-ts-react eslint eslint-config-airbnb eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-import eslint-plugin-jsx-a11y @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-prettier eslint-config-prettier
```

## Usage

### Step 1: Create a .eslintrc.json file

```json
{
    "extends": "@uvarovag/eslint-config-ts-react"
}
```

### Step 2: Run ESLint

```bash
npx eslint '**/*.{ts,tsx}' --fix
```

## Use Together with Prettier

## Installation

To use this configuration in your project, install the necessary dependencies:

```bash
npm install --save-dev @uvarovag/prettier-config-ts-react prettier
```

### Step 1: Create a .prettierrc File

```json
"@uvarovag/prettier-config-ts-react"
```

### Step 2: Format your code

```bash
npx prettier --write '**/*.{ts,tsx,js,json,css,html,md}'
```

## Work with VSCode

### Add the following to settings.json in VSCode

```json
{
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "prettier.requireConfig": true,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": "explicit"
    },
    "eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact"]
}
```
