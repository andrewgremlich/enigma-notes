import { Button } from "@headlessui/react";
import { useReducer } from "react";
import { FiAlignLeft, FiDatabase } from "react-icons/fi";

import { defaultNoteStyle } from "@/utils/style";

import { TagNote } from "../NoteParts/TagNote";
import { Wysiwyg } from "../NoteParts/Wysiwyg";
import { defaultState, noteEditorViewReducer } from "./state";

export const NoteEditorView = () => {
  const [state, dispatch] = useReducer(noteEditorViewReducer, defaultState);

  // TODO: a way to write the file in the right spot. then think of a way for encryption.
  // TODO: and exporter to MD, Word, PDF
  return (
    <div className={defaultNoteStyle}>
      <FiAlignLeft size={40} className="mb-5" />
      <Wysiwyg
        className="min-h-96"
        updateNote={(note) => dispatch({ type: "UPDATE_NOTE", payload: note })}
      />
      <TagNote
        updateTags={(tags) => dispatch({ type: "UPDATE_TAGS", payload: tags })}
        removeTag={(tag) => dispatch({ type: "REMOVE_TAG", payload: tag })}
        tags={state.tags}
      />
      <Button onClick={() => console.log("openmetadata")}>
        <FiDatabase size={40} className="mt-5" />
      </Button>
    </div>
  );
};
