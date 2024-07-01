import { openDatabase } from "./init";

export const addNote = async (title: string, content: string) => {
  try {
    const db = await openDatabase();
    const created = Date.now();
    const updated = created;
    const start = created;
    const end = created;

    return await db?.notes.add({ title, content, start, end, created, updated });
  } catch (error) {
    // Handle the error here
    console.error("Error adding note:", error);
    throw error; // Rethrow the error to propagate it
  }
};

export const updateNote = async (
  id: number,
  title: string,
  content: string
) => {
  try {
    const db = await openDatabase();
    const updated = Date.now();

    return await db?.notes.update(id, { title, content, updated });
  } catch (error) {
    // Handle the error here
    console.error("Error updating note:", error);
    throw error; // Rethrow the error to propagate it
  }
};

export const deleteNote = async (id: number) => {
  try {
    const db = await openDatabase();
    return await db?.notes.delete(id);
  } catch (error) {
    // Handle the error here
    console.error("Error deleting note:", error);
    throw error; // Rethrow the error to propagate it
  }
};

export const getNotes = async () => {
  try {
    const db = await openDatabase();
    return await db?.notes.toArray();
  } catch (error) {
    // Handle the error here
    console.error("Error getting notes:", error);
    throw error; // Rethrow the error to propagate it
  }
};

export const getNote = async (id: number) => {
  try {
    const db = await openDatabase();
    return await db?.notes.get(id);
  } catch (error) {
    // Handle the error here
    console.error("Error getting note:", error);
    throw error; // Rethrow the error to propagate it
  }
};
