// src/pages/CourseDetailPage.tsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { sampleCourses } from "../components/modules/CourseCatalog";
import { FaClock, FaPlus, FaUser } from "react-icons/fa";

const CourseDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const course = sampleCourses.find((c) => c.id === Number(id));

  if (!course) {
    return (
      <div className="p-6 bg-[#FFF0C5] min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-xl font-bold">Course not found</h2>
        <Link to="/" className="text-blue-500 underline mt-2">
          Back to catalog
        </Link>
      </div>
    );
  }

  const lessons = [
    "Introduction & Overview",
    "Core Concepts",
    "Hands-on Project",
    "Final Assessment",
  ];

  return (
    <div className="p-6 bg-[#FFF0C5] min-h-screen flex flex-col items-center gap-6">
      <Link to="/" className="text-blue-500 underline self-start">
        ← Back to catalog
      </Link>

      {/* Course Info */}
      <div className="bg-white border rounded-lg p-6 w-full max-w-4xl flex flex-col gap-4">
        <h1 className="text-2xl font-bold">{course.title}</h1>
        <div className="flex items-center gap-4 text-gray-600">
          <span className="flex items-center gap-2">
            <FaClock /> {course.weeks} weeks
          </span>
        </div>
        <p className="text-gray-700">
          This course provides a complete overview of {course.title}. Learn
          step by step with practical examples.
        </p>
        <button
          className="px-4 py-2 rounded text-white font-medium w-32"
          style={{ backgroundColor: "#CC7800" }}
        >
          Enroll Now
        </button>
      </div>

      {/* Instructor Info */}
      <div className="bg-white border rounded-lg p-6 w-full max-w-4xl">
        <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
          <FaUser /> About the Instructor
        </h2>
        <p className="text-gray-700">
          {course.instructor} is an experienced professional with years of
          teaching and industry background. They will guide you through the
          course with practical examples and hands-on projects.
        </p>
      </div>

      {/* Lessons List */}
      <div className="bg-white border rounded-lg p-6 w-full max-w-4xl">
        <h2 className="text-xl font-bold mb-4">Lessons</h2>
        <ul className="flex flex-col gap-2">
          {lessons.map((lesson, index) => (
            <li
              key={index}
              className="flex justify-between items-center px-3 py-2 border rounded"
            >
              <span>{lesson}</span>
              <FaPlus className="text-gray-600" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseDetailPage;
