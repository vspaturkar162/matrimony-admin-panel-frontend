import Header from "../../components/admin/Header";

const matches = [
  { id: "1", boy: "Rahul", girl: "Sneha", status: "Matched" },
  { id: "2", boy: "Amit", girl: "Priya", status: "Pending" },
];

export default function Matches() {
  return (
    <div className="flex-1 min-h-screen bg-gray-50">
      <Header title="Matches" />

      <main className="p-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-50">
            <h3 className="font-bold text-gray-800">Recent Matches</h3>
          </div>

          <div className="divide-y divide-gray-50">
            {matches.map((match) => (
              <div
                key={match.id}
                className="px-6 py-4 flex items-center justify-between hover:bg-rose-50/30 transition"
              >
                <div>
                  <p className="font-medium text-gray-800">
                    {match.boy} ❤️ {match.girl}
                  </p>
                  <p className="text-sm text-gray-500">Match ID: {match.id}</p>
                </div>

                <span
                  className={`text-xs px-3 py-1 rounded-lg font-semibold ${
                    match.status === "Matched"
                      ? "bg-emerald-50 text-emerald-600"
                      : "bg-amber-50 text-amber-600"
                  }`}
                >
                  {match.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}