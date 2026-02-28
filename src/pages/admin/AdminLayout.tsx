// import { useState } from "react";
// import Sidebar from "../../components/admin/Sidebar";
// import Header from "../../components/admin/Header";
// import Dashboard from "./Dashboard";

// const pageTitles: Record<string, string> = {
//   dashboard: "Dashboard",
//   profiles: "Profiles",
//   matches: "Matches",
//   subscriptions: "Subscriptions",
//   messages: "Messages",
//   reports: "Reports",
//   analytics: "Analytics",
//   notifications: "Notifications",
//   settings: "Settings",
// };

// export default function AdminLayout() {
//   const [activePage, setActivePage] = useState("dashboard");

//   const renderPage = () => {
//     if (activePage === "dashboard") return <Dashboard />;
//     return (
//       <div className="flex items-center justify-center h-64 bg-white rounded-2xl border border-gray-100 shadow-sm">
//         <div className="text-center">
//           <p className="text-4xl mb-3">🚧</p>
//           <p className="text-gray-500 font-medium">{pageTitles[activePage]} page coming soon</p>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-50 font-sans">
//       <Sidebar />
//       <div className="flex-1 flex flex-col min-w-0">
//         <Header title={pageTitles[activePage]} />
//         <main className="flex-1 p-6 overflow-auto">
//           {renderPage()}
//         </main>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import Header from "../../components/admin/Header";
import Dashboard from "./Dashboard";

const pageTitles: Record<string, string> = {
  dashboard: "Dashboard",
  profiles: "Profiles",
  matches: "Matches",
  subscriptions: "Subscriptions",
  messages: "Messages",
  reports: "Reports",
  analytics: "Analytics",
  notifications: "Notifications",
  settings: "Settings",
};

export default function AdminLayout() {
  const [activePage] = useState("dashboard");

  const renderPage = () => {
    if (activePage === "dashboard") return <Dashboard />;
    return (
      <div className="flex items-center justify-center h-64  bg-white rounded-2xl border border-red-500 shadow-sm">
        <div className="text-center">
          <p className="text-4xl mb-3">🚧</p>
          <p className="text-gray-500 font-medium">
            {pageTitles[activePage]} page coming soon
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Header title={pageTitles[activePage]} />
        <main className="flex-1 p-6 overflow-auto">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}