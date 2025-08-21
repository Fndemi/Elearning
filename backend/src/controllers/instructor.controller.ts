import { Request, Response } from "express";
import Instructor, { IInstructor } from "../models/instructor.model";

// GET /api/instructors
export const getInstructors = async (req: Request, res: Response) => {
  try {
    const instructors = await Instructor.find();
    res.json(instructors);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

// GET /api/instructors/:id
export const getInstructorById = async (req: Request, res: Response) => {
  try {
    const instructor = await Instructor.findById(req.params.id);
    if (!instructor) return res.status(404).json({ message: "Instructor not found" });
    res.json(instructor);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

// POST /api/instructors
export const createInstructor = async (req: Request, res: Response) => {
  try {
    const { name, bio, email } = req.body;
    const instructor = new Instructor({ name, bio, email });
    await instructor.save();
    res.status(201).json(instructor);
  } catch (err) {
    res.status(400).json({ message: "Invalid data", error: err });
  }
};

// PUT /api/instructors/:id
export const updateInstructor = async (req: Request, res: Response) => {
  try {
    const instructor = await Instructor.findById(req.params.id);
    if (!instructor) return res.status(404).json({ message: "Instructor not found" });

    Object.assign(instructor, req.body);
    await instructor.save();
    res.json(instructor);
  } catch (err) {
    res.status(400).json({ message: "Invalid data", error: err });
  }
};

// DELETE /api/instructors/:id
export const deleteInstructor = async (req: Request, res: Response) => {
  try {
    const instructor = await Instructor.findById(req.params.id);
    if (!instructor) return res.status(404).json({ message: "Instructor not found" });

    await instructor.deleteOne();
    res.json({ message: "Instructor deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};
