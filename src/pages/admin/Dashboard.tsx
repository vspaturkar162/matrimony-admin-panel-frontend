// import StatCard from "../../components/admin/StatCard";

// export default function Dashboard() {
//   return (
//     <div>
//       <h2 className="text-3xl font-bold text-gray-700 mb-8">
//         Dashboard
//       </h2>

//       <div className="grid grid-cols-3 gap-6">
//         <StatCard label="Pending Profiles" value={12} />
//         <StatCard label="Active Subscriptions" value={34} />
//         <StatCard label="Total Revenue" value="₹50,000" />
//       </div>
//     </div>
//   );
// }



// import StatCard from "../../components/admin/StatCard";
// import RecentProfiles from "../../components/admin/RecentProfiles";
// import ActivityFeed from "../../components/admin/ActivityFeed";
// import SubscriptionBreakdown from "../../components/admin/SubscriptionBreakdown";
// import QuickActions from "../../components/admin/QuickActions";

// const PeopleIcon = () => (
//   <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" />
//   </svg>
// );
// const HeartIcon = () => (
//   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//     <path d="M12 21.593c-.5-.377-8.593-6.45-8.593-11.43C3.407 6.103 7.27 4 10 4c1.466 0 2.891.538 3.954 1.5a.5.5 0 00.092.08A5.008 5.008 0 0117 4c2.73 0 5.593 2.103 5.593 6.163 0 4.98-8.093 11.053-8.593 11.43z" />
//   </svg>
// );
// const CreditCardIcon = () => (
//   <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//     <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
//     <line x1="1" y1="10" x2="23" y2="10" />
//   </svg>
// );
// const ChartIcon = () => (
//   <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//     <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
//   </svg>
// );

// export default function Dashboard() {
//   return (
//     <div className="space-y-6">
//       {/* Welcome banner */}
//       <div className="bg-gradient-to-r from-rose-600 to-pink-500 rounded-2xl p-6 text-white flex items-center justify-between shadow-md">
//         <div>
//           <p className="text-rose-100 text-sm font-medium">Good morning 👋</p>
//           <h2 className="text-2xl font-bold mt-1 font-display">Welcome back, Admin!</h2>
//           <p className="text-rose-100 text-sm mt-1">Here's what's happening on Vivah today.</p>
//         </div>
//         <div className="hidden md:block text-6xl opacity-20 select-none">♥</div>
//       </div>

//       {/* Stat cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
//         <StatCard
//           label="Pending Profiles"
//           value={12}
//           icon={<PeopleIcon />}
//           trend={{ value: 8, positive: false }}
//           accent="bg-gradient-to-br from-amber-400 to-orange-400"
//         />
//         <StatCard
//           label="Active Matches"
//           value={238}
//           icon={<HeartIcon />}
//           trend={{ value: 14, positive: true }}
//           accent="bg-gradient-to-br from-rose-500 to-pink-400"
//         />
//         <StatCard
//           label="Subscriptions"
//           value={295}
//           icon={<CreditCardIcon />}
//           trend={{ value: 5, positive: true }}
//           accent="bg-gradient-to-br from-blue-500 to-indigo-400"
//         />
//         <StatCard
//           label="Total Revenue"
//           value="₹1,24,500"
//           icon={<ChartIcon />}
//           trend={{ value: 18, positive: true }}
//           accent="bg-gradient-to-br from-emerald-500 to-teal-400"
//         />
//       </div>

//       {/* Middle row */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
//         <div className="lg:col-span-2">
//           <RecentProfiles />
//         </div>
//         <div className="space-y-4">
//           <QuickActions />
//         </div>
//       </div>

//       {/* Bottom row */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
//         <div className="lg:col-span-2">
//           <ActivityFeed />
//         </div>
//         <div>
//           <SubscriptionBreakdown />
//         </div>
//       </div>
//     </div>
//   );
// }




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