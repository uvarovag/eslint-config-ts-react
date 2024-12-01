module.exports = {
    env: {
        // Указывает окружение, в котором будет выполняться код
        browser: true, // Код будет выполняться в браузере
        es2021: true, // Используются возможности ES2021 (например, Optional Chaining)
    },
    // Расширяет базовые конфигурации и плагины
    extends: [
        'airbnb', // Основные правила Airbnb для JavaScript
        'airbnb/hooks', // Дополнительные правила для React Hooks
        'plugin:@typescript-eslint/recommended', // Рекомендованные правила для TypeScript
        'plugin:prettier/recommended', // Интеграция Prettier для автоматического форматирования
    ],
    // Указание парсера для работы с TypeScript
    parser: '@typescript-eslint/parser',
    // Настройки парсера для современных возможностей языка
    parserOptions: {
        ecmaFeatures: {
            jsx: true, // Включает поддержку JSX для React
        },
        ecmaVersion: 'latest', // Поддержка синтаксиса последней версии ECMAScript
        sourceType: 'module', // Использование модулей ES6
    },
    // Подключение дополнительных плагинов
    plugins: [
        'react', // Плагин для React
        '@typescript-eslint', // Плагин для TypeScript
        'boundaries', // Плагин boundaries
    ],
    // Настройки для резолвинга импортов
    settings: {
        'import/resolver': {
            node: {
                // Указывает расширения файлов, которые можно импортировать без указания расширения
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
                // Указывает базовый путь для импортов
                paths: ['src'],
            },
            typescript: {}, // Включает поддержку TypeScript для резолвинга импортов
        },
        // FSD Определение слоёв и их паттернов
        'boundaries/elements': [
            { type: 'app', pattern: 'src/app/**/*' },
            { type: 'pages', pattern: 'src/pages/**/*' },
            { type: 'widgets', pattern: 'src/widgets/**/*' },
            { type: 'features', pattern: 'src/features/**/*' },
            { type: 'entities', pattern: 'src/entities/**/*' },
            { type: 'shared', pattern: 'src/shared/**/*' },
        ],
    },
    // Настройки правил ESLint
    rules: {
        // Разрешает использовать JSX только в файлах с расширением `.tsx`
        'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
        // Игнорирует расширения при импорте файлов
        'import/extensions': [
            'error', // Устанавливаем уровень правила как "ошибка" (можно также использовать "warn" или "off")
            'ignorePackages', // Игнорирует пакеты, установленные в node_modules
            {
                ts: 'never', // Для файлов `.ts` расширения не требуются
                tsx: 'never', // Для файлов `.tsx` расширения не требуются
                js: 'never', // Для файлов `.js` расширения не требуются
                jsx: 'never', // Для файлов `.jsx` расширения не требуются
            },
        ],
        // Отключает правило, требующее импортировать React в каждом файле JSX (не нужно в React 17+)
        'react/react-in-jsx-scope': 'off',
        'react/function-component-definition': [
            'error', // Устанавливаем уровень правила как "ошибка" (можно также использовать "warn" или "off")
            {
                namedComponents: 'arrow-function', // Указывает, что именованные компоненты должны быть объявлены с помощью стрелочных функций.
                // Пример: const MyComponent = () => { return <div>Hello!</div>; };
                unnamedComponents: 'arrow-function', // Указывает, что анонимные компоненты (например, передаваемые в HOC) также должны быть стрелочными функциями.
                // Пример: export default () => <div>Hello!</div>;
            },
        ],
        // Отключает правило, требующее использовать default export в файлах с единственным экспортом
        'import/prefer-default-export': 'off',
        // Запрет на использование абсолютных путей вместо алиасов
        'import/no-absolute-path': 'error',
        // FSD Запрет на импорты между слайсами
        'boundaries/element-types': [
            'error',
            {
                default: 'disallow',
                rules: [
                    // FSD Разрешённые связи между слоями
                    { from: 'app', allow: ['app', 'pages', 'widgets', 'features', 'entities', 'shared'] },
                    { from: 'pages', allow: ['widgets', 'features', 'entities', 'shared'] },
                    { from: 'widgets', allow: ['features', 'entities', 'shared'] },
                    { from: 'features', allow: ['entities', 'shared'] },
                    { from: 'entities', allow: ['shared'] },
                    { from: 'shared', allow: ['app', 'pages', 'widgets', 'features', 'entities', 'shared'] },
                    // FSD Запрет импорта между слайсами одного уровня
                    { from: 'widgets/*', disallow: ['widgets/*'] },
                    { from: 'features/*', disallow: ['features/*'] },
                    { from: 'entities/*', disallow: ['entities/*'] },
                    { from: 'pages/*', disallow: ['pages/*'] },
                ],
            },
        ],
    },
    // Специальные настройки для определенных файлов
    overrides: [
        {
            // Применяет правила только для файлов `webpack.config.ts`
            files: ['webpack.config.ts'],
            rules: {
                // Отключает правило, запрещающее зависимости, не указанные в `dependencies`
                'import/no-extraneous-dependencies': 'off',
            },
        },
    ],
}
