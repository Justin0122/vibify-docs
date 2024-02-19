import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Vibify',
			logo: {
				light: './src/assets/light-logo.webp',
				dark: './src/assets/dark-logo.webp',
			},
			social: {
				github: 'https://github.com/justin0122/vibify',
			},
			sidebar: [
				{
					label: 'Introduction', link: '/introduction',

				},
				{
					label: 'Start here',
					items: [
						{ label: 'Getting started', link: '/getting-started' },
						{ label: 'Setting up the Client', link: '/setting-up-client' },
					],
				},
				{
					label: 'Guides',
					autogenerate: { directory: 'guide' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
