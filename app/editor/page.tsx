"use client";

import { useLiveQuery } from "dexie-react-hooks";

import { AccountNotesView } from "@/components/AccountNotesView";
import { NoteEditorView } from "@/components/NoteEditorView";
import { NewNote } from "@/components/NewNote";
import {
  getActiveNoteFromAppData,
  addActiveNoteToAppData,
  getCryptoKey,
} from "@/db/appData";
import type { FeatureFlag } from "@/db/types";
import { encryptData, decryptData } from "@/util/crypto";

export default function Home() {
  const activeNoteView = useLiveQuery(() => getActiveNoteFromAppData());

  // make this page to query for a password to encrypt the notes.
  // otherwise go to an editor route.

  return (
    <main className="h-full w-full flex">
      <button
        type="button"
        onClick={async () => {
          console.log("Test Encrypt");
          const derivedKey = await getCryptoKey();
          const { iv, ciphertext } = await encryptData(
            "test",
            derivedKey?.value as CryptoKey,
          );
          console.log(
            await decryptData(ciphertext, derivedKey?.value as CryptoKey, iv),
          );
        }}
      >
        Test Encrypt
      </button>
      <AccountNotesView />
      {activeNoteView?.value === "note" ? (
        <NoteEditorView />
      ) : (
        <NoteEditorView />
      )}
      <NewNote
        placeIn="bottom-right"
        activeNoteView={activeNoteView?.value as FeatureFlag}
        activateNoteView={(label: FeatureFlag) => addActiveNoteToAppData(label)}
      />
    </main>
  );
}
