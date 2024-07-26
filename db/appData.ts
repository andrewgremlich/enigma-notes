import { db } from "./init";
import type { AppDataKey, AppDataValue } from "./types";

export const addAppData = async (key: AppDataKey, value: AppDataValue) => {
  try {
    return await db?.appData.add({
      key,
      value,
    });
  } catch (error) {
    console.error("Error adding app data", error);
  }
};

export const putAppData = async (key: AppDataKey, value: AppDataValue) => {
  try {
    return await db?.appData.put({
      key,
      value,
    });
  } catch (error) {
    console.error("Error putting app data", error);
  }
};

export const getAppData = async (key: AppDataKey) => {
  try {
    return await db?.appData.get(key);
  } catch (error) {
    console.error("Error getting app data", error);
  }
};

export const updateAppData = async (key: AppDataKey, value: AppDataValue) => {
  try {
    return await db?.appData.update(key, { value });
  } catch (error) {
    console.error("Error updating app data", error);
  }
};

export const deleteAppData = async (key: AppDataKey) => {
  try {
    return await db?.appData.delete(key);
  } catch (error) {
    console.error("Error deleting app data", error);
  }
};
