import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Heart,
  Bell,
  MessageCircle,
  Settings,
  User,
  ChevronDown,
  Shield,
  Lock,
  UserCog,
  LogOut,
  Crown,
  X,
  Menu,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const navLinks = [
  { label: "Home", icon: Home, href: "/user/user-dashboard" },
  { label: "Shortlisted", icon: Heart, href: "/user/shortlisted" },
];

const settingsMenu = [
  { label: "Privacy & Security", icon: Lock, href: "/user/privacy" },
  { label: "Account Management", icon: UserCog, href: "/user/account" },
];

export default function UserDashboardNavbar() {
  const [profileOpen, setProfileOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [msgOpen, setMsgOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Properly type refs
const profileRef = useRef<HTMLDivElement | null>(null);
const settingsRef = useRef<HTMLDivElement | null>(null);
const notifRef = useRef<HTMLDivElement | null>(null);
const msgRef = useRef<HTMLDivElement | null>(null);

useEffect(() => {
  function handleClick(e: MouseEvent) {
    const target = e.target as Node;

    if (profileRef.current && !profileRef.current.contains(target))
      setProfileOpen(false);

    if (settingsRef.current && !settingsRef.current.contains(target))
      setSettingsOpen(false);

    if (notifRef.current && !notifRef.current.contains(target))
      setNotifOpen(false);

    if (msgRef.current && !msgRef.current.contains(target))
      setMsgOpen(false);
  }

  document.addEventListener("mousedown", handleClick);
  return () => document.removeEventListener("mousedown", handleClick);
}, []);

  const notifications = [
    { id: 1, text: "Priya Verma liked your profile", time: "2m ago", unread: true },
    { id: 2, text: "New match found in Delhi", time: "1h ago", unread: true },
    { id: 3, text: "Aarav Sharma sent a message", time: "3h ago", unread: false },
  ];
  

  const messages = [
    { id: 1, name: "Priya Verma", msg: "Hi! I loved your profile 😊", time: "2m", avatar: "/hero3.PNG", unread: 2 },
    { id: 2, name: "Aarav Sharma", msg: "Are you from Mumbai?", time: "1h", avatar: "/hero2.PNG", unread: 0 },
  ];
  const navigate = useNavigate();
  return (
    
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-amber-100 shadow-[0_2px_30px_rgba(180,83,9,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-[70px]">

            {/* Logo */}
            <Link to="/user/user-dashboard" className="flex items-center gap-2 shrink-0">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-red-700 to-amber-500 flex items-center justify-center shadow-lg">
                <Crown size={18} className="text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-red-800 font-serif hidden sm:block">
                ShubVivah
              </span>
            </Link>

            {/* Center nav links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map(({ label, icon: Icon, href }) => (
                <Link
                  key={label}
                  to={href}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-gray-600 hover:text-red-700 hover:bg-red-50 transition-all"
                >
                  <Icon size={16} />
                  {label}
                </Link>
              ))}

              {/* Settings dropdown */}
              <div className="relative" ref={settingsRef}>
                <button
                  onClick={() => setSettingsOpen(!settingsOpen)}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-gray-600 hover:text-red-700 hover:bg-red-50 transition-all"
                >
                  <Settings size={16} />
                  Settings
                  <ChevronDown size={13} className={`transition-transform ${settingsOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {settingsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-amber-100 overflow-hidden"
                    >
                      <div className="p-1.5">
                        {settingsMenu.map(({ label, icon: Icon, href }) => (
                          <Link
                            key={label}
                            to={href}
                            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 transition-all"
                          >
                            <Icon size={16} className="text-amber-600" />
                            {label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-1">

              {/* Notifications */}
              <div className="relative" ref={notifRef}>
                <button
                  onClick={() => { setNotifOpen(!notifOpen); setMsgOpen(false); setProfileOpen(false); }}
                  className="relative w-10 h-10 rounded-xl flex items-center justify-center text-gray-500 hover:text-red-700 hover:bg-red-50 transition-all"
                >
                  <Bell size={20} />
                  <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-600 rounded-full border-2 border-white" />
                </button>
                <AnimatePresence>
                  {notifOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="absolute right-0 top-full mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-amber-100 overflow-hidden"
                    >
                      <div className="px-4 py-3 border-b border-amber-50 flex items-center justify-between">
                        <span className="font-semibold text-gray-800 text-sm">Notifications</span>
                        <button onClick={() => setNotifOpen(false)}><X size={15} className="text-gray-400" /></button>
                      </div>
                      <div className="max-h-72 overflow-y-auto">
                        {notifications.map((n) => (
                          <div key={n.id} className={`px-4 py-3 flex items-start gap-3 hover:bg-amber-50 transition-all border-b border-gray-50 ${n.unread ? "bg-red-50/40" : ""}`}>
                            <div className={`w-2 h-2 rounded-full mt-2 shrink-0 ${n.unread ? "bg-red-500" : "bg-gray-300"}`} />
                            <div className="flex-1">
                              <p className="text-sm text-gray-700">{n.text}</p>
                              <p className="text-xs text-gray-400 mt-0.5">{n.time}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="px-4 py-2.5 text-center">
                        <Link to="/user/user-notifications" className="text-xs font-medium text-red-600 hover:underline">View all</Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Messages */}
              <div className="relative" ref={msgRef}>
                <button
                  onClick={() => { setMsgOpen(!msgOpen); setNotifOpen(false); setProfileOpen(false); }}
                  className="relative w-10 h-10 rounded-xl flex items-center justify-center text-gray-500 hover:text-red-700 hover:bg-red-50 transition-all"
                >
                  <MessageCircle size={20} />
                  <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-amber-500 rounded-full border-2 border-white" />
                </button>
                <AnimatePresence>
                  {msgOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="absolute right-0 top-full mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-amber-100 overflow-hidden"
                    >
                      <div className="px-4 py-3 border-b border-amber-50 flex items-center justify-between">
                        <span className="font-semibold text-gray-800 text-sm">Messages</span>
                        <button onClick={() => setMsgOpen(false)}><X size={15} className="text-gray-400" /></button>
                      </div>
                      <div className="max-h-72 overflow-y-auto">
                        {messages.map((m) => (
                          <div key={m.id} className="px-4 py-3 flex items-center gap-3 hover:bg-amber-50 transition-all border-b border-gray-50 cursor-pointer">
                            <img src={m.avatar} alt={m.name} className="w-10 h-10 rounded-full object-cover border-2 border-amber-200" />
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-semibold text-gray-800">{m.name}</p>
                              <p className="text-xs text-gray-500 truncate">{m.msg}</p>
                            </div>
                            <div className="flex flex-col items-end gap-1">
                              <span className="text-xs text-gray-400">{m.time}</span>
                              {m.unread > 0 && (
                                <span className="w-5 h-5 rounded-full bg-red-600 text-white text-xs flex items-center justify-center font-bold">
                                  {m.unread}
                                </span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="px-4 py-2.5 text-center">
                        <Link to="/user/user-messages" className="text-xs font-medium text-red-600 hover:underline">Open inbox</Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Profile */}
              <div className="relative" ref={profileRef}>
                <button
                  onClick={() => { setProfileOpen(!profileOpen); setNotifOpen(false); setMsgOpen(false); }}
                  className="flex items-center gap-2 ml-1 pl-2 pr-3 py-1.5 rounded-xl border border-amber-200 hover:border-red-300 hover:bg-red-50/50 transition-all"
                >
                  <img src="/hero2.PNG" alt="My Profile" className="w-8 h-8 rounded-lg object-cover border border-amber-300" />
                  <div className="hidden sm:block text-left">
                    <p className="text-xs font-semibold text-gray-800 leading-tight">Rahul Kumar</p>
                    <p className="text-[10px] text-amber-600 font-medium leading-tight flex items-center gap-0.5">
                      <Crown size={9} /> Premium
                    </p>
                  </div>
                  <ChevronDown size={13} className={`text-gray-400 transition-transform ${profileOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {profileOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.18 }}
                      className="absolute right-0 top-full mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-amber-100 overflow-hidden"
                    >
                      {/* Profile header in dropdown */}
                      <div className="bg-gradient-to-br from-red-700 via-red-600 to-amber-600 px-5 py-4">
                        <div className="flex items-center gap-3">
                          <img src="/hero2.PNG" alt="Profile" className="w-14 h-14 rounded-xl object-cover border-2 border-white/40 shadow-lg" />
                          <div>
                            <p className="font-bold text-white text-base">Rahul Kumar</p>
                            <p className="text-white/80 text-xs">rahul@email.com</p>
                            <span className="inline-flex items-center gap-1 mt-1 bg-amber-400/30 text-amber-200 text-xs px-2 py-0.5 rounded-full font-medium border border-amber-300/30">
                              <Crown size={9} /> Premium Plan
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="p-2">
                        <Link to="/user/profile" className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 transition-all">
                          <User size={16} className="text-amber-600" /> View My Profile
                        </Link>
                        <Link to="/user/subscription" className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 transition-all">
                          <Crown size={16} className="text-amber-600" /> Subscription Plans
                        </Link>
                        <Link to="/user/privacy" className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 transition-all">
                          <Shield size={16} className="text-amber-600" /> Privacy & Security
                        </Link>
                        <Link to="/user/account" className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 transition-all">
                          <UserCog size={16} className="text-amber-600" /> Account Management
                        </Link>
                        <div className="my-1 border-t border-gray-100" />
                        <button
                            onClick={() => {
                                localStorage.removeItem("token");
                                navigate("/login");
                            }}
                            className="flex w-full items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-red-600 hover:bg-red-50 transition-all"
                            >
                            <LogOut size={16} /> Sign Out
                            </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile menu */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center text-gray-500 hover:bg-red-50 transition-all ml-1"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-amber-100 bg-white"
            >
              <div className="px-4 py-3 space-y-1">
                {navLinks.map(({ label, icon: Icon, href }) => (
                  <Link key={label} to={href} className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-red-50 hover:text-red-700 transition-all">
                    <Icon size={16} /> {label}
                  </Link>
                ))}
                <div className="pl-4 pt-2 pb-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">Settings</div>
                {settingsMenu.map(({ label, icon: Icon, href }) => (
                  <Link key={label} to={href} className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 transition-all ml-2">
                    <Icon size={15} className="text-amber-600" /> {label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}