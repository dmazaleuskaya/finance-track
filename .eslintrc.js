module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: [
        'airbnb',
        'airbnb/hooks',
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:prettier/recommended',
        'prettier',
        'prettier/@typescript-eslint',
        'prettier/react'
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins: ['react', '@typescript-eslint'],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx']
            }
        }
    },
    rules: {
        'import/prefer-default-export': 'off',
        'linebreak-style': 0,
        'react/state-in-constructor': 0,
        'react/jsx-filename-extension': [1, {extensions: ['.ts', '.tsx']}],
        'prettier/prettier': 'error',
        '@typescript-eslint/no-explicit-any': 'error'
    }
};
