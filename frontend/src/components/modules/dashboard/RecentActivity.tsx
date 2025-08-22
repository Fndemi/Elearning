import type { Activity } from "../../../types/dashboard";

interface Props {
  activities: Activity[];
}

export default function RecentActivity({ activities }: Props) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
      <ul className="space-y-3">
        {activities.map((activity) => (
          <li key={activity.id} className="flex items-start gap-3">
            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
            <div>
              <p className="text-gray-800">{activity.description}</p>
              <span className="text-sm text-gray-500">{activity.date}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
