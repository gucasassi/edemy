// Imports
import express from "express";
import { register } from "../controllers/auth.js";

// Create Router
const router = express.Router();

// Routes
router.post("/register", register);

// Export router
export default router;
