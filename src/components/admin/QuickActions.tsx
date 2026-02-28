const actions = [
  { icon: "✅", label: "Approve Profiles", desc: "12 pending", color: "hover:border-emerald-300 hover:bg-emerald-50 group-hover:text-emerald-500" },
  { icon: "📧", label: "Send Newsletter", desc: "Blast email", color: "hover:border-blue-300 hover:bg-blue-50 group-hover:text-blue-500" },
  { icon: "🚨", label: "View Reports", desc: "3 unread", color: "hover:border-rose-300 hover:bg-rose-50 group-hover:text-rose-500" },
  { icon: "📊", label: "Export Data", desc: "CSV / PDF", color: "hover:border-purple-300 hover:bg-purple-50 group-hover:text-purple-500" },
];

export default function QuickActions() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h3 className="font-bold text-gray-800 font-display mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((a) => (
          <button
            key={a.label}
            className={`group p-4 rounded-xl border-2 border-gray-100 text-left transition-all duration-200 ${a.color}`}
          >
            <span className="text-2xl block mb-2">{a.icon}</span>
            <p className="text-sm font-semibold text-gray-800">{a.label}</p>
            <p className="text-xs text-gray-400 mt-0.5">{a.desc}</p>
          </button>
        ))}
      </div>
    </div>
  );
}