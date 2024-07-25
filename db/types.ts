import type { Dexie, EntityTable } from "dexie";

export type AppData = {
  id: string;
  key: string;
  value:
    | string
    | { [key: string]: string | boolean | number }
    | CryptoKey
    | boolean;
};

export type FeatureFlag =
  | "note"
  | "table"
  | "draw"
  | "music"
  | "chart"
  | "map"
  | "threeD";

export type Note = {
  id: string;
  content: string;
  parentNoteId: string;
  images: string[];
  linkedNotes: string[];
  tags: string[];
  starred: boolean;
  created: number;
  updated: number;
};

export type AppDB =
  | Dexie & {
      appData: EntityTable<AppData, "id">;
      notes: EntityTable<Note, "id">;
    };
