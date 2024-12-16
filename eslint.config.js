import tsConfig from '@uvarovag/eslint-config-ts'
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'

export default [
    ...tsConfig,
    {
        files: ['**/*.js', '**/*.ts', '**/*.jsx', '**/*.tsx'],
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            react: reactPlugin,
            'react-hooks': reactHooksPlugin,
            'jsx-a11y': jsxA11yPlugin,
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        rules: {
            ...reactPlugin.configs.recommended.rules,
            ...reactPlugin.configs['jsx-runtime'].rules,
            ...reactHooksPlugin.configs.recommended.rules,
            ...jsxA11yPlugin.configs.recommended.rules,
            'react/jsx-sort-props': [
                'error',
                {
                    callbacksLast: true,
                    shorthandFirst: true,
                    ignoreCase: true,
                    reservedFirst: true,
                },
            ],
        },
    },
]
