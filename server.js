const express = require("express");
const app = express();
const PORT = 5000;

// In-memory notes storage
let notes = [
  { id: 1, title: "Learn Node.js", content: "Study Express basics" },
  { id: 2, title: "Practice React", content: "Build components" },
];

// Middleware to parse JSON
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Notes API is running...");
});

app.get("/notes", (req, res) => {
  res.json(notes);
})

app.get("/notes/:id", (req, res) => {
  const noteId = parseInt(req.params.id);
  const note = notes.find(n => n.id === noteId);
  if (note) {
    res.json(note);
  } else {
    res.status(404).json({ message: "Note not found" });
  }
})

app.post("/notes", (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ message: "Title and content are required" });
  }

  const newNote = {
    id: notes.length + 1,
    title,
    content,
  }

  notes.push(newNote);
  res.status(201).json({
    message: "Note created",
    note: newNote,
  });
})

app.put("/notes/:id", (req, res) => {
  const note = notes.find(n => n.id === parseInt(req.params.id));
  if (!note) {
    return res.status(404).json({ message: "Note not found" });
  }

  const { title, content } = req.body;
  note.title = title || note.title;
  note.content = content || note.content;

  res.json({
    message: "Note updated",
    note,
  });
})

app.delete("/notes/:id", (req, res) => {
  notes.filter(n => n.id !== parseInt(req.params.id));
  res.json({ message: "Note deleted" });
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
