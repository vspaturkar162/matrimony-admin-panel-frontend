import { useEffect, useState } from "react";
import Header from "../../../components/admin/Header";

interface Payment {
  id: string;
  user: string;
  amount: number;
  status: "SUCCESS" | "FAILED";
}

export default function SuperPaymentReport() {
  const [payments, setPayments] = useState<Payment[]>([]);

  useEffect(() => {
    setPayments([
      { id: "1", user: "User A", amount: 2000, status: "SUCCESS" },
      { id: "2", user: "User B", amount: 1500, status: "FAILED" },
    ]);
  }, []);

  return (
    <div className="flex-1 min-h-screen bg-gray-50">
      <Header title="Payment Report" />

      <main className="p-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-50">
            <h3 className="font-bold text-gray-800">Transactions</h3>
          </div>

          <div className="divide-y divide-gray-50">
            {payments.map((payment) => (
              <div
                key={payment.id}
                className="px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3 hover:bg-gray-50 transition-colors"
              >
                <div>
                  <p className="font-medium text-gray-800">
                    {payment.user}
                  </p>
                  <p className="text-sm text-gray-500">
                    ₹{payment.amount}
                  </p>
                </div>

                <span
                  className={`text-xs px-3 py-1 rounded-lg font-semibold ${
                    payment.status === "SUCCESS"
                      ? "bg-emerald-50 text-emerald-600"
                      : "bg-rose-50 text-rose-600"
                  }`}
                >
                  {payment.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}