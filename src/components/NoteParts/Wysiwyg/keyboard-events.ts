import isHotkey from "is-hotkey";
import type { KeyboardEvent } from "react";

import { EditorActions } from "./editor-features/actions";
import { isFeatureActive } from "./editor-features/isFeatureActive";
import type { CustomEditor } from "./wysiwyg-types";

export const KeyboardShortcuts =
  (editor: CustomEditor) => (event: KeyboardEvent<HTMLDivElement>) => {
    if (isHotkey("Enter", event)) {
      event.preventDefault();
      EditorActions.addNewDefaultNode(editor);
    }

    if (isHotkey("mod+shift+.", event)) {
      EditorActions.toggleBlockquote(editor);
    }

    if (isHotkey("mod+shift+`", event)) {
      EditorActions.toggleCodeBlock(editor);
    }

    if (isHotkey("mod+shift+b", event)) {
      EditorActions.toggleBoldMark(editor);
    }

    if (isHotkey("mod+shift+i", event)) {
      EditorActions.toggleItalicMark(editor);
    }

    if (isHotkey("mod+shift+u", event)) {
      console.log("u")
      EditorActions.toggleUnderlinedMark(editor);
    }

    if (isHotkey("mod+shift+1", event)) {
      console.log("h1")
      EditorActions.toggleHeading(editor, 1);
    }

    if (isHotkey("mod+shift+2", event)) {
      EditorActions.toggleHeading(editor, 2);
    }

    if (isHotkey("mod+shift+3", event)) {
      EditorActions.toggleHeading(editor, 3);
    }

    if (isHotkey("mod+shift+4", event)) {
      EditorActions.toggleHeading(editor, 4);
    }

    if (event.key === "&" && !isFeatureActive.isCodeBlockActive(editor)) {
      editor.insertText("and");
    }
  };
