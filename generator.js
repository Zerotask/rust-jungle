import fg from 'fast-glob';
import fs from 'fs';
import { parse } from 'node-html-better-parser';
import { create } from 'xmlbuilder2';
import dotenv from 'dotenv';
dotenv.config();

const fileNameLessonsData = 'lessons.json';
const outputFolder = './static';

const getPages = async () => await fg('src/routes/**/[^__]*.svelte');

const getUrl = (page) => {
	return page
		.replace('src/routes', process.env.VITE_APP_URL)
		.replace('.svelte', '')
		.replace('index', '');
};

const getLessonElement = (page) => {
	const fileContent = fs.readFileSync(page, 'utf8');
	const root = parse(fileContent);

	return root.querySelector('Lesson');
};

const getLessonIndex = (lessonElement) => {
	const indexAttribute = lessonElement.attributes.index;
	let index = 1;
	if (indexAttribute) {
		index = parseInt(indexAttribute, 10);
		if (isNaN(index)) {
			index = parseInt(indexAttribute.slice(1, -1), 10);
		}
	}

	return index;
};

const getLessonTitle = (lessonElement, fileName, index) => {
	const titleAttribute = lessonElement.attributes.title;
	let title;
	if (fileName === 'summary.svelte') {
		title = 'Summary';
	} else if (index === 1) {
		title = `Introduction - ${titleAttribute}`;
	} else {
		title = titleAttribute;
	}

	return title;
};

const writeLessonsJsonFile = (tags, stages, lessons) => {
	fs.writeFileSync(
		`${outputFolder}/${fileNameLessonsData}`,
		JSON.stringify({ tags, stages, lessons })
	);
};

const generateLessonsJson = async () => {
	const startTime = process.hrtime();
	const pages = await getPages();

	let lessonsData = [];
	const stagesData = {};
	const tagsData = new Set();

	pages.forEach((page) => {
		const lessonElement = getLessonElement(page);

		if (!lessonElement) {
			console.info({ page });
			return;
		}

		const url = getUrl(page);
		const pathParts = page.split('/');
		const language = pathParts[2];
		const stage = parseInt(pathParts[4], 10);
		const index = getLessonIndex(lessonElement);
		const title = getLessonTitle(lessonElement, pathParts.pop(), index);
		const summary = lessonElement.attributes.summary;
		const previous = lessonElement.attributes.previous;
		const next = lessonElement.attributes.next;
		const furtherInformationUrls = lessonElement.attributes.furtherInformationUrls?.split(' ');
		const content = lessonElement.structuredText.trim();

		// stages data
		if (index === 1) {
			stagesData[stage] = lessonElement.attributes.title;
		}

		// tags data
		const tags = lessonElement.attributes.tags?.split(' ');
		if (tags) {
			tags.forEach((tag) => tagsData.add(tag));
		}

		lessonsData.push({
			url,
			language,
			stage,
			index,
			title,
			summary,
			tags,
			previous,
			next,
			furtherInformationUrls,
			content
		});
	});

	lessonsData = lessonsData.sort((a, b) => a.index - b.index);
	writeLessonsJsonFile([...tagsData], stagesData, lessonsData);
	const endTime = process.hrtime(startTime);
	console.info(`Generated ${fileNameLessonsData} in: %ds %dms`, endTime[0], endTime[1] / 1000000);
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
	console.info(`Generated ${fileName} in: %ds %dms`, endTime[0], endTime[1] / 1000000);
};

generateLessonsJson();
generateSitemapXml();
