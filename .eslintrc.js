module.exports = {
    env: {
		browser: true,
		node: true,
		es6: true,
		jest: true
    },
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
    plugins: [
        'react',
        '@typescript-eslint',
        /**
         * This plugin intends to help you in tracking down problems when you are using css-modules. 
         * It tells if you are using a non-existent css/scss/less class in js or 
         * if you forgot to use some classes which you declared in css/scss/less.
         * https://www.npmjs.com/package/eslint-plugin-css-modules
         */
        'css-modules',
        /**
         * This plugin intends to support linting of ES2015+ (ES6+) import/export syntax, 
         * and prevent issues with misspelling of file paths and import names
         * https://www.npmjs.com/package/eslint-plugin-import
         */
        'import',
        /**
         * Adapting eslint for use with Babel
         * https://www.npmjs.com/package/eslint-plugin-babel
         */
        'babel',
        /**
         * Runs Prettier as an ESLint rule and reports differences as individual ESLint issues.
         * https://www.npmjs.com/package/eslint-plugin-prettier
         */
        'prettier'
    ],
    settings: {
		'import/resolver': {
			node: {
				paths: ['src'],
				extensions: ['.ts', '.tsx'],
			},
		},
		react: {
			version: 'detect',
        },
        'import/ignore': ['node_modules/*']
     },
    extends: [
        'airbnb',
        'airbnb/hooks',
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:prettier/recommended',
        'prettier',
        'prettier/@typescript-eslint',
        'prettier/react',
        'plugin:css-modules/recommended'
    ],
    rules: {
        'import/prefer-default-export': 'off',
        'linebreak-style': 0,
        'react/state-in-constructor': 0,
        'react/jsx-filename-extension': [1, {extensions: ['.ts', '.tsx']}],
        'prettier/prettier': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        'react/jsx-props-no-spreading': 0,
        'react/no-array-index-key': 0,
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        "react/prop-types": "off"
    }
};
