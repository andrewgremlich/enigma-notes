import "./App.css";

import { useState } from "react";

import { FileView } from "./components/FileView";
// import { NoteEditorView } from "./components/NoteEditorView";
import { Wysiwyg } from "./components/NoteEditorView";
import { View } from "./types/views";

function App() {
	const [view, setView] = useState<View>(View.File);
	// async function greet() {
	// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
	//   setGreetMsg(await invoke("greet", { name }));
	// }

	return (
		<>
			<div className="flex h-full w-full">
				<FileView />
				<Wysiwyg />
			</div>
		</>
	);
}

export default App;
