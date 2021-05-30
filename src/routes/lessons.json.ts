import type { RequestHandler } from '@sveltejs/kit';
import fg from 'fast-glob';
import fs from 'fs';
import { parse } from 'node-html-parser';

export interface LessonData {
	url: string;
	language: string;
	stage: number;
	index: number;
	title: string;
	tags: string[];
	previous?: string;
	next?: string;
	playground: string;
	furtherInformation?: string[];
	content?: string;
}

export async function get(): Promise<RequestHandler> {
	const pages = await fg('src/routes/**/[^__]*.svelte');
	// pages = pages.map(value => value.replace('src/routes', import.meta.env.VITE_APP_URL).replace('.svelte', ''));

	const data: Set<LessonData> = new Set();
	const stages: Set<number> = new Set();

	// const data: LessonData[] = {};
	pages.forEach((page) => {
		const fileContent = fs.readFileSync(page, 'utf8');
		const root = parse(fileContent);
		const lessonElement = root.querySelector('lesson');

		if (!lessonElement) {
			return;
		}

		// map key
		const url = page
			.replace('src/routes', import.meta.env.VITE_APP_URL)
			.replace('.svelte', '')
			.replace('index', '');

		const pathParts = page.split('/');

		// language
		const language = pathParts[2];

		// stage
		const stage = parseInt(pathParts[4]);
		stages.add(stage);

		// index
		const indexAttribute = lessonElement.getAttribute('index');
		let index = 1;
		if (indexAttribute) {
			index = parseInt(indexAttribute);
			if (isNaN(index)) {
				index = parseInt(indexAttribute.slice(1, -1));
			}
		}

		// title
		const titleAttribute = lessonElement.getAttribute('title');
		let title = 'Introduction';
		if (titleAttribute) {
			title = titleAttribute;
		} else if (pathParts.pop() === 'summary.svelte') {
			title = 'Summary';
		}

		// tags
		const tags = lessonElement.getAttribute('tags')?.split(' ');

		// previous
		const previous = lessonElement.getAttribute('previous');

		// next
		const next = lessonElement.getAttribute('next');

		// playground
		const playground = lessonElement.getAttribute('src');

		// furtherInformation
		const furtherInformation = lessonElement.getAttribute('links')?.split(' ');

		// content
		const content = lessonElement.structuredText.trim();

		data.add({
			url,
			language,
			stage,
			index,
			title,
			tags,
			previous,
			next,
			playground,
			furtherInformation,
			content
		});
	});

	const sortedStages = [...stages].sort((a: number, b: number) => a - b);

	return {
		status: 200,
		headers: {
			'Cache-Control': 'public, max-age=3600',
			'Content-Type': 'application/json'
		},
		body: {
			total: data.size,
			stages: sortedStages,
			pages: [...data]
		}
	};
}
