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
