module.exports = {
	parser: '@babel/eslint-parser',
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	env: {
		jest: true,
	},
	overrides: [
		{
			files: [
				'**/*.test.*',
				'**/*_test.*',
				'**/*Test.*',
				'**/*.spec.*',
				'**/*_spec.*',
				'**/*Spec.*',
				'**/__tests__/*',
			],
			plugins: ['jest', 'jest-formatting'],
			rules: {
				'jest/no-disabled-tests': 'warn',
				'jest/no-focused-tests': 'error',
				'jest/no-identical-title': 'error',
				'jest/prefer-to-have-length': 'warn',
				'jest/valid-expect': 'error',
				'jest-formatting/padding-around-after-all-blocks': 2,
				'jest-formatting/padding-around-after-each-blocks': 2,
				'jest-formatting/padding-around-before-all-blocks': 2,
				'jest-formatting/padding-around-before-each-blocks': 2,
				'jest-formatting/padding-around-describe-blocks': 2,
				'jest-formatting/padding-around-test-blocks': 2,
			},
		},
	],
};
