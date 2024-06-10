import "./App.css";

import { useState } from "react";

import { FileView } from "./components/FileView";
import { Settings } from "./components/Settings";
import { NewNote } from "./components/NewNote";
import { Wysiwyg } from "./components/NoteEditorView";
import type { NoteView } from "./types/views";

function App() {
	const [view, setView] = useState<NoteView>("note");
	// async function greet() {
	// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
	//   setGreetMsg(await invoke("greet", { name }));
	// }

	return (
		<>
			<div className="flex justify-center h-full w-full">
				<FileView />
				{view === "note" ? <Wysiwyg /> : null}
				<Settings placeIn="bottom-left" />
				<NewNote placeIn="bottom-right" />
			</div>
		</>
	);
}

export default App;
