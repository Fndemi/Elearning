import mongoose, { Schema, Document, Types } from "mongoose";

export interface ILesson extends Document {
  title: string;
  content: string;
  duration: number; // in minutes
  course: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const LessonSchema: Schema<ILesson> = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    duration: { type: Number, required: true },
    course: { type: Schema.Types.ObjectId, ref: "Course", required: true },
  },
  { timestamps: true }
);

const Lesson = mongoose.model<ILesson>("Lesson", LessonSchema);
export default Lesson;
