import { openDatabase } from "./init";

export const addNote = async (title: string, content: string) => {
  const db = await openDatabase();

  const created = Date.now();
  const updated = created;

  return await db.notes.add({ title, content, created, updated });
};

export const updateNote = async (
  id: number,
  title: string,
  content: string
) => {
  const db = await openDatabase();

  const updated = Date.now();

  return await db.notes.update(id, { title, content, updated });
};

export const deleteNote = async (id: number) => {
  const db = await openDatabase();

  return await db.notes.delete(id);
};

export const getNotes = async () => {
  const db = await openDatabase();

  return await db.notes.toArray();
};

export const getNote = async (id: number) => {
  const db = await openDatabase();

  return await db.notes.get(id);
};
