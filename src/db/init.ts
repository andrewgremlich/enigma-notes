import { Dexie } from "dexie";

import type { AppDB } from "./types";

let db: AppDB;

export const openDatabase = () => {
  try {
    if (!db) {
      db = new Dexie("EnigmaNotes") as AppDB;

      db.version(1).stores({
        appData: "++id, key, value",
        notes: "++id, title, content, created, updated",
        events: "++id, title, content, start, end, created, updated",
      });
    }

    return db;
  } catch (error) {
    console.error("Error opening database", error);
    db.close();
  }
};
