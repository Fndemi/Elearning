import mongoose, { Schema, Document, Types } from "mongoose";

export interface ICourse extends Document {
  title: string;
  description: string;
  price: number;
  instructor: Types.ObjectId;
  lessons: Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const CourseSchema: Schema<ICourse> = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, default: 0 },
    instructor: { type: Schema.Types.ObjectId, ref: "Instructor", required: true },
    lessons: [{ type: Schema.Types.ObjectId, ref: "Lesson" }],
  },
  { timestamps: true }
);

const Course = mongoose.model<ICourse>("Course", CourseSchema);
export default Course;
