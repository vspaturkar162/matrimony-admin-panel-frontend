const activities = [
  { icon: "💑", text: "New match created between Priya S. & Rohit K.", time: "2 min ago", type: "match" },
  { icon: "✅", text: "Profile of Ananya Iyer approved", time: "15 min ago", type: "approval" },
  { icon: "💳", text: "Subscription upgraded — Arjun Mehta → Gold", time: "1 hr ago", type: "payment" },
  { icon: "🚨", text: "Report filed against profile #1042", time: "2 hr ago", type: "report" },
  { icon: "👤", text: "New registration — Fatima Shaikh", time: "3 hr ago", type: "register" },
  { icon: "💳", text: "Payment received ₹4,999 from Suresh Patel", time: "5 hr ago", type: "payment" },
];

const typeColors: Record<string, string> = {
  match: "bg-pink-50 text-pink-500",
  approval: "bg-emerald-50 text-emerald-500",
  payment: "bg-blue-50 text-blue-500",
  report: "bg-red-50 text-red-500",
  register: "bg-purple-50 text-purple-500",
};

export default function ActivityFeed() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
      <div className="px-6 py-4 border-b border-gray-50">
        <h3 className="font-bold text-gray-800 font-display">Recent Activity</h3>
      </div>
      <div className="divide-y divide-gray-50">
        {activities.map((a, i) => (
          <div key={i} className="px-6 py-3.5 flex items-start gap-3 hover:bg-gray-50/50 transition-colors">
            <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-base shrink-0 mt-0.5 ${typeColors[a.type]}`}>
              {a.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-700 leading-snug">{a.text}</p>
              <p className="text-xs text-gray-400 mt-0.5">{a.time}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="px-6 py-3 border-t border-gray-50">
        <button className="text-sm text-rose-500 hover:text-rose-600 font-medium transition-colors">View all activity →</button>
      </div>
    </div>
  );
}