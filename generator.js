import fg from 'fast-glob';
import fs from 'fs';
import { parse } from 'node-html-better-parser';
import { create } from 'xmlbuilder2';
import dotenv from 'dotenv';
dotenv.config();

// const outputFolder = './.vercel_build_output/static';
const outputFolder = './static';

const getPages = async () => await fg('src/routes/**/[^__]*.svelte');

const getUrl = (page) => {
	return page
		.replace('src/routes', process.env.VITE_APP_URL)
		.replace('.svelte', '')
		.replace('index', '');
};

const generateLessonsJson = async () => {
	const startTime = process.hrtime();
	const pages = await getPages();

	const data = [];
	const stages = new Set();
	const tagsSet = new Set();

	pages.forEach((page) => {
		const fileContent = fs.readFileSync(page, 'utf8');
		const root = parse(fileContent);
		const lessonElement = root.querySelector('Lesson');

		if (!lessonElement) {
			console.log({ page });
			return;
		}

		const url = getUrl(page);

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
		if (tags) {
			tags.forEach((tag) => tagsSet.add(tag));
		}

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

	const sortedStages = [...stages].sort((a, b) => a - b);

	const fileName = 'lessons.json';
	fs.writeFileSync(
		`${outputFolder}/${fileName}`,
		JSON.stringify({
			tags: [...tagsSet],
			stages: sortedStages,
			lessons: data
		})
	);

	const endTime = process.hrtime(startTime);
	console.log(`Generated ${fileName} in: %ds %dms`, endTime[0], endTime[1] / 1000000);
};

const generateSitemapXml = async () => {
	const startTime = process.hrtime();
	const sitemap = create({ version: '1.0' }).ele('urlset', {
		xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9'
	});

	// Include all svelte files which don't start with two underscores, e. g. __error.svelte
	const pages = await getPages();

	pages.forEach((page) => {
		const url = sitemap.ele('url');
		url.ele('loc').txt(getUrl(page));
		url.ele('changefreq').txt('monthly');
	});

	const fileName = 'sitemap.xml';
	fs.writeFileSync(`${outputFolder}/${fileName}`, sitemap.end({ prettyPrint: true }));

	const endTime = process.hrtime(startTime);
	console.log(`Generated ${fileName} in: %ds %dms`, endTime[0], endTime[1] / 1000000);
};

generateLessonsJson();
generateSitemapXml();
