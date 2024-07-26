import { useReducer } from "react";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { getCryptoKey } from "@/db/appData";

import { TagNote } from "../NoteParts/TagNote";
import { Wysiwyg } from "../NoteParts/Wysiwyg";
import { NoteDate } from "../NoteParts/NoteDate";
import { defaultState, noteEditorViewReducer } from "./state";
import { NoteArticle, PrimaryButton } from "../Style";

export const NoteEditorView = () => {
  const router = useRouter();
  const [state, dispatch] = useReducer(noteEditorViewReducer, defaultState);
  const cryptoKey = useQuery({
    queryKey: ["get", "cryptoKey"],
    queryFn: async () => await getCryptoKey(),
  });

  return (
    <NoteArticle>
      {!cryptoKey.data && !cryptoKey.isLoading && (
        <div className="w-full bg-red-400 p-2 mb-5 text-slate-950 rounded-sm flex justify-between items-center">
          <p>
            <span>Crypto key is not set</span>
          </p>

          <PrimaryButton onClick={() => router.push("/settings")}>
            Go to settings to set your crypto key
          </PrimaryButton>
        </div>
      )}
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
    </NoteArticle>
  );
};
