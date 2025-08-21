import mongoose, { Schema, Document } from "mongoose";
import { IUser } from "./user.model";

export interface ICourse extends Document {
  title: string;
  description: string;
  instructor: IUser["_id"];
  lessons: mongoose.Types.ObjectId[];
  createdAt: Date;
}

const CourseSchema: Schema<ICourse> = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  instructor: { type: mongoose.Types.ObjectId, ref: "User", required: true },
  lessons: [{ type: mongoose.Types.ObjectId, ref: "Lesson" }],
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<ICourse>("Course", CourseSchema);
