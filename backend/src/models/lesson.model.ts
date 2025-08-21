import mongoose, { Schema, Document, Types } from "mongoose";

export interface ILesson extends Document {
  title: string;
  content: string;
  course: Types.ObjectId; 
  duration: number;
  createdAt: Date;
}

const LessonSchema: Schema<ILesson> = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  course: { type: Schema.Types.ObjectId, ref: "Course", required: true }, 
  duration: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<ILesson>("Lesson", LessonSchema);
