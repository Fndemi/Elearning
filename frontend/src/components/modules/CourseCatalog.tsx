import React, { useState, useMemo } from "react";
import CourseGridLayout from "../layouts/CourseGridLayout";
import Pagination from "./Pagination";
import SearchFilter from "./SearchFilter";
import type { Course } from "../../shared/types";
import sample from '../../assets/sample.png';

// Sample courses
// Add export here
export const sampleCourses: Course[] = [
  {
    id: 1,
    title: "Web Development",
    image: sample,
    instructor: "Alice Johnson",
    weeks: 6,
    enrolled: 120,
  },
  {
    id: 2,
    title: "UI/UX Design",
    image: sample,
    instructor: "Bob Smith",
    weeks: 4,
    enrolled: 80,
  },
  // ...rest of courses
];

const COURSES_PER_PAGE = 6;

const CourseCatalog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Filtering by course title OR instructor
  const filteredCourses = useMemo(() => {
    return sampleCourses.filter((course) => {
      const term = searchTerm.toLowerCase();
      return (
        course.title.toLowerCase().includes(term) ||
        course.instructor.toLowerCase().includes(term)
      );
    });
  }, [searchTerm]);

  const totalPages = Math.ceil(filteredCourses.length / COURSES_PER_PAGE);
  const paginatedCourses = filteredCourses.slice(
    (currentPage - 1) * COURSES_PER_PAGE,
    currentPage * COURSES_PER_PAGE
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">Course Catalog</h1>
      <p className="text-gray-600 mb-4">
        Discover courses to advance your skills and career
      </p>

      {/* Search bar */}
      <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Course grid */}
      <CourseGridLayout courses={paginatedCourses} />

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};

export default CourseCatalog;
