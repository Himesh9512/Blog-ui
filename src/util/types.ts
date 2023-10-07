export interface Post {
	id: string;
	title: string;
	content: string;
	date: string;
}

export interface Comment {
	id: string;
	username: string;
	text: string;
	date: string;
}
