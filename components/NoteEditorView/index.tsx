import { useReducer } from "react";

import { defaultNoteStyle } from "@/utils/style";

import { TagNote } from "../NoteParts/TagNote";
import { Wysiwyg } from "../NoteParts/Wysiwyg";
import { defaultState, noteEditorViewReducer } from "./state";
import { NoteDate } from "../NoteDate";

export const NoteEditorView = () => {
  const [state, dispatch] = useReducer(noteEditorViewReducer, defaultState);

  return (
    <div className={`${defaultNoteStyle}`}>
      <Wysiwyg
        className="min-h-96"
        updateNote={(note) => dispatch({ type: "UPDATE_NOTE", payload: note })}
      />
      <TagNote
        updateTags={(tags) => dispatch({ type: "UPDATE_TAGS", payload: tags })}
        removeTag={(tag) => dispatch({ type: "REMOVE_TAG", payload: tag })}
        tags={state.tags}
      />
      <NoteDate />
    </div>
  );
};
