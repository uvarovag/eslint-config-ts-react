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
        'import', // Плагин для import
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
    },
    // Настройки правил ESLint
    rules: {
        // Разрешает использовать JSX только в файлах с расширением `.tsx`
        'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
        // Игнорирует расширения при импорте файлов
        'import/extensions': [
            'error', // Устанавливает уровень правила как "ошибка" (можно также использовать "warn" или "off")
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
            'error', // Устанавливает уровень правила как "ошибка" (можно также использовать "warn" или "off")
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
        // Отключает запрет на использование проп-спрединга
        'react/jsx-props-no-spreading': 'off',
        // Сортировка пропсов в компонентах React
        'react/jsx-sort-props': [
            'error', // Устанавливает уровень правила как "ошибка" (можно также использовать "warn" или "off")
            {
                callbacksLast: true, // Сортировать колбэки (например, onClick, onChange) после остальных пропсов
                ignoreCase: true, // Игнорировать регистр символов при сортировке
                shorthandFirst: true, // Короткие пропсы (например, `checked`) идут перед длинными (например, `className="btn"`)
                reservedFirst: true, // Зарезервированные пропсы (например, `key`, `ref`) отображаются первыми
            },
        ],
        // Сортировка и группировка импортов
        'import/order': [
            'error', // Устанавливает уровень правила как "ошибка" (можно также использовать "warn" или "off")
            {
                groups: [
                    ['builtin', 'external'], // Группирует встроенные модули (например, 'fs', 'path') и внешние пакеты (например, 'react', 'lodash')
                    ['internal'], // Помещает внутренние модули (ваши алиасы, указанные в `webpack` или `tsconfig.json`) в отдельную группу
                    ['parent', 'sibling'], // Группирует импорты из родительских (`../`) и соседних модулей (`./`)
                    ['type'], // Группирует типы (в TypeScript) отдельно
                ],
                pathGroups: [
                    {
                        pattern: '{react,react-dom/**}', // Добавляет отдельное правило для React и связанных пакетов
                        group: 'external', // Помещает их в группу внешних модулей
                        position: 'before', // Располагает эти модули в начале группы "external"
                    },
                ],
                alphabetize: {
                    order: 'asc', // Устанавливает сортировку импортов в алфавитном порядке
                    caseInsensitive: true, // Игнорирует регистр при сортировке
                },
                'newlines-between': 'always', // Добавляет пустую строку между разными группами импортов
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
