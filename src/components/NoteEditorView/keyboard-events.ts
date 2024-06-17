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

    if (isHotkey("mod+`", event)) {
      EditorActions.toggleCodeBlock(editor);
    }

    if (isHotkey("mod+b", event)) {
      EditorActions.toggleBoldMark(editor);
    }

    if (isHotkey("mod+i", event)) {
      EditorActions.toggleItalicMark(editor);
    }

    if (isHotkey("mod+u", event)) {
      EditorActions.toggleUnderlinedMark(editor);
    }

    if (isHotkey("mod+1", event)) {
      EditorActions.toggleHeading(editor, 1);
    }

    if (isHotkey("mod+2", event)) {
      EditorActions.toggleHeading(editor, 2);
    }

    if (isHotkey("mod+3", event)) {
      EditorActions.toggleHeading(editor, 3);
    }

    if (isHotkey("mod+4", event)) {
      EditorActions.toggleHeading(editor, 4);
    }

    if (event.key === "&" && !isFeatureActive.isCodeBlockActive(editor)) {
      editor.insertText("and");
    }
  };
