import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";

import { getAppData } from "@/db/appData";

// import { TagNote } from "../NoteParts/TagNote";
import { Wysiwyg } from "../NoteParts/Wysiwyg";
// import { NoteDate } from "../NoteParts/NoteDate";
import { NoteArticle, PrimaryButton } from "../Style";
import { getNote, newNote } from "@/db/notes";

export const NoteEditorView = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeNoteId = searchParams.get("activeNoteId");

  const cryptoKey = useQuery({
    queryKey: ["get", "cryptoKey"],
    queryFn: async () => await getAppData("cryptoKey"),
  });
  const getNoteFromQuery = useQuery({
    queryKey: ["get", "note", activeNoteId],
    queryFn: async () => {
      if (!activeNoteId) return;
      const note = await getNote(activeNoteId);
      return note;
    },
    enabled: !!activeNoteId,
  });

  const createNewNote = useMutation({
    mutationFn: async (firstContent: string) => newNote(firstContent),
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
        className="min-h-96 bg-slate-950 shadow-2xl rounded-md"
        updateNote={(note) => console.log("Updating note", note)}
      />

      {/* <TagNote
        updateTags={(tags) => dispatch({ type: "UPDATE_TAGS", payload: tags })}
        removeTag={(tag) => dispatch({ type: "REMOVE_TAG", payload: tag })}
        tags={state.tags}
      />
      <NoteDate /> */}
    </NoteArticle>
  );
};
