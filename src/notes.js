import { insert, getDB, saveDB } from "./db.js";

export const newNote = async (note, tags) => {
  const newNote = {
    tags,
    content: note,
    id: Date.now(),
  };

  await insert(newNote);
  return newNote;
};

export const getAllNotes = async () => {
  const { notes } = await getDB();
  return notes;
};
