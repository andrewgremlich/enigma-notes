import { Button } from "@headlessui/react";
import { useReducer } from "react";
import { FiAlignLeft, FiDatabase } from "react-icons/fi";
import { useLiveQuery } from "dexie-react-hooks";

import { defaultNoteStyle } from "@/utils/style";
import { openDatabase } from "@/db/init";

import { TagNote } from "../NoteParts/TagNote";
import { Wysiwyg } from "../NoteParts/Wysiwyg";
import { defaultState, noteEditorViewReducer } from "./state";

export const NoteEditorView = () => {
  const getKey = useLiveQuery(
    () => openDatabase()?.appData.where("key").equals('Hello').toArray() ?? [],
  );
  const [state, dispatch] = useReducer(noteEditorViewReducer, defaultState);

  // TODO: a way to write the file in the right spot. then think of a way for encryption.
  // TODO: and exporter to MD, Word, PDF
  return (
    <div className={defaultNoteStyle}>
      <h3>Test IndexDB</h3>
      <ul>
        {getKey?.map((f) => (
          <li key={f.id}>
            key: {f.key}, value: {f.value}
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => {
					console.log("add key/val")
          openDatabase()?.appData.add({ key: "Hello", value: "World" });
        }}
      >
        Add Key/Val
      </button>
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
