import type { Dexie, EntityTable } from "dexie";

export type AppData = {
  id: number;
  key: string;
  value: string;
};

export type Note = {
  id: number;
  title: string;
  content: string;
  start: number;
  end: number;
  created: number;
  updated: number;
};

export type AppDB =
  | Dexie & {
      appData: EntityTable<AppData, "id">;
      notes: EntityTable<Note, "id">;
    };
