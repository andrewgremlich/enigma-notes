import { Editor, Transforms, Element } from "slate";
import type { CustomEditor } from "./wysiwyg-types";

export const EditorActions = {
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

  toggleBoldMark(editor: CustomEditor) {
    const isActive = EditorActions.isBoldMarkActive(editor);

    if (isActive) {
      Editor.removeMark(editor, "bold");
    } else {
      Editor.addMark(editor, "bold", true);
    }
  },

  toggleCodeBlock(editor: CustomEditor) {
    const isActive = EditorActions.isCodeBlockActive(editor);

    Transforms.setNodes(
      editor,
      { type: isActive ? undefined : "code" },
      {
        match: (node) =>
          Element.isElement(node) && Editor.isBlock(editor, node),
      }
    );
  },
};
