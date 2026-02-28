import SuperAdminLayout from "./SuperAdminLayout";

interface Activity {
  id: number;
  admin: string;
  action: "APPROVED" | "REJECTED";
  profile: string;
  time: string;
}

export default function ActivityLogs() {
  const logs: Activity[] = [
    {
      id: 1,
      admin: "Admin A",
      action: "APPROVED",
      profile: "Priya Sharma",
      time: "Today, 10:45 AM",
    },
    {
      id: 2,
      admin: "Admin B",
      action: "REJECTED",
      profile: "Rahul Verma",
      time: "Today, 9:20 AM",
    },
    {
      id: 3,
      admin: "Admin C",
      action: "APPROVED",
      profile: "Ananya Iyer",
      time: "Yesterday",
    },
  ];

  return (
    <SuperAdminLayout>
      <div className="flex-1 min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-100 px-8 py-6 shadow-sm">
          <h1 className="text-2xl font-bold text-gray-800">
            Admin Activity Logs
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Monitor profile approval and rejection actions
          </p>
        </div>

        {/* Content */}
        <main className="p-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">
                    Admin
                  </th>
                  <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">
                    Action
                  </th>
                  <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">
                    Profile
                  </th>
                  <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">
                    Time
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-50">
                {logs.map((log) => (
                  <tr key={log.id} className="hover:bg-purple-50/40 transition">
                    <td className="px-6 py-4 font-medium text-gray-800">
                      {log.admin}
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${
                          log.action === "APPROVED"
                            ? "bg-emerald-50 text-emerald-600 border border-emerald-200"
                            : "bg-rose-50 text-rose-600 border border-rose-200"
                        }`}
                      >
                        {log.action}
                      </span>
                    </td>

                    <td className="px-6 py-4 text-gray-600">
                      {log.profile}
                    </td>

                    <td className="px-6 py-4 text-gray-500">
                      {log.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </SuperAdminLayout>
  );
}