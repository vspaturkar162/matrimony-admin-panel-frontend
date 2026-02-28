// import { NavLink } from "react-router-dom";

// export default function SuperAdminSidebar() {
//   const link =
//     "block px-4 py-2 rounded-xl text-sm font-medium transition";

//   return (
//     <aside className="w-64 bg-gradient-to-b from-purple-700 via-purple-600 to-indigo-600 text-white p-6 shadow-2xl">
//       <h2 className="text-xl font-bold mb-8">Super Admin</h2>

//       <nav className="space-y-3">
//         <NavLink
//           to="/super-admin/super-dashboard"
//           className={({ isActive }) =>
//             `${link} ${
//               isActive ? "bg-white text-purple-700" : "hover:bg-white/10"
//             }`
//           }
//         >
//           Dashboard
//         </NavLink>

//         <NavLink
//           to="/super-admin/admin-list"
//           className={({ isActive }) =>
//             `${link} ${
//               isActive ? "bg-white text-purple-700" : "hover:bg-white/10"
//             }`
//           }
//         >
//           Admin Management
//         </NavLink>

//         <NavLink
//           to="/super-admin/change-password"
//           className={({ isActive }) =>
//             `${link} ${
//               isActive ? "bg-white text-purple-700" : "hover:bg-white/10"
//             }`
//           }
//         >
//           Change Password
//         </NavLink>



        
//       </nav>
//     </aside>
//   );
// }

import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

export default function SuperAdminSidebar() {
  const location = useLocation();

  const [openProfiles, setOpenProfiles] = useState(
    location.pathname.includes("/super-admin/profiles")
  );

  const [openSubscriptions, setOpenSubscriptions] = useState(
    location.pathname.includes("/super-admin/subscriptions")
  );

  const [openReports, setOpenReports] = useState(
    location.pathname.includes("/super-admin/payments")
  );

  const linkBase =
    "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200";

  const activeStyle = "bg-white text-purple-700 shadow-md";
  const inactiveStyle =
    "text-white hover:bg-white/10 hover:text-white";

  return (
    <aside className="w-64 min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-rose-900 flex flex-col shadow-2xl text-white">

      {/* Logo */}
      <div className="px-6 py-7 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center shadow-md">
            <span className="text-purple-700 text-lg">👑</span>
          </div>
          <div>
            <p className="font-bold text-lg">Happy Hearts</p>
            <p className="text-xs text-purple-200">Super Admin Portal</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1">

        {/* Dashboard */}
        <NavLink
          to="/super-admin/super-dashboard"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          ⊞ <span>Dashboard</span>
        </NavLink>

        {/* Admin Management */}
        <NavLink
          to="/super-admin/admin-list"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          👥 <span>Admin Management</span>
        </NavLink>

        {/* Profiles Parent */}
        <button
          onClick={() => setOpenProfiles(!openProfiles)}
          className={`${linkBase} ${inactiveStyle}`}
        >
          👤 <span className="flex-1 text-left">Profiles</span>
          <span className="text-xs">{openProfiles ? "▲" : "▼"}</span>
        </button>

        {openProfiles && (
          <div className="ml-6 space-y-1">
            <NavLink
              to="/super-admin/profiles/pending"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-lg text-sm transition ${
                  isActive
                    ? "bg-white text-purple-700 font-semibold"
                    : "hover:bg-white/10"
                }`
              }
            >
              Pending Profiles
            </NavLink>

            <NavLink
              to="/super-admin/profiles/approved"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-lg text-sm transition ${
                  isActive
                    ? "bg-white text-purple-700 font-semibold"
                    : "hover:bg-white/10"
                }`
              }
            >
              Approved Profiles
            </NavLink>

            <NavLink
              to="/super-admin/profiles/rejected"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-lg text-sm transition ${
                  isActive
                    ? "bg-white text-purple-700 font-semibold"
                    : "hover:bg-white/10"
                }`
              }
            >
              Rejected Profiles
            </NavLink>
            <NavLink to="/super-admin/profiles/married"
            className={({ isActive }) =>
                `block px-3 py-2 rounded-lg text-sm transition ${
                  isActive
                    ? "bg-white/90 text-rose-600 font-semibold"
                    : "text-rose-100 hover:bg-white/10"
                }`
                }>
              Married Profiles
            </NavLink>
          </div>
        )}

        {/* Matches */}
        <NavLink
          to="/super-admin/matches"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          💑 <span>Matches</span>
        </NavLink>
        <NavLink
          to="/super-admin/activity-logs"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          👤 <span>Admin Acitivty</span>
        </NavLink>

        {/* Subscriptions Parent */}
        <button
          onClick={() => setOpenSubscriptions(!openSubscriptions)}
          className={`${linkBase} ${inactiveStyle}`}
        >
          💳 <span className="flex-1 text-left">Subscriptions</span>
          <span className="text-xs">{openSubscriptions ? "▲" : "▼"}</span>
        </button>

        {openSubscriptions && (
          <div className="ml-6 space-y-1">
            <NavLink
              to="/super-admin/subscriptions/active"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-lg text-sm transition ${
                  isActive
                    ? "bg-white text-purple-700 font-semibold"
                    : "hover:bg-white/10"
                }`
              }
            >
              Active Subscriptions
            </NavLink>

            <NavLink
              to="/super-admin/subscriptions/expired"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-lg text-sm transition ${
                  isActive
                    ? "bg-white text-purple-700 font-semibold"
                    : "hover:bg-white/10"
                }`
              }
            >
              Expired Subscriptions
            </NavLink>

            <NavLink
              to="/super-admin/subscriptions/graph"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-lg text-sm transition ${
                  isActive
                    ? "bg-white text-purple-700 font-semibold"
                    : "hover:bg-white/10"
                }`
              }
            >
              Subscription Graph
            </NavLink>
          </div>
        )}

        {/* Reports Parent */}
        <button
          onClick={() => setOpenReports(!openReports)}
          className={`${linkBase} ${inactiveStyle}`}
        >
          📑 <span className="flex-1 text-left">Reports</span>
          <span className="text-xs">{openReports ? "▲" : "▼"}</span>
        </button>

        {openReports && (
          <div className="ml-6 space-y-1">
            <NavLink
              to="/super-admin/payments/payment-reports"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-lg text-sm transition ${
                  isActive
                    ? "bg-white text-purple-700 font-semibold"
                    : "hover:bg-white/10"
                }`
              }
            >
              Payment Reports
            </NavLink>

            <NavLink
              to="/super-admin/payments/revenue-reports"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-lg text-sm transition ${
                  isActive
                    ? "bg-white text-purple-700 font-semibold"
                    : "hover:bg-white/10"
                }`
              }
            >
              Revenue Reports
            </NavLink>
          </div>
        )}

        {/* Analytics */}
        <NavLink
          to="/super-admin/analytics"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          📊 <span>Analytics</span>
        </NavLink>

        {/* Notifications */}
        <NavLink
          to="/super-admin/notifications"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          🔔 <span>Notifications</span>
        </NavLink>

        {/* Change Password */}
        <NavLink
          to="/super-admin/change-password"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          ⚙️ <span>Change Password</span>
        </NavLink>

      </nav>
    </aside>
  );
}