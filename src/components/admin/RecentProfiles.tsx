const profiles = [
  { id: 1, name: "Priya Sharma", age: 26, location: "Mumbai", status: "pending", joined: "Today, 10:30 AM", religion: "Hindu" },
  { id: 2, name: "Arjun Mehta", age: 29, location: "Delhi", status: "active", joined: "Today, 9:15 AM", religion: "Hindu" },
  { id: 3, name: "Fatima Shaikh", age: 24, location: "Hyderabad", status: "pending", joined: "Yesterday", religion: "Muslim" },
  { id: 4, name: "Ravi Kumar", age: 31, location: "Bangalore", status: "suspended", joined: "Yesterday", religion: "Hindu" },
  { id: 5, name: "Ananya Iyer", age: 27, location: "Chennai", status: "active", joined: "2 days ago", religion: "Hindu" },
];

const statusStyles: Record<string, string> = {
  pending: "bg-amber-50 text-amber-700 border border-amber-200",
  active: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  suspended: "bg-rose-50 text-rose-600 border border-rose-200",
};

export default function RecentProfiles() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="px-6 py-4 flex items-center justify-between border-b border-gray-50">
        <h3 className="font-bold text-gray-800 font-display">Recent Profiles</h3>
        <button className="text-sm text-rose-500 hover:text-rose-600 font-medium transition-colors">View all →</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 text-left">
              <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Age</th>
              <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Location</th>
              <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Religion</th>
              <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Joined</th>
              <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {profiles.map((p) => (
              <tr key={p.id} className="hover:bg-rose-50/30 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-400 to-pink-300 flex items-center justify-center text-white font-bold text-xs shadow-sm">
                      {p.name[0]}
                    </div>
                    <span className="font-medium text-gray-800">{p.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-600">{p.age}</td>
                <td className="px-6 py-4 text-gray-600">{p.location}</td>
                <td className="px-6 py-4 text-gray-600">{p.religion}</td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-1 rounded-lg text-xs font-semibold capitalize ${statusStyles[p.status]}`}>
                    {p.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-500">{p.joined}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1 text-xs bg-rose-50 text-rose-600 rounded-lg hover:bg-rose-100 transition-colors font-medium">
                      Review
                    </button>
                    <button className="px-3 py-1 text-xs bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                      View
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}