

import Header from "../../components/admin/Header";
// import StatCard from "../../components/admin/StatCard";
import RecentProfiles from "../../components/admin/RecentProfiles";
import SubscriptionBreakdown from "../../components/admin/SubscriptionBreakdown";
import QuickActions from "../../components/admin/QuickActions";

export default function Dashboard() {
  return (
    <div className="flex-1 min-h-screen bg-gray-50">
      {/* Top Header */}
      <Header title="Dashboard" />

      {/* Page Content */}
      <main className="p-6 space-y-6">
        {/* Stats Row */}
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <StatCard
            title="Total Profiles"
            value="1,248"
            sub="↑ 12% this month"
            accent="rose"
          />
          <StatCard
            title="Active Members"
            value="715"
            sub="Currently active"
            accent="emerald"
          />
          <StatCard
            title="Pending Approvals"
            value="12"
            sub="Needs review"
            accent="amber"
          />
          <StatCard
            title="Revenue"
            value="₹3.6L"
            sub="This month"
            accent="violet"
          />
        </section>

        {/* Main Grid */}
        <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Left: Recent Profiles */}
          <div className="xl:col-span-2">
            <RecentProfiles />
          </div>

          {/* Right: Side Widgets */}
          <div className="space-y-6">
            <SubscriptionBreakdown />
            <QuickActions />
          </div>
        </section>
      </main>
    </div>
  );
}

/* -----------------------------
   Stat Card Component (Local)
-------------------------------- */

interface StatCardProps {
  title: string;
  value: string;
  sub: string;
  accent: "rose" | "emerald" | "amber" | "violet";
}

function StatCard({ title, value, sub, accent }: StatCardProps) {
  const accentMap: Record<string, string> = {
    rose: "text-rose-600 bg-rose-50",
    emerald: "text-emerald-600 bg-emerald-50",
    amber: "text-amber-600 bg-amber-50",
    violet: "text-violet-600 bg-violet-50",
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