import Header from "../../components/admin/Header";

export default function Analytics() {
  return (
    <div className="flex-1 min-h-screen bg-gray-50">
      <Header title="Analytics" />

      <main className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h4 className="text-sm text-gray-500 mb-2">Total Users</h4>
          <p className="text-3xl font-bold text-gray-800">1,248</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h4 className="text-sm text-gray-500 mb-2">Active Matches</h4>
          <p className="text-3xl font-bold text-gray-800">312</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h4 className="text-sm text-gray-500 mb-2">Monthly Revenue</h4>
          <p className="text-3xl font-bold text-gray-800">₹3.6L</p>
        </div>

        {/* Chart Placeholder */}
        <div className="md:col-span-3 bg-white rounded-2xl shadow-sm border border-gray-100 p-10 text-center">
          <div className="text-4xl mb-4">📊</div>
          <h3 className="font-bold text-gray-800 mb-2">
            Analytics Charts
          </h3>
          <p className="text-gray-500">
            Charts will be displayed here once backend and chart library are integrated.
          </p>
        </div>
      </main>
    </div>
  );
}