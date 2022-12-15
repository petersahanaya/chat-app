import vercel from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';
//ks
/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			postcss: true
		})
	],
	kit: {
		adapter: vercel({
			   edge: false,

      // an array of dependencies that esbuild should treat
      // as external when bundling functions
      external: [],

      // if true, will split your app into multiple functions
      // instead of creating a single one for the entire app
      split: false
		}),
	}
};

export default config;
