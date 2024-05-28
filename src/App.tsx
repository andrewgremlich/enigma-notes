import "./App.css";

import React, { useState } from "react";

import { FileView } from "./components/FileView";
import { NoteView } from "./components/NoteView";
import { View } from "./types/views";

function App() {
	const [view, setView] = useState<View>(View.File);
	// async function greet() {
	// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
	//   setGreetMsg(await invoke("greet", { name }));
	// }

	return (
		<>
			<div className="flex min-h-screen">
				<FileView />
				<NoteView />
			</div>
		</>
	);
}

export default App;
