import { useEffect, useState } from "react";
import Header from "../../../components/admin/Header";

interface Subscription {
  id: string;
  user: string;
  plan: string;
}

export default function SuperExpiredSubscriptions() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);

  useEffect(() => {
    setSubscriptions([{ id: "1", user: "Amit", plan: "Basic" }]);
  }, []);

  return (
    <div className="flex-1 min-h-screen bg-gray-50">
      <Header title="Expired Subscriptions" />

      <main className="p-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-50 flex justify-between items-center">
            <h3 className="font-bold text-gray-800">Expired Members</h3>
            <span className="text-sm text-rose-600 bg-rose-50 px-3 py-1 rounded-lg font-medium">
              {subscriptions.length} Expired
            </span>
          </div>

          <div className="divide-y divide-gray-50">
            {subscriptions.map((sub) => (
              <div
                key={sub.id}
                className="px-6 py-4 flex items-center justify-between hover:bg-rose-50/30 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-rose-400 to-pink-300 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                    {sub.user[0]}
                  </div>
                  <p className="font-medium text-gray-800">{sub.user}</p>
                </div>

                <span className="text-xs px-3 py-1 rounded-lg bg-rose-50 text-rose-600 font-semibold">
                  {sub.plan}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}