import { EditorActions } from "./custom-editor";
import type { CustomEditor } from "./wysiwyg-types";

export const KeyboardShortcuts = (keypressed: string, editor: CustomEditor) => {
  switch (keypressed) {
    case "`": {
      EditorActions.toggleCodeBlock(editor);
      break;
    }

    case "b": {
      EditorActions.toggleBoldMark(editor);
      break;
    }
  }
};

export const TextShortcuts = (keypressed: string, editor: CustomEditor) => {
  if (keypressed === "&") {
    editor.insertText("and");
  }
};
