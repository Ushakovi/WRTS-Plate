module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'react', 'prettier'],
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'prettier'],
    rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        'import/no-unresolved': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'no-undef': 'off',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
