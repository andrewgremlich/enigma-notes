import "./App.css";

import { useState } from "react";
import {
	appCacheDir,
	appConfigDir,
	appDataDir,
	appLogDir,
	appLocalDataDir,
} from "@tauri-apps/api/path";

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

	const showPaths = async () => {
		const cacheDir = await appCacheDir();
		const configDir = await appConfigDir();
		const dataDir = await appDataDir();
		const logDir = await appLogDir();
		const localDataDir = await appLocalDataDir();

		console.log("Cache dir:", cacheDir);
		console.log("Config dir:", configDir);
		console.log("Data dir:", dataDir);
		console.log("Log dir:", logDir);
		console.log("Local data dir:", localDataDir);
	};

	return (
		<>
			<div className="flex justify-center h-full w-full">
				<FileView />
				{view === "note" ? <Wysiwyg /> : null}
				<button type="button" onClick={showPaths}>
					Show dirs
				</button>
				<Settings placeIn="bottom-left" />
				<NewNote placeIn="bottom-right" />
			</div>
		</>
	);
}

export default App;
