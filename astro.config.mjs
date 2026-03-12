// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://cumulativecomputing.org',
	integrations: [
		starlight({
			title: 'Cumulative Computing',
			description: 'A computational paradigm in which systems accumulate work over time by preserving artifacts that represent completed computation.',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/kopcho/AAA' }],
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'The Paradigm',
					items: [
						{ label: 'Cumulative Computing', slug: 'cumulative-computing' },
					],
				},
				{
					label: 'AAA Framework',
					items: [
						{ label: '01 — Agent Artifact Availability', slug: 'framework/01' },
						{ label: '02 — Artifacts as Units of Work', slug: 'framework/02' },
						{ label: '03 — Artifact Graphs', slug: 'framework/03' },
						{ label: '04 — Why Storage Systems Fail', slug: 'framework/04' },
						{ label: '05 — Artifact Availability Layer', slug: 'framework/05' },
						{ label: '06 — Deterministic Artifact Identity', slug: 'framework/06' },
						{ label: '07 — Computational Work Conservation', slug: 'framework/07' },
					],
				},
			],
		}),
	],
});
