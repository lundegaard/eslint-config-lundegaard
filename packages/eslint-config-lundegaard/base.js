module.exports = {
	extends: ['./rules/base', './rules/imports', './rules/jest'].map(
		require.resolve
	),
	rules: {},
};
