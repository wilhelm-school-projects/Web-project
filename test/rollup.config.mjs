import resolve from '@rollup/plugin-node-resolve';
import svelte from 'rollup-plugin-svelte';

export default {
	input: 'src/main.js',
	output: {
		file: 'public/build/bundle.js',
		format: 'esm',
		sourcemap: true
	},
	plugins: [
		resolve(),
		svelte({
			css: result => result.write('public/bundle/bundle.css')
		})
	]
};