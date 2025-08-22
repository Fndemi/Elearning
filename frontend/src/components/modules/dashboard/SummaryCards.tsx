interface Props {
  stats: {
    enrolled: number;
    completed: number;
    certificates: number;
  };
}

export default function SummaryCards({ stats }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="bg-white p-4 rounded-2xl shadow-md text-center">
        <p className="text-lg font-semibold">{stats.enrolled}</p>
        <p className="text-gray-600">Enrolled Courses</p>
      </div>
      <div className="bg-white p-4 rounded-2xl shadow-md text-center">
        <p className="text-lg font-semibold">{stats.completed}</p>
        <p className="text-gray-600">Completed Courses</p>
      </div>
      <div className="bg-white p-4 rounded-2xl shadow-md text-center">
        <p className="text-lg font-semibold">{stats.certificates}</p>
        <p className="text-gray-600">Certificates</p>
      </div>
    </div>
  );
}
