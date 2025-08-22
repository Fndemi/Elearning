import React from "react";
import type { Course } from "../../shared/types";
import { FaUser, FaClock, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

interface CourseGridLayoutProps {
  courses: Course[];
}

const CourseGridLayout: React.FC<CourseGridLayoutProps> = ({ courses }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <Link key={course.id} to={`/course/${course.id}`}>
          <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 flex flex-col gap-2" style={{ backgroundColor: "#FFF0C5" }}>
              <h2 className="font-bold text-lg">{course.title}</h2>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <FaUser /> {course.instructor}
              </div>
              <div className="flex items-center justify-between text-sm text-gray-600 mt-2">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <FaClock /> {course.weeks} weeks
                  </span>
                  <span className="flex items-center gap-1">
                    <FaUsers /> {course.enrolled} students
                  </span>
                </div>
                <button
                  className="text-white px-3 py-1 rounded"
                  style={{ backgroundColor: "#CC7800" }}
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CourseGridLayout;
