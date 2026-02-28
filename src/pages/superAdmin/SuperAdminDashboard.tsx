
// import SuperAdminLayout from "./SuperAdminLayout";

// export default function SuperAdminDashboard() {
//   return (
//     <SuperAdminLayout>
//       <div className="p-8">
//         <h1 className="text-2xl font-bold text-gray-800">
//           Super Admin Dashboard
//         </h1>

//         <div className="mt-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
//           <p className="text-gray-600">
//             You have full control over admin accounts.
//           </p>
//         </div>
//       </div>
//     </SuperAdminLayout>
//   );
// }

import SuperAdminLayout from "./SuperAdminLayout";

/* -----------------------------
   Super Admin Dashboard
-------------------------------- */

export default function SuperAdminDashboard() {
  return (
    <SuperAdminLayout>
      <div className="flex-1 min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-100 px-8 py-6 shadow-sm">
          <h1 className="text-2xl font-bold text-gray-800">
            Super Admin Dashboard
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Global platform overview & system governance
          </p>
        </div>

        {/* Content */}
        <main className="p-8 space-y-8">

          {/* Stats Row */}
          <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <StatCard
              title="Total Platform Users"
              value="12,480"
              sub="Across all regions"
              accent="purple"
            />
            <StatCard
              title="Active Subscriptions"
              value="4,215"
              sub="Currently paying users"
              accent="indigo"
            />
            <StatCard
              title="Total Revenue"
              value="₹18.4L"
              sub="This month"
              accent="emerald"
            />
            <StatCard
              title="Admin Accounts"
              value="8"
              sub="System operators"
              accent="rose"
            />
          </section>

          {/* Main Grid */}
          <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">

            {/* Left Panel */}
            <div className="xl:col-span-2 space-y-6">

              <SystemHealth />

              <RecentAdminActivity />

            </div>

            {/* Right Panel */}
            <div className="space-y-6">

              <QuickSuperActions />

              <PlatformInsights />

            </div>

          </section>

        </main>
      </div>
    </SuperAdminLayout>
  );
}

/* -----------------------------
   Stat Card
-------------------------------- */

interface StatCardProps {
  title: string;
  value: string;
  sub: string;
  accent: "purple" | "indigo" | "emerald" | "rose";
}

function StatCard({ title, value, sub, accent }: StatCardProps) {
  const accentMap: Record<string, string> = {
    purple: "text-purple-600 bg-purple-50",
    indigo: "text-indigo-600 bg-indigo-50",
    emerald: "text-emerald-600 bg-emerald-50",
    rose: "text-rose-600 bg-rose-50",
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <span
          className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${accentMap[accent]}`}
        >
          {accent.toUpperCase()}
        </span>
      </div>

      <div className="mt-4">
        <p className="text-3xl font-bold text-gray-800 tracking-tight">
          {value}
        </p>
        <p className="text-sm text-gray-400 mt-1">{sub}</p>
      </div>
    </div>
  );
}

/* -----------------------------
   System Health Panel
-------------------------------- */

function SystemHealth() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h3 className="font-bold text-gray-800 mb-4">System Health</h3>

      <div className="space-y-4 text-sm">
        <StatusRow label="Server Status" status="Operational" color="emerald" />
        <StatusRow label="Payment Gateway" status="Connected" color="emerald" />
        <StatusRow label="Email Service" status="Running" color="emerald" />
        <StatusRow label="SMS Gateway" status="Delayed" color="amber" />
      </div>
    </div>
  );
}

function StatusRow({
  label,
  status,
  color,
}: {
  label: string;
  status: string;
  color: "emerald" | "amber";
}) {
  const colorMap: Record<string, string> = {
    emerald: "text-emerald-600 bg-emerald-50",
    amber: "text-amber-600 bg-amber-50",
  };

  return (
    <div className="flex justify-between items-center">
      <span className="text-gray-600">{label}</span>
      <span
        className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${colorMap[color]}`}
      >
        {status}
      </span>
    </div>
  );
}

/* -----------------------------
   Recent Admin Activity
-------------------------------- */

function RecentAdminActivity() {
  const activities = [
    "Admin A approved 12 profiles",
    "Admin B reset 1 password",
    "Admin C rejected 3 profiles",
    "Admin D updated subscription pricing",
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h3 className="font-bold text-gray-800 mb-4">
        Recent Admin Activity
      </h3>

      <ul className="space-y-3 text-sm text-gray-600">
        {activities.map((act, index) => (
          <li
            key={index}
            className="flex items-start gap-2 border-b pb-2 last:border-none"
          >
            <span className="text-purple-500">•</span>
            {act}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* -----------------------------
   Quick Super Admin Actions
-------------------------------- */

function QuickSuperActions() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h3 className="font-bold text-gray-800 mb-4">
        Quick Super Actions
      </h3>

      <div className="grid grid-cols-2 gap-3">
        <ActionBtn label="Create Admin" color="purple" />
        <ActionBtn label="Global Announcement" color="indigo" />
        <ActionBtn label="Force Reset All" color="rose" />
        <ActionBtn label="Maintenance Mode" color="amber" />
      </div>
    </div>
  );
}

function ActionBtn({
  label,
  color,
}: {
  label: string;
  color: "purple" | "indigo" | "rose" | "amber";
}) {
  const map: Record<string, string> = {
    purple: "hover:bg-purple-50 hover:border-purple-300",
    indigo: "hover:bg-indigo-50 hover:border-indigo-300",
    rose: "hover:bg-rose-50 hover:border-rose-300",
    amber: "hover:bg-amber-50 hover:border-amber-300",
  };

  return (
    <button
      className={`p-3 rounded-xl border border-gray-100 text-sm font-medium transition ${map[color]}`}
    >
      {label}
    </button>
  );
}

/* -----------------------------
   Platform Insights
-------------------------------- */

function PlatformInsights() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h3 className="font-bold text-gray-800 mb-4">
        Platform Insights
      </h3>

      <div className="space-y-3 text-sm text-gray-600">
        <Insight label="New Signups Today" value="86" />
        <Insight label="Profile Approval Rate" value="92%" />
        <Insight label="Conversion Rate" value="34%" />
        <Insight label="Report Resolution Time" value="4 hrs avg" />
      </div>
    </div>
  );
}

function Insight({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between">
      <span>{label}</span>
      <span className="font-semibold text-gray-800">{value}</span>
    </div>
  );
}