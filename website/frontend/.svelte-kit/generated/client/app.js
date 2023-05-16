export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7')
];

export const server_loads = [];

export const dictionary = {
		"/": [4],
		"/game/[type]": [5,[2]],
		"/home": [6,[3]],
		"/home/settings": [7,[3]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';