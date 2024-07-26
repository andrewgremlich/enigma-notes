import { Dexie } from "dexie";

import type { AppDB } from "./types";

// https://dexie.org/docs/Tutorial/React
export const db = new Dexie("EnigmaNotes") as AppDB;

db.version(1).stores({
  appData: "key",
  notes: "id, content, parentNoteId, images, linkedNotes, tags, starred, created, updated",
});

// to use in react
// import { useLiveQuery } from "dexie-react-hooks";
// import { openDatabase } from "@/db/init";
//
// const getKey = useLiveQuery(
//   () => openDatabase()?.appData.where("key").equals('Hello').toArray() ?? [],
// );

// <h3>Test IndexDB</h3>
// <ul>
//   {getKey?.map((f) => (
//     <li key={f.id}>
//       key: {f.key}, value: {f.value}
//     </li>
//   ))}
// </ul>
// <button
//   type="button"
//   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
//   onClick={() => {
//     console.log("add key/val")
//     openDatabase()?.appData.add({ key: "Hello", value: "World" });
//   }}
// >
//   Add Key/Val
// </button>
