const express = require("express");
const logger = require("./middleware/logger");
const notesRoutes = require("./routes/notes");

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(logger);

// Routes
app.use("/notes", notesRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Notes API is running...");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
