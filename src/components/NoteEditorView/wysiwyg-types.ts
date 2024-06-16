import type { BaseEditor } from "slate";
import type { HistoryEditor } from "slate-history";
import type { ReactEditor } from "slate-react";

export type CustomEditor = BaseEditor & ReactEditor & HistoryEditor;

export type CustomText = {
	text: string;
	// type?: string;
	// children?: CustomText[];
	bold?: boolean;
	italic?: boolean;
	underlined?: boolean;
	list?: boolean;
	hr?: boolean;
};

export type ParagraphElement = {
	type: "paragraph";
	children: CustomText[];
};

// TODO: implement heading!
export type HeadingElement = {
	type: "heading";
	level: number;
	children: CustomText[];
};

export type CodeElement = {
	type: "code";
	children: CustomText[];
};

export type BlockquoteElement = {
	type: "blockquote";
	children: CustomText[];
};

export type CustomElement =
	| ParagraphElement
	| HeadingElement
	| CodeElement
	| BlockquoteElement;

declare module "slate" {
	interface CustomTypes {
		Editor: CustomEditor;
		Element: CustomElement;
		Text: CustomText;
	}
}
