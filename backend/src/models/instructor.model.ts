import mongoose, { Schema, Document } from "mongoose";

export interface IInstructor extends Document {
  name: string;
  bio: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

const InstructorSchema: Schema<IInstructor> = new Schema(
  {
    name: { type: String, required: true },
    bio: { type: String },
    email: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

const Instructor = mongoose.model<IInstructor>("Instructor", InstructorSchema);
export default Instructor;
