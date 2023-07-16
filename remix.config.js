/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
    cacheDirectory: './node_modules/.cache/remix',
	"serverModuleFormat": "cjs",
    ignoredRouteFiles: ['.*', '**/*.css', '**/*.test.{js,jsx,ts,tsx}'],
}
