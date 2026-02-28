// export default function SubscriptionGraph() {
//   return (
//     <div>
//       <h2>Subscription Growth</h2>
//       <p>Graph will be displayed here (API / Chart integration pending)</p>
//     </div>
//   );
// }
import Header from "../../../components/admin/Header";

export default function SuperSubscriptionGraph() {
  return (
    <div className="flex-1 min-h-screen bg-gray-50">
      <Header title="Subscription Analytics" />

      <main className="p-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-400 to-purple-400 flex items-center justify-center text-white text-2xl shadow mb-4">
            📊
          </div>

          <h3 className="font-bold text-gray-800 text-lg mb-2">
            Subscription Growth
          </h3>

          <p className="text-gray-500 max-w-md">
            Subscription analytics and growth charts will be displayed here
            once backend APIs and chart integrations are connected.
          </p>

          <span className="mt-4 text-xs px-3 py-1 rounded-lg bg-violet-50 text-violet-600 font-semibold">
            Coming Soon
          </span>
        </div>
      </main>
    </div>
  );
}