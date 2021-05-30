import type { RequestHandler } from '@sveltejs/kit';
import fg from 'fast-glob';
import fs from 'fs';
import { parse } from 'node-html-better-parser';

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
	const pages = await fg('src/routes/(en|de)/stages/**/[^__]*.svelte');

	const data: LessonData[] = [];
	const stages: Set<number> = new Set();
	const appUrl = import.meta.env.VITE_APP_URL;

	pages.forEach((page) => {
		const fileContent = fs.readFileSync(page, 'utf8');
		const root = parse(fileContent);
		const lessonElement = root.querySelector('Lesson');
		// console.log(lessonElement);
		if (!lessonElement) {
			console.log({ page });
			return;
		}

		const url = page.replace('src/routes', appUrl).replace('.svelte', '').replace('index', '');

		const pathParts = page.split('/');

		// language
		const language = pathParts[2];

		// stage
		const stage = parseInt(pathParts[4]);
		stages.add(stage);

		// index
		const indexAttribute = lessonElement.attributes.index;
		let index = 1;
		if (indexAttribute) {
			index = parseInt(indexAttribute);
			if (isNaN(index)) {
				index = parseInt(indexAttribute.slice(1, -1));
			}
		}

		// title
		const titleAttribute = lessonElement.attributes.title;
		let title = 'Introduction';
		if (titleAttribute) {
			title = titleAttribute;
		} else if (pathParts.pop() === 'summary.svelte') {
			title = 'Summary';
		}

		// tags
		const tags = lessonElement.attributes.tags?.split(' ');

		// previous
		const previous = lessonElement.attributes.previous;

		// next
		const next = lessonElement.attributes.next;

		// playground
		const playground = lessonElement.attributes.src;

		// furtherInformation
		const furtherInformation = lessonElement.attributes.links?.split(' ');

		// content
		const content = lessonElement.structuredText.trim();

		data.push({
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
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*'
		},
		body: {
			total: data.length,
			stages: sortedStages,
			pages: data
		}
	};
}
