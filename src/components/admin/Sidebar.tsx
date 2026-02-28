import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Sidebar() {
  const location = useLocation();

  const [openProfiles, setOpenProfiles] = useState(
    location.pathname.includes("/admin/profiles")
  );
const [openSubscriptions, setOpenSubscriptions] = useState(
    location.pathname.includes("/admin/subscriptions")
  );
  const [openReports, setOpenReports] = useState(
    location.pathname.includes("/admin/payments")
  );

  const linkBase =
    "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200";

  const activeStyle = "bg-white text-rose-600 shadow-md";
  const inactiveStyle =
    "text-rose-100 hover:bg-white/10 hover:text-white";

  return (
    <aside className="w-64 min-h-screen bg-gradient-to-b from-gray-950 via-emerald-900 to-emerald-800 flex flex-col shadow-2xl">
      
      {/* Logo */}
      <div className="px-6 py-7 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center shadow-md">
            <span className="text-rose-600 text-lg">♥</span>
          </div>
          <div>
            <p className="text-primary font-bold text-lg ">Happy Hearts</p>
            <p className="text-rose-200 text-xs">Admin Portal</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1">

        {/* Dashboard */}
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          ⊞ <span>Dashboard</span>
        </NavLink>

        {/* Profiles Parent */}
        <button
          onClick={() => setOpenProfiles(!openProfiles)}
          className={`${linkBase} ${inactiveStyle}`}
        >
          👤 <span className="flex-1 text-left">Profiles</span>
          <span className="text-xs">{openProfiles ? "▲" : "▼"}</span>
        </button>

        {/* Profiles Submenu */}
        {openProfiles && (
          <div className="ml-6 space-y-1">
            <NavLink
              to="/admin/profiles/pending"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-lg text-sm transition ${
                  isActive
                    ? "bg-white/90 text-rose-600 font-semibold"
                    : "text-rose-100 hover:bg-white/10"
                }`
              }
            >
              Pending Profiles
            </NavLink>

            <NavLink
              to="/admin/profiles/approved"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-lg text-sm transition ${
                  isActive
                    ? "bg-white/90 text-rose-600 font-semibold"
                    : "text-rose-100 hover:bg-white/10"
                }`
              }
            >
              Approved Profiles
            </NavLink>

            <NavLink
              to="/admin/profiles/rejected"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-lg text-sm transition ${
                  isActive
                    ? "bg-white/90 text-rose-600 font-semibold"
                    : "text-rose-100 hover:bg-white/10"
                }`
              }
            >
              Rejected Profiles
            </NavLink>
            <NavLink to="/admin/profiles/married"
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
          to="/admin/matches"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          💑 <span>Matches</span>
        </NavLink>

        {/* Subscription Parent */}
        <button
          onClick={() => setOpenSubscriptions(!openSubscriptions)}
          className={`${linkBase} ${inactiveStyle}`}
        >
          � <span className="flex-1 text-left">Subscriptions</span>
          <span className="text-xs">{openSubscriptions ? "▲" : "▼"}</span>
        </button>
        {/* Subscriptions submenu*/}
        {openSubscriptions && (
          <div className="ml-6 space-y-1">
            <NavLink
              to="/admin/subscriptions/active"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-lg text-sm transition ${
                  isActive
                    ? "bg-white/90 text-rose-600 font-semibold"
                    : "text-rose-100 hover:bg-white/10"
                }`
              }
            >
              Active Subscription
            </NavLink>

            <NavLink
              to="/admin/subscriptions/expired"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-lg text-sm transition ${
                  isActive
                    ? "bg-white/90 text-rose-600 font-semibold"
                    : "text-rose-100 hover:bg-white/10"
                }`
              }
            >
              Expired Subscription
            </NavLink>

            <NavLink
              to="/admin/subscriptions/graph"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-lg text-sm transition ${
                  isActive
                    ? "bg-white/90 text-rose-600 font-semibold"
                    : "text-rose-100 hover:bg-white/10"
                }`
              }
            >
              Subscription Graph
            </NavLink>
          </div>
        )}
        {/* Banner Panel */}
        <NavLink
          to="/admin/banners/banner-panel"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          📰 <span>Banner Panel</span>
          <span className="ml-auto text-xs bg-white/20 px-2 py-0.5 rounded-full">
            5
          </span>
        </NavLink>

        {/* Messages */}
        <NavLink
          to="/admin/messages"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          💬 <span>Messages</span>
          <span className="ml-auto text-xs bg-white/20 px-2 py-0.5 rounded-full">
            5
          </span>
        </NavLink>

        {/* Reports Parent */}
        <button
          onClick={() => setOpenReports(!openReports)}
          className={`${linkBase} ${inactiveStyle}`}
        >
          👤 <span className="flex-1 text-left">Reports</span>
          <span className="text-xs">{openReports ? "▲" : "▼"}</span>
        </button>

        {/* Reports */}
        {openReports && (
          <div className="ml-6 space-y-1">
            <NavLink
              to="/admin/payments/payment-reports"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-lg text-sm transition ${
                  isActive
                    ? "bg-white/90 text-rose-600 font-semibold"
                    : "text-rose-100 hover:bg-white/10"
                }`
              }
            >
              Payment Reports
            </NavLink>

            <NavLink
              to="/admin/payments/revenue-reports"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-lg text-sm transition ${
                  isActive
                    ? "bg-white/90 text-rose-600 font-semibold"
                    : "text-rose-100 hover:bg-white/10"
                }`
              }
            >
              Revenue Reports
            </NavLink>


            
          </div>
        )}

        {/* Analytics */}
        <NavLink
          to="/admin/analytics"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          📊 <span>Analytics</span>
        </NavLink>
        

        {/* Notifications */}
        <NavLink
          to="/admin/notifications"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          🔔 <span>Notifications</span>
        </NavLink>

        {/* Settings */}
        <NavLink
          to="/admin/change-password"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          ⚙️ <span>Settings</span>
        </NavLink>

      </nav>

      {/* Admin Info */}
      <div className="px-4 py-4 border-t border-white/10">
        <div className="flex items-center gap-3 px-2">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm">
            A
          </div>
          <div className="flex-1">
            <p className="text-white text-sm font-medium">Admin User</p>
            <p className="text-rose-200 text-xs">admin@vivah.com</p>
          </div>
        </div>
      </div>

    </aside>
  );
}


