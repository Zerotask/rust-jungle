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

export async function get() {
	const pages = await fg('src/routes/**/[^__]*.svelte');
	// pages = pages.map(value => value.replace('src/routes', import.meta.env.VITE_APP_URL).replace('.svelte', ''));

	const data: Set<LessonData> = new Set();
	// const data: LessonData[] = {};
	pages.forEach((page) => {
		const fileContent = fs.readFileSync(page, 'utf8');
		const root = parse(fileContent);
		const lessonElement = root.querySelector('lesson');
		// console.log(lessonElement);
		if (!lessonElement) {
			return;
		}

		// map key
		const url = page.replace('src/routes', import.meta.env.VITE_APP_URL).replace('.svelte', '');

		const pathParts = page.split('/');

		// language
		const language = pathParts[2];

		// stage
		const stage = parseInt(pathParts[4]);

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

		// console.log({ lessonElement });

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

	return {
		status: 200,
		headers: {
			'Cache-Control': 'public, max-age=3600',
			'Content-Type': 'application/json'
		},
		body: {
			total: data.size,
			pages: Array.from(data)
		}
	};
}
