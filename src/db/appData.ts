import { openDatabase } from "./init";

export const addAppData = async (key: string, value: string) => {
  try {
    const db = await openDatabase();
    return await db?.appData.add({ key, value });
  } catch (error) {
    console.error("Error adding app data", error);
  }
};

export const getAppData = async (id: number) => {
  try {
    const db = await openDatabase();
    return await db?.appData.get(id);
  } catch (error) {
    console.error("Error getting app data", error);
  }
};

export const updateAppData = async (id: number, value: string) => {
  try {
    const db = await openDatabase();
    return await db?.appData.update(id, { value });
  } catch (error) {
    console.error("Error updating app data", error);
  }
};

export const deleteAppData = async (id: number) => {
  try {
    const db = await openDatabase();
    return await db?.appData.delete(id);
  } catch (error) {
    console.error("Error deleting app data", error);
  }
};
