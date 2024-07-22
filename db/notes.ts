import { db } from "./init";

export const addNote = async (content: string) => {
  try {
    const created = Date.now();
    const updated = created;

    return await db?.notes.add({
      id: crypto.randomUUID(),
      content,
      parentNoteId: "",
      images: [],
      linkedNotes: [],
      tags: [],
      starred: false,
      created,
      updated,
    });
  } catch (error) {
    // Handle the error here
    console.error("Error adding note:", error);
    throw error; // Rethrow the error to propagate it
  }
};

export const deleteNote = async (id: string) => {
  try {
    return await db?.notes.delete(id);
  } catch (error) {
    // Handle the error here
    console.error("Error deleting note:", error);
    throw error; // Rethrow the error to propagate it
  }
};

export const getNotes = async () => {
  try {
    return await db?.notes.toArray();
  } catch (error) {
    // Handle the error here
    console.error("Error getting notes:", error);
    throw error; // Rethrow the error to propagate it
  }
};

export const getNote = async (id: string) => {
  try {
    return await db?.notes.get(id);
  } catch (error) {
    // Handle the error here
    console.error("Error getting note:", error);
    throw error; // Rethrow the error to propagate it
  }
};
