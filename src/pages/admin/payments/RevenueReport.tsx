// import { useEffect, useState } from "react";

// export default function RevenueReport() {
//   const [totalRevenue, setTotalRevenue] = useState<number>(0);

//   useEffect(() => {
//     // Replace with backend API
//     setTotalRevenue(50000);
//   }, []);

//   return (
//     <div>
//       <h2>Total Revenue</h2>
//       <h3>₹{totalRevenue}</h3>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import Header from "../../../components/admin/Header";

export default function RevenueReport() {
  const [totalRevenue, setTotalRevenue] = useState<number>(0);

  useEffect(() => {
    setTotalRevenue(50000);
  }, []);

  return (
    <div className="flex-1 min-h-screen bg-gray-50">
      <Header title="Revenue Report" />

      <main className="p-6 flex justify-center">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
          <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-emerald-400 to-green-400 flex items-center justify-center text-white text-xl shadow mb-4">
            ₹
          </div>

          <h3 className="text-gray-500 text-sm mb-2">
            Total Revenue
          </h3>

          <p className="text-3xl font-bold text-gray-800 tracking-tight">
            ₹{totalRevenue.toLocaleString()}
          </p>

          <span className="inline-block mt-4 text-xs px-3 py-1 rounded-lg bg-emerald-50 text-emerald-600 font-semibold">
            This Month
          </span>
        </div>
      </main>
    </div>
  );
}