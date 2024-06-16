import { Editor, Element } from "slate";

import type { CustomEditor } from "../wysiwyg-types";

export const isFeatureActive = {
	isHeadingActive(editor: CustomEditor, level: number) {
		const [match] = Editor.nodes(editor, {
			match: (node) =>
				Element.isElement(node) ? node.type === "heading" : false,
		});

		return match && match[0].level === level;
	},

	isBoldMarkActive(editor: CustomEditor) {
		const marks = Editor.marks(editor);

		return marks ? marks.bold === true : false;
	},

	isCodeBlockActive(editor: CustomEditor) {
		const [match] = Editor.nodes(editor, {
			match: (node) => (Element.isElement(node) ? node.type === "code" : false),
		});

		return !!match;
	},

	isBlockquoteActive(editor: CustomEditor) {
		const [match] = Editor.nodes(editor, {
			match: (node) =>
				Element.isElement(node) ? node.type === "blockquote" : false,
		});

		return !!match;
	},

	isItalicMarkActive(editor: CustomEditor) {
		const marks = Editor.marks(editor);

		return marks ? marks.italic === true : false;
	},

	isUnderlinedMarkActive(editor: CustomEditor) {
		const marks = Editor.marks(editor);

		return marks ? marks.underlined === true : false;
	},
};
