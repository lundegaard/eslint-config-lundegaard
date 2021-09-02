module.exports = {
	parser: '@babel/eslint-parser',
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true,
	},
	plugins: ['@babel', 'import'],
	rules: {
		'array-bracket-spacing': ['error', 'never'],
		'array-callback-return': 'error',
		'arrow-body-style': ['error', 'as-needed'],
		'arrow-parens': ['error', 'as-needed'],
		'arrow-spacing': 'error',
		'@babel/new-cap': 'error',
		'block-scoped-var': 'error',
		'block-spacing': ['error', 'always'],
		'brace-style': 'error',
		'comma-dangle': ['error', 'always-multiline'],
		'comma-spacing': [
			'error',
			{
				before: false,
				after: true,
			},
		],
		'comma-style': ['error', 'last'],
		'computed-property-spacing': ['error', 'never'],
		'consistent-return': 'off',
		'consistent-this': ['error', 'self'],
		curly: 'error',
		'dot-location': ['error', 'property'],
		'dot-notation': 'error',
		'eol-last': 'error',
		eqeqeq: ['error', 'smart'],
		'generator-star-spacing': 'error',
		'id-blacklist': ['error'],
		'key-spacing': 'error',
		'keyword-spacing': 'error',
		'max-len': [
			'error',
			{
				// "Lines of > 80 characters are really the last jabs
				// at the dying corpses of typography and taste in the digital world.
				//
				// Typographically proper paragraphs are not wide across,
				// because that forces the eye to move more while reading.
				//
				// This is a basic fact that has been known for literally longer
				// than we've had printing presses."
				//
				// See:
				// https://katafrakt.me/2017/09/16/80-characters-line-length-limit/#properties-of-the-human-eyes
				// https://nickjanetakis.com/blog/80-characters-per-line-is-a-standard-worth-sticking-to-even-today#reading-code
				// https://hackernoon.com/does-column-width-of-80-make-sense-in-2018-50c161fbdcf6
				//
				// TLDR:
				// - better for your eyes
				// - quicker undertanding of the code
				// - possibility of multiple files side by side on the same display
				code: 80,
				tabWidth: 2,
				ignoreComments: false,
				ignoreStrings: true,
				ignoreRegExpLiterals: true,
				ignoreTemplateLiterals: true,
				ignoreUrls: true,
			},
		],
		'new-cap': [
			'off',
			{
				capIsNew: true,
				newIsCap: true,
			},
		],
		'no-array-constructor': 'error',
		'no-await-in-loop': 'error',
		'no-case-declarations': 'error',
		'no-cond-assign': 'error',
		'no-console': 'error',
		'no-const-assign': 'error',
		'no-dupe-args': 'error',
		'no-dupe-keys': 'error',
		'no-duplicate-case': 'error',
		'no-empty-pattern': 'error',
		'no-extra-boolean-cast': 'error',
		'no-extra-semi': 'error',
		'no-loop-func': 'error',
		'no-multi-spaces': 'error',
		'no-multiple-empty-lines': 'error',
		'no-shadow': 'off',
		'no-spaced-func': 'error',
		'no-trailing-spaces': 'error',
		'no-undef': 'error',
		'no-unneeded-ternary': 'error',
		'no-unreachable': 'error',
		'no-unused-expressions': 'error',
		'no-unused-vars': 'error',
		'no-var': 'error',
		'object-shorthand': 'error',
		'one-var': ['error', 'never'],
		'operator-linebreak': 'off',
		'padded-blocks': ['error', 'never'],
		'prefer-arrow-callback': 'off',
		'prefer-const': 'error',
		'prefer-spread': 'error',
		'prefer-template': 'error',
		quotes: ['error', 'single', 'avoid-escape'],
		'space-before-blocks': ['error', 'always'],
		semi: ['error', 'always'],
		'space-before-function-paren': [
			'error',
			{ anonymous: 'never', named: 'never', asyncArrow: 'always' },
		],
		'space-infix-ops': 'error',
		'space-unary-ops': [
			'error',
			{
				words: true,
				nonwords: false,
			},
		],
		'spaced-comment': 'error',
		strict: 'off',
		yoda: 'error',
	},
};
