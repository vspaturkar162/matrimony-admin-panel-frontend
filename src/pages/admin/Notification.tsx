import Header from "../../components/admin/Header";

const notifications = [
  { id: "1", message: "New profile pending approval", time: "2 mins ago" },
  { id: "2", message: "Subscription expired for Amit", time: "1 hour ago" },
  { id: "3", message: "Payment failed for User B", time: "Yesterday" },
];

export default function Notifications() {
  return (
    <div className="flex-1 min-h-screen bg-gray-50">
      <Header title="Notifications" />

      <main className="p-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-50">
            <h3 className="font-bold text-gray-800">Recent Notifications</h3>
          </div>

          <div className="divide-y divide-gray-50">
            {notifications.map((n) => (
              <div
                key={n.id}
                className="px-6 py-4 flex items-start justify-between hover:bg-gray-50 transition"
              >
                <div>
                  <p className="font-medium text-gray-800">{n.message}</p>
                  <p className="text-sm text-gray-500">{n.time}</p>
                </div>

                <span className="w-2 h-2 mt-2 bg-rose-500 rounded-full"></span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}