// Imports
import dotenv from "dotenv";
import express from "express";

// Load env files
dotenv.config("env");

// Initialize Express app
const app = express();

// Routes
app.get("/", (req, res) => {
  res.status(200).json({ success: true, messsage: "Hi there!" });
});

// Define the port to run the server on
const PORT = process.env.APP_PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
