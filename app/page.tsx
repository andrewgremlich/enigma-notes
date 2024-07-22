// import { useLiveQuery } from "dexie-react-hooks";

// import { AccountNotesView } from "@/components/AccountNotesView";
// import { NewNote } from "@/components/NewNote";
// import { NoteEditorView } from "@/components/NoteEditorView";
// import { getActiveNoteFromAppData, addActiveNoteToAppData } from "@/db/appData";
// import type { FeatureFlag } from "@/db/types";

export default function Home() {
  // const activeNoteView = useLiveQuery(() => getActiveNoteFromAppData());

  return (
    <main className="h-full w-full flex">
      <h1>Hello world</h1>
    </main>
  );
}

{
  /* <AccountNotesView /> 
{activeNoteView?.value === "note" ? (
  <NoteEditorView />
) : (
  <NoteEditorView />
)}
<NewNote
  placeIn="bottom-right"
  activeNoteView={activeNoteView?.value as FeatureFlag}
  activateNoteView={(label: FeatureFlag) => addActiveNoteToAppData(label)}
/> */
}
