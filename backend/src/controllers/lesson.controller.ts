import { Request, Response } from "express";
import { Types } from "mongoose";
import Lesson, { ILesson } from "../models/lesson.model";
import Course, { ICourse } from "../models/course.model";

// GET /api/lessons
export const getLessons = async (req: Request, res: Response) => {
  try {
    const lessons = await Lesson.find().populate("course");
    res.json(lessons);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

// GET /api/lessons/:id
export const getLessonById = async (req: Request, res: Response) => {
  try {
    const lesson = await Lesson.findById(req.params.id).populate("course");
    if (!lesson) return res.status(404).json({ message: "Lesson not found" });
    res.json(lesson);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

// POST /api/lessons
export const createLesson = async (req: Request, res: Response) => {
  try {
    const { title, content, duration, course: courseId } = req.body;

    // Ensure the course exists
    const course: ICourse | null = await Course.findById(courseId);
    if (!course) return res.status(404).json({ message: "Course not found" });

    const lesson = new Lesson({ title, content, duration, course: courseId });
    await lesson.save();

    // Ensure lessons array exists
    if (!course.lessons) course.lessons = [];
    // Safely push the lesson ID
    course.lessons = [...course.lessons, lesson._id as Types.ObjectId];
    await course.save();

    res.status(201).json(lesson);
  } catch (err) {
    res.status(400).json({ message: "Invalid data", error: err });
  }
};

// PUT /api/lessons/:id
export const updateLesson = async (req: Request, res: Response) => {
  try {
    const lesson: ILesson | null = await Lesson.findById(req.params.id);
    if (!lesson) return res.status(404).json({ message: "Lesson not found" });

    Object.assign(lesson, req.body);
    await lesson.save();
    res.json(lesson);
  } catch (err) {
    res.status(400).json({ message: "Invalid data", error: err });
  }
};

// DELETE /api/lessons/:id
export const deleteLesson = async (req: Request, res: Response) => {
  try {
    const lesson: ILesson | null = await Lesson.findById(req.params.id);
    if (!lesson) return res.status(404).json({ message: "Lesson not found" });

    await lesson.deleteOne();

    // Remove lesson from course
    await Course.findByIdAndUpdate(lesson.course, {
      $pull: { lessons: lesson._id },
    });

    res.json({ message: "Lesson deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};
