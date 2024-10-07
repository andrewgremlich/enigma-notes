"use client";

import { useLiveQuery } from "dexie-react-hooks";
import { Suspense } from "react";

import { SideBar } from "@/components/SideBar";
import { NoteEditorView } from "@/components/NoteEditorView";
import { NewNote } from "@/components/NewNote";
import { getAppData, putAppData } from "@/db/appData";
import type { FeatureFlag } from "@/db/types";
import { Loading } from "@/components/Loading";

export default function Home() {
  const activeNoteView = useLiveQuery(() => getAppData("activeNoteView"));

  return (
    <Suspense fallback={<Loading />}>
      <main className="h-full w-full flex">
        <SideBar />
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
    </Suspense>
  );
}
