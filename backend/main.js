// Imports
import cors from "cors";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import express from "express";
import connectMongoDB from "./configs/mongodb.js";

import auth from "./routes/auth.js";

// Load env files
dotenv.config("env");

// Connect to MongoDB
connectMongoDB();

// Initialize Express app
const app = express();

// Apply middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use(`/api/v1/auth`, auth);

// Define the port to run the server on
const PORT = process.env.APP_PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`.yellow);
});
