import { Request, Response, NextFunction } from "express";
import { z, ZodSchema, ZodError } from "zod";

export const validateBody = (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
  try {
    schema.parse(req.body);
    next();
  } catch (err) {
    if (err instanceof ZodError) {
      res.status(400).json({ message: "Validation failed", error: err });
    } else {
      res.status(500).json({ message: "Server error", error: err });
    }
  }
};
