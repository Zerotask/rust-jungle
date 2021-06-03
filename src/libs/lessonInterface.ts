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

export interface Lessons {
	tags: string[];
	stages: number[];
	lessons: LessonData[];
}
