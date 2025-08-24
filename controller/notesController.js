let notes = [
  { id: 1, title: "Learn Node.js", content: "Study Express basics" },
  { id: 2, title: "Practice React", content: "Build components" },
];

// GET all notes
const getNotes = (req, res) => {
  res.json(notes);
};

// GET note by ID
const getNoteById = (req, res) => {
  const note = notes.find((n) => n.id === parseInt(req.params.id));
  if (!note) return res.status(404).json({ message: "Note not found" });
  res.json(note);
};

// CREATE note
const createNote = (req, res) => {
  const { title, content } = req.body;
  const newNote = { id: notes.length + 1, title, content };
  notes.push(newNote);
  res.status(201).json(newNote);
};

// UPDATE note
const updateNote = (req, res) => {
  const note = notes.find((n) => n.id === parseInt(req.params.id));
  if (!note) return res.status(404).json({ message: "Note not found" });

  const { title, content } = req.body;
  note.title = title || note.title;
  note.content = content || note.content;

  res.json(note);
};

// DELETE note
const deleteNote = (req, res) => {
  notes = notes.filter((n) => n.id !== parseInt(req.params.id));
  res.json({ message: "Note deleted" });
};

module.exports = { getNotes, getNoteById, createNote, updateNote, deleteNote };
