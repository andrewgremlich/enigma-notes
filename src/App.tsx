import "./App.css";

// import {
//   appCacheDir,
//   appConfigDir,
//   appDataDir,
//   appLocalDataDir,
//   appLogDir,
//   cacheDir as cacheDir2,
//   dataDir,
//   localDataDir,
// } from "@tauri-apps/api/path";
// import { invoke } from "@tauri-apps/api/tauri";
// import Database from "tauri-plugin-sql-api";
import { useState } from "react";

import type { NoteView } from "@/types/views";

import { FileView } from "./components/FileView";
import { NewNote } from "./components/NewNote";
import { NoteEditorView } from "./components/NoteEditorView";
import { EventEditorView } from "./components/EventEditorView";
import { Settings } from "./components/Settings";

function App() {
  const [view, setView] = useState<NoteView>("note");

  // async function loadDB() {
  //   const db = await Database.load("sqlite:test.db");

  //   const seed = await db.execute(
  //     "CREATE TABLE IF NOT EXISTS fruit (id INTEGER PRIMARY KEY, name TEXT)",
  //   );

  //   // this will not insert times chronogically
  //   await db.execute("INSERT INTO fruit (id, name) VALUES (1, 'apple')");
  //   await db.execute("INSERT INTO fruit (id, name) VALUES (3, 'pear')");
  //   await db.execute("INSERT INTO fruit (id, name) VALUES (4, 'kiwi')");
  //   await db.execute("INSERT INTO fruit (id, name) VALUES (2, 'banana')");

  //   const fruit = await db.select("SELECT * from fruit");

  //   console.log(fruit);
  // }

  // loadDB();

  // async function appDirs() {
  //   console.log(await invoke("get_app_dirs"));
  //   console.log(await invoke("greet", { name: "World" }));
  // }

  // appDirs();

  // const showPaths = async () => {
  //   const cacheDir = await appCacheDir();
  //   const configDir = await appConfigDir();
  //   const dataDir = await appDataDir();
  //   const logDir = await appLogDir();
  //   const localDataDir = await appLocalDataDir();
  //   const cacheDir2string = await cacheDir2();

  //   console.log("Cache dir:", cacheDir);
  //   console.log("Config dir:", configDir);
  //   console.log("Data dir:", dataDir);
  //   console.log("Log dir:", logDir);
  //   console.log("Local data dir:", localDataDir);
  //   console.log("Cache dir 2:", cacheDir2string);
  //   console.log("Data dir:", dataDir);
  //   console.log("Local data dir:", localDataDir);
  // };

  // showPaths();

  return (
    <>
      <div className="h-full w-full p-4">
        <FileView />
        {view === "note" ? (
          <NoteEditorView />
        ) : view === "calendar" ? (
          <EventEditorView />
        ) : null}
        <Settings placeIn="bottom-left" />
        <NewNote
          activeNote={view}
          placeIn="bottom-right"
          activateView={(view: NoteView) => setView(view)}
        />
      </div>
    </>
  );
}

export default App;
