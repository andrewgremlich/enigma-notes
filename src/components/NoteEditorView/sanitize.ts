import sanitizeHtml from "sanitize-html";

export const getData = (contents: string) => {
	const sanitized = sanitizeHtml(contents, {
		allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
		allowedAttributes: {
			a: ["href", "name", "target"],
			img: ["src", "srcset", "alt", "title", "width", "height", "loading"],
		},
		selfClosing: [
			"img",
			"br",
			"hr",
			"area",
			"base",
			"basefont",
			"input",
			"link",
			"meta",
		],
	});

	return sanitizeHtml(sanitized);
};
