import adapter from 'svelte-adapter-bun'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

const config: import('@sveltejs/kit').Config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			'styled-system': './styled-system/*',
		},
		typescript: {
			config: (config) => {
				config.include.push('../styled-system')
				return config
			},
		},
	},
}

export default config
