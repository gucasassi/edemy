// Imports
import User from "../models/User.js";

// @desc    Register new user
// @route   POST /api/v1/auth/register
// @access  Public
export const register = async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await User.create({ name, email, password });

  res.status(200).json({ success: true, data: user });
};
