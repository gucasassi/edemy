// Imports
import bcrypt from "bcryptjs";
import { Schema, model } from "mongoose";

// Create User schema
const UserSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      required: [true, "Email is required"],
      match: [/.+\@.+\..+/, "Please fill a valid email address"], // Validate email format
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters long"], // Minimum password length
    },
    picture: {
      type: String,
      default: "/avatar.png", // Default avatar
    },
    role: {
      type: String,
      default: "Subscriber",
      enum: {
        values: ["Subscriber", "Instructor", "Admin"],
        message: "{VALUE} is not a supported role", // Custom message for invalid role
      },
    },
  },
  { timestamps: true } // Automatically create createdAt and updatedAt timestamps
);

// Encrypt password using bcrypt before saving
UserSchema.pre("save", async function (next) {
  // Only encrypt the password if it has been modified (or is new)
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Export the User model
export default model("User", UserSchema);
