import { Request, Response } from "express";
import Course, { ICourse } from "../models/course.model";
import Lesson from "../models/lesson.model";

// GET /api/courses?page=1&limit=10
export const getCourses = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;

    const courses = await Course.find()
      .populate("instructor")
      .skip(skip)
      .limit(limit);

    const total = await Course.countDocuments();

    res.json({ courses, total, page, pages: Math.ceil(total / limit) });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

// GET /api/courses/:id
export const getCourseById = async (req: Request, res: Response) => {
  try {
    const course = await Course.findById(req.params.id).populate({
      path: "lessons",
    }).populate("instructor");

    if (!course) return res.status(404).json({ message: "Course not found" });

    res.json(course);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

// POST /api/courses (Instructor only)
export const createCourse = async (req: Request, res: Response) => {
  try {
    const { title, description, price, instructor } = req.body;
    const course = new Course({ title, description, price, instructor });
    await course.save();
    res.status(201).json(course);
  } catch (err) {
    res.status(400).json({ message: "Invalid data", error: err });
  }
};

// PUT /api/courses/:id
export const updateCourse = async (req: Request, res: Response) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ message: "Course not found" });

    // Ownership check can be added here
    Object.assign(course, req.body);
    await course.save();
    res.json(course);
  } catch (err) {
    res.status(400).json({ message: "Invalid data", error: err });
  }
};

// DELETE /api/courses/:id
export const deleteCourse = async (req: Request, res: Response) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ message: "Course not found" });

    await course.deleteOne();
    res.json({ message: "Course deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};
