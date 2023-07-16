/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
	serverModuleFormat: "cjs",
	tailwind: true,
	ignoredRouteFiles: ["**/.*"],
	future: {
		v2_errorBoundary: true,
		v2_headers: true,
		v2_meta: true,
		v2_normalizeFormMethod: true,
		v2_routeConvention: true,
	  }
}
