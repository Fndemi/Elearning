import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db";
import courseRoutes from "./routes/course.routes";
import lessonRoutes from "./routes/lesson.routes";
import instructorRoutes from "./routes/instructor.routes";

// Load environment variables
dotenv.config();

const app: Application = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
const mongoURI = process.env.MONGO_URI as string;
connectDB(mongoURI);

// Routes
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "API is running...🚀🚀" });
});
app.use("/api/courses", courseRoutes);
app.use("/api/lessons", lessonRoutes);
app.use("/api/instructors", instructorRoutes);
// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}!`));
