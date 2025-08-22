import React from "react";
import type { Course } from "../../shared/types";
import { UserIcon, UsersIcon, ClockIcon } from "@heroicons/react/24/solid";

interface Props {
  course: Course;
  onEnroll: (id: string) => void;
}

const CourseCard: React.FC<Props> = ({ course, onEnroll }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col justify-between">
      <img src={course.image} alt={course.title} className="h-48 w-full object-cover" />
      
      <div className="p-4 flex flex-col flex-1 justify-between">
        <h2 className="font-bold text-lg mb-2">{course.title}</h2>

        {/* Instructor */}
        <div className="flex items-center text-gray-600 mb-2">
          <UserIcon className="h-5 w-5 mr-1" />
          <span>{course.instructor.name}</span>
        </div>

        {/* Bottom row */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center space-x-4 text-gray-600">
            <div className="flex items-center">
              <ClockIcon className="h-5 w-5 mr-1" />
              <span>{course.durationWeeks} weeks</span>
            </div>
            <div className="flex items-center">
              <UsersIcon className="h-5 w-5 mr-1" />
              <span>{course.enrolledCount} enrolled</span>
            </div>
          </div>

          <button
            onClick={() => onEnroll(course.id)}
            className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
