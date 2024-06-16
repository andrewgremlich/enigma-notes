import "./App.css";

import { useState } from "react";
import {
	appCacheDir,
	appConfigDir,
	appDataDir,
	appLogDir,
	appLocalDataDir,
	cacheDir as cacheDir2,
} from "@tauri-apps/api/path";
import { invoke } from "@tauri-apps/api/tauri";

import { FileView } from "./components/FileView";
import { Settings } from "./components/Settings";
import { NewNote } from "./components/NewNote";
import { Wysiwyg } from "./components/NoteEditorView";
import type { NoteView } from "./types/views";

function App() {
	const [view, setView] = useState<NoteView>("note");

	async function appDirs() {
		// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
		console.log(await invoke("get_app_dirs"));
		console.log(await invoke("greet", { name: "World" }));
	}

	appDirs();

	const showPaths = async () => {
		const cacheDir = await appCacheDir();
		const configDir = await appConfigDir();
		const dataDir = await appDataDir();
		const logDir = await appLogDir();
		const localDataDir = await appLocalDataDir();
		const cacheDir2string = await cacheDir2();

		console.log("Cache dir:", cacheDir);
		console.log("Config dir:", configDir);
		console.log("Data dir:", dataDir);
		console.log("Log dir:", logDir);
		console.log("Local data dir:", localDataDir);
		console.log("Cache dir 2:", cacheDir2string);
	};

	return (
		<>
			<div className="h-full w-full">
				<FileView />
				{view === "note" ? <Wysiwyg /> : null}
				<Settings placeIn="bottom-left" />
				<NewNote placeIn="bottom-right" />
			</div>
		</>
	);
}

export default App;
