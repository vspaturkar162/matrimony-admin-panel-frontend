
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Crown,
  Edit3,
  HelpCircle,
  Search,
  Star,
  MapPin,
  Heart,
  Eye,
  Sparkles,
  ChevronRight,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function MyProfileSidebar() {
  const [searchQuery, setSearchQuery] = useState("");

  const stats = [
    { label: "Profile Views", value: "1.2k", icon: Eye },
    { label: "Likes Received", value: "48", icon: Heart },
    { label: "Matches", value: "12", icon: Star },
  ];

  return (
    <motion.aside
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full lg:w-80 shrink-0"
    >
      {/* Search */}
      <div className="bg-white rounded-2xl border border-amber-100 shadow-sm p-3 mb-5">
        <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-3 py-2.5 border border-gray-100 focus-within:border-red-300 focus-within:bg-white transition-all">
          <Search size={16} className="text-gray-400 shrink-0" />
          <input
            type="text"
            placeholder="Search profiles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none w-full"
          />
        </div>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-3xl overflow-hidden border border-amber-100 shadow-[0_4px_24px_rgba(180,83,9,0.08)] mb-5">
        <div className="h-24 bg-gradient-to-br from-red-700 via-red-600 to-amber-500 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)",
            }}
          />
          <div className="absolute bottom-0 right-0 opacity-10">
            <Crown size={80} className="text-white -mb-4 -mr-4" />
          </div>
        </div>

        <div className="px-5 pb-5">
          <div className="flex items-end justify-between -mt-12 mb-4">
            <div className="relative">
              <img
                src="/profile8.PNG"
                alt="My Profile"
                className="w-24 h-24 rounded-2xl object-cover border-4 border-white shadow-xl"
              />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center">
                <CheckCircle size={12} className="text-white fill-white" />
              </div>
            </div>
            <span className="flex items-center gap-1 bg-gradient-to-r from-amber-400 to-yellow-300 text-amber-900 text-xs font-bold px-3 py-1 rounded-full shadow-md mb-1">
              <Crown size={10} /> Premium
            </span>
          </div>

          <h2 className="text-xl font-bold text-gray-900 font-serif">
            Rahul Kumar
          </h2>
          <p className="text-sm text-gray-500 flex items-center gap-1 mt-0.5">
            <MapPin size={12} className="text-red-400" /> Mumbai, Maharashtra
          </p>
          <p className="text-xs text-gray-400 mt-1">
            28 yrs • Software Engineer • B.Tech
          </p>

          <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-gray-50">
            {stats.map(({ label, value }) => (
              <div key={label} className="text-center">
                <p className="text-lg font-bold text-red-700">{value}</p>
                <p className="text-[10px] text-gray-400 mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      

      {/* Actions */}
      <div className="bg-white rounded-3xl border border-amber-100 shadow-[0_4px_24px_rgba(180,83,9,0.08)] overflow-hidden mb-5">
        <div className="p-2">

          {/* Upgrade */}
          <Link to="/user/subscription">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 w-full px-4 py-3.5 rounded-2xl bg-gradient-to-r from-red-700 via-red-600 to-amber-500 text-white mb-2 group shadow-lg shadow-red-100 cursor-pointer"
            >
              <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                <Crown size={16} className="text-amber-200" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm font-bold leading-tight">Upgrade Plan</p>
                <p className="text-white/70 text-[11px]">
                  Unlock unlimited matches
                </p>
              </div>
              <Sparkles
                size={16}
                className="text-amber-200 group-hover:rotate-12 transition-transform"
              />
            </motion.div>
          </Link>

          {/* Edit Preferences */}
          <Link
            to="/user/edit-preferences"
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-50 transition-all group"
          >
            <div className="w-8 h-8 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
              <Edit3 size={15} className="text-amber-600" />
            </div>
            <span className="text-sm font-medium text-gray-700 group-hover:text-red-700 flex-1">
              Edit Preferences
            </span>
            <ChevronRight
              size={14}
              className="text-gray-300 group-hover:text-red-400 transition-colors"
            />
          </Link>

          {/* Help */}
          <Link
            to="/user/help"
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-50 transition-all group"
          >
            <div className="w-8 h-8 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
              <HelpCircle size={15} className="text-amber-600" />
            </div>
            <span className="text-sm font-medium text-gray-700 group-hover:text-red-700 flex-1">
              Help & Support
            </span>
            <ChevronRight
              size={14}
              className="text-gray-300 group-hover:text-red-400 transition-colors"
            />
          </Link>

        </div>
      </div>

      {/* Profile Strength */}
      <div className="bg-white rounded-2xl border border-amber-100 shadow-sm p-4">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-semibold text-gray-800">
            Profile Strength
          </p>
          <span className="text-sm font-bold text-red-600">72%</span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "72%" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-full bg-gradient-to-r from-red-600 to-amber-400 rounded-full"
          />
        </div>
        <p className="text-xs text-gray-400 mt-2">
          Add education details to reach 85%
        </p>
      </div>
    </motion.aside>
  );
}