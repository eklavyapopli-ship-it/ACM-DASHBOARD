import mongoose, { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  name: { type: String },
  link: { type: String },
});

// ✅ Correct: check in mongoose.models first, then create model
export const Items = models.users || model("users", userSchema);
