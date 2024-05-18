import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://vibify-docs.justinjongstra.nl',
	integrations: [
		starlight({
			title: 'Vibify',
			// logo: {
			// 	light: './src/assets/light-logo.webp',
			// 	dark: './src/assets/dark-logo.webp',
			// },
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
					items: [
						{ label: 'Authorizing', link: 'guide/authorizing' },
						{ label: 'Get User Data', link: 'guide/get-user-data' },
						{ label: 'Get Currently Playing', link: 'guide/get-currently-playing' },
						{ label: 'Get Top Tracks', link: 'guide/get-top-tracks' },
						{ label: 'Get Top Artists', link: 'guide/get-top-artists' },
						{ label: 'Get Recently Played', link: 'guide/get-recently-played' },
						{ label: 'Get Last Liked', link: 'guide/get-last-liked' },
						{ label: 'Create a Playlist', link: 'guide/create-playlist' },
						{ label: 'Create Filtered Playlist', link: 'guide/filter-liked' },
						{ label: 'Music Recommendations', link: 'guide/recommendations' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
