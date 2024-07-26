"use client";

import { useLiveQuery } from "dexie-react-hooks";

import { AccountNotesView } from "@/components/AccountNotesView";
import { NoteEditorView } from "@/components/NoteEditorView";
import { NewNote } from "@/components/NewNote";
import { getAppData, putAppData } from "@/db/appData";
import type { FeatureFlag } from "@/db/types";

export default function Home() {
  const activeNoteView = useLiveQuery(() => getAppData("activeNoteView"));

  return (
    <main className="h-full w-full flex">
      <AccountNotesView />
      {activeNoteView?.value === "note" ? (
        <NoteEditorView />
      ) : (
        <NoteEditorView />
      )}
      <NewNote
        placeIn="bottom-right"
        activeNoteView={activeNoteView?.value as FeatureFlag}
        activateNoteView={(label: FeatureFlag) =>
          putAppData("activeNoteView", label)
        }
      />
    </main>
  );
}
