export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.df90bf1b.js","imports":["_app/immutable/entry/start.df90bf1b.js","_app/immutable/chunks/index.71153ec7.js","_app/immutable/chunks/singletons.f5cdc87e.js","_app/immutable/chunks/index.60ac0192.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.8337d490.js","imports":["_app/immutable/entry/app.8337d490.js","_app/immutable/chunks/index.71153ec7.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/game/[type]",
				pattern: /^\/game\/([^/]+?)\/?$/,
				params: [{"name":"type","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/home",
				pattern: /^\/home\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/home/settings",
				pattern: /^\/home\/settings\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 7 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
