const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","profile.jpeg","robots.txt"]),
	mimeTypes: {".png":"image/png",".jpeg":"image/jpeg",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-fb909264.js","imports":["_app/immutable/start-fb909264.js","_app/immutable/chunks/index-d2d958bb.js","_app/immutable/chunks/singletons-8fb9c5f0.js","_app/immutable/chunks/index-471eefe1.js","_app/immutable/chunks/parse-c28c2630.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-e6c5f7ae.js'),
			() => import('./chunks/1-f3c121b8.js'),
			() => import('./chunks/2-83d86640.js'),
			() => import('./chunks/3-ed3b31c9.js'),
			() => import('./chunks/4-9da3226e.js'),
			() => import('./chunks/5-70ebac52.js'),
			() => import('./chunks/6-38862ed4.js'),
			() => import('./chunks/7-1991b17b.js'),
			() => import('./chunks/8-629751ac.js'),
			() => import('./chunks/9-496d22bb.js')
		],
		routes: [
			{
				id: "/api/upload",
				pattern: /^\/api\/upload\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-96d2ebcf.js')
			},
			{
				id: "/(auth)/auth/login",
				pattern: /^\/auth\/login\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(auth)/auth/register",
				pattern: /^\/auth\/register\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 9 },
				endpoint: null
			},
			{
				id: "/(app)/chat",
				pattern: /^\/chat\/?$/,
				params: [],
				page: { layouts: [0,2,3], errors: [1,,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/(app)/chat/room",
				pattern: /^\/chat\/room\/?$/,
				params: [],
				page: { layouts: [0,2,3], errors: [1,,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(app)/chat/settings",
				pattern: /^\/chat\/settings\/?$/,
				params: [],
				page: { layouts: [0,2,3], errors: [1,,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(app)/chat/[id]",
				pattern: /^\/chat\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,3], errors: [1,,,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export { manifest };
//# sourceMappingURL=manifest.js.map
