const express = require("express");
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
const mongoose = require("mongoose");

const mongoUrl = process.env.MONGO_URL; // <<< IMPORTANT: Now using Docker ENV

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("✅ Connected to MongoDB successfully!");
  })
  .catch(err => {
    console.error("❌ Cannot connect to MongoDB!", err.message);
    process.exit(1);
  });

// Simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Test application." });
});

// Routes
require("./app/routes/turorial.routes")(app);

// Start server
const PORT = process.env.PORT || 3000; // IMPORTANT: Docker backend uses port 3000
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}.`);
});
