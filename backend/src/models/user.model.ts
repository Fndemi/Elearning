import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: "student" | "instructor" | "admin";
  createdAt: Date;
}

const UserSchema: Schema<IUser> = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["student", "instructor", "admin"], default: "student" },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IUser>("User", UserSchema);
