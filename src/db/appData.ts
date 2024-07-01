import { openDatabase } from "./init";

export const addAppData = async (key: string, value: string) => {
  const db = await openDatabase();

  return await db.appData.add({ key, value });
};

export const getAppData = async (id: number) => {
  const db = await openDatabase();

  return await db.appData.get(id);
};

export const updateAppData = async (id: number, value: string) => {
  const db = await openDatabase();

  return await db.appData.update(id, { value });
};

export const deleteAppData = async (id: number) => {
  const db = await openDatabase();

  return await db.appData.delete(id);
};
