/* eslint-disable @typescript-eslint/no-require-imports */
const { withNetlify } = require('@netlify/next');

module.exports = withNetlify({
	experimental: {
		esmExternals: true,
	},
});
