import type { BaseEditor } from "slate";
import type { HistoryEditor } from "slate-history";
import type { ReactEditor } from "slate-react";

type CustomText = {
  text: string;
  // type?: string;
  // children?: CustomText[];
  bold?: boolean;
  italic?: boolean;
  underlined?: boolean;
  list?: boolean;
  hr?: boolean;
};

type ParagraphElement = {
  type: "paragraph";
  children: CustomText[];
};

type HeadingElement = {
  type: "heading";
  level: number;
  children: CustomText[];
};

type CodeElement = {
  type: "code";
  children: CustomText[];
};

type BlockquoteElement = {
  type: "blockquote";
  children: CustomText[];
};

export type ImageElement = {
  type: "image";
  url: string;
  children: CustomText[];
};

export type CustomEditor = BaseEditor & ReactEditor & HistoryEditor;

declare module "slate" {
  interface CustomTypes {
    Editor: CustomEditor;
    Element:
      | HeadingElement
      | CodeElement
      | BlockquoteElement
      | ImageElement
      | ParagraphElement;
    Text: CustomText;
  }
}
