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

export const findAllNotes = async (keyword) => {
  const { notes } = getDB();
  return notes.filter((note) =>
    note.content.toLowerCase().includes(keyword.toLowerCase())
  );
};
