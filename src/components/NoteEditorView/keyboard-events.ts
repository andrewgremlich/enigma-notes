import isHotkey from "is-hotkey";
import type { KeyboardEvent } from "react";

import { EditorActions } from "./custom-editor";
import type { CustomEditor } from "./wysiwyg-types";

export const KeyboardShortcuts =
  (editor: CustomEditor) => (event: KeyboardEvent<HTMLDivElement>) => {
    if (isHotkey("mod+`", event)) {
      event.preventDefault();
      EditorActions.toggleCodeBlock(editor);
    }

    if (isHotkey("mod+b", event)) {
      event.preventDefault();
      EditorActions.toggleBoldMark(editor);
    }

    if (event.key === "&" && !EditorActions.isCodeBlockActive(editor)) {
      event.preventDefault();
      editor.insertText("and");
    }
  };
