const plans = [
  { name: "Free", count: 420, color: "bg-gray-300", pct: 60 },
  { name: "Silver", count: 185, color: "bg-slate-400", pct: 26 },
  { name: "Gold", count: 89, color: "bg-amber-400", pct: 13 },
  { name: "Platinum", count: 21, color: "bg-rose-500", pct: 3 },
];

export default function SubscriptionBreakdown() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h3 className="font-bold text-gray-800 font-display mb-5">Subscription Plans</h3>
      <div className="space-y-4">
        {plans.map((p) => (
          <div key={p.name}>
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-sm font-medium text-gray-700">{p.name}</span>
              <span className="text-sm text-gray-500">{p.count} users</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className={`h-full ${p.color} rounded-full transition-all duration-700`}
                style={{ width: `${p.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 pt-4 border-t border-gray-50 flex justify-between text-sm">
        <span className="text-gray-500">Total Members</span>
        <span className="font-bold text-gray-800">715</span>
      </div>
    </div>
  );
}