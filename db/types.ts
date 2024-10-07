import type { Dexie, EntityTable } from "dexie";

export type AppDataKey =
  | "cryptoKey"
  | "activeNoteView"
  | "allowEndDate"
  | "featureFlags"
  | "mapLocation";

export type AppDataValueObject = {
  [key: string]: string | boolean | number;
};

export type AppDataValue = string | AppDataValueObject | CryptoKey | boolean;

export type AppData = {
  key: AppDataKey;
  value: AppDataValue;
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
      appData: EntityTable<AppData, "key">;
      notes: EntityTable<Note, "id">;
    };
