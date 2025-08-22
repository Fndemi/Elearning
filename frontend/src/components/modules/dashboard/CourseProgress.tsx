import type { Course } from "../../../types/dashboard";

interface Props {
  courses: Course[];
}

export default function CourseProgress({ courses }: Props) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Enrolled Courses</h2>
      <div className="space-y-4">
        {courses.map((course) => (
          <div key={course.id}>
            <p className="font-medium">{course.title}</p>
            <div className="w-full bg-gray-200 rounded-full h-3 mt-1">
              <div
                className="bg-blue-500 h-3 rounded-full"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
            <span className="text-sm text-gray-600">
              {course.progress}% complete
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
