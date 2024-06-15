import { Editor, Transforms, Element } from "slate";

import type { CustomEditor } from "../wysiwyg-types";

import { isFeatureActive } from "./isFeatureActive";

export const EditorActions = {
  toggleUnderlinedMark(editor: CustomEditor) {
    const isActive = isFeatureActive.isUnderlinedMarkActive(editor);

    if (isActive) {
      Editor.removeMark(editor, "underlined");
    } else {
      Editor.addMark(editor, "underlined", true);
    }
  },

  toggleItalicMark(editor: CustomEditor) {
    const isActive = isFeatureActive.isItalicMarkActive(editor);

    if (isActive) {
      Editor.removeMark(editor, "italic");
    } else {
      Editor.addMark(editor, "italic", true);
    }
  },

  toggleBoldMark(editor: CustomEditor) {
    const isActive = isFeatureActive.isBoldMarkActive(editor);

    if (isActive) {
      Editor.removeMark(editor, "bold");
    } else {
      Editor.addMark(editor, "bold", true);
    }
  },

  toggleCodeBlock(editor: CustomEditor) {
    const isActive = isFeatureActive.isCodeBlockActive(editor);

    Transforms.setNodes(
      editor,
      { type: isActive ? undefined : "code" },
      {
        match: (node) =>
          Element.isElement(node) && Editor.isBlock(editor, node),
      }
    );
  },

  toggleBlockquote(editor: CustomEditor) {
    const isActive = isFeatureActive.isBlockquoteActive(editor);

    Transforms.setNodes(
      editor,
      { type: isActive ? undefined : "blockquote" },
      {
        match: (node) =>
          Element.isElement(node) && Editor.isBlock(editor, node),
      }
    );
  },
};
