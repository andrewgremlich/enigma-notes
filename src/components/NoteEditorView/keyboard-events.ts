import isHotkey from "is-hotkey";
import type { KeyboardEvent } from "react";

import { EditorActions } from "./editor-features/actions";
import { isFeatureActive } from "./editor-features/isFeatureActive";
import type { CustomEditor } from "./wysiwyg-types";

export const KeyboardShortcuts =
  (editor: CustomEditor) => (event: KeyboardEvent<HTMLDivElement>) => {
    // not sure of the prevent default is completely necessary
    // event.preventDefault();

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

    if (event.key === "#" && !isFeatureActive.isCodeBlockActive(editor)) {
      EditorActions.toggleHeading(editor, 1);
    }

    if (event.key === "##" && !isFeatureActive.isCodeBlockActive(editor)) {
      EditorActions.toggleHeading(editor, 2);
    }

    if (event.key === "&" && !isFeatureActive.isCodeBlockActive(editor)) {
      editor.insertText("and");
    }
  };
