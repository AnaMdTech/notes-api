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

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
