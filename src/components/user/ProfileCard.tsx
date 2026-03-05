import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  MessageCircle,
  Flag,
  MapPin,
  Briefcase,
  GraduationCap,
  X,
  AlertTriangle,
} from "lucide-react";

interface ReportModalProps {
  onClose: () => void;
  profileName: string;
}
interface Profile {
  id: number;
  name: string;
  age: number;
  city: string;
  image: string;
  verified?: boolean;
  profession?: string;
  education?: string;
}
function ReportModal({ onClose, profileName }: ReportModalProps) {
  const [reason, setReason] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const reasons = [
    "Fake profile / Impersonation",
    "Inappropriate content",
    "Spam or scam",
    "Abusive behavior",
    "Other",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.92, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden border border-red-100"
      >
        <div className="bg-gradient-to-r from-red-700 to-red-500 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertTriangle size={18} className="text-white" />
            <h3 className="font-bold text-white text-lg">Report Profile</h3>
          </div>
          <button onClick={onClose} className="text-white/70 hover:text-white">
            <X size={20} />
          </button>
        </div>
        {!submitted ? (
          <div className="p-6">
            <p className="text-sm text-gray-500 mb-4">
              Reporting <span className="font-semibold text-gray-800">{profileName}</span>. Please select a reason:
            </p>
            <div className="space-y-2 mb-5">
              {reasons.map((r) => (
                <label key={r} className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${reason === r ? "border-red-500 bg-red-50" : "border-gray-200 hover:border-red-300"}`}>
                  <input type="radio" name="reason" value={r} onChange={() => setReason(r)} className="accent-red-600" />
                  <span className="text-sm text-gray-700">{r}</span>
                </label>
              ))}
            </div>
            <button
              disabled={!reason}
              onClick={() => setSubmitted(true)}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-red-700 to-red-500 text-white font-semibold text-sm disabled:opacity-40 hover:shadow-lg transition-all"
            >
              Submit Report
            </button>
          </div>
        ) : (
          <div className="p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h4 className="font-bold text-gray-800 text-lg mb-2">Report Submitted</h4>
            <p className="text-sm text-gray-500 mb-5">Thank you. Our team will review this profile shortly.</p>
            <button onClick={onClose} className="px-6 py-2.5 rounded-xl bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200 transition-all">
              Close
            </button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function ProfileCard(  { profile }: { profile: Profile }) {
  const [liked, setLiked] = useState(false);
  const [reportOpen, setReportOpen] = useState(false);
  const [likeAnim, setLikeAnim] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    if (!liked) {
      setLikeAnim(true);
      setTimeout(() => setLikeAnim(false), 700);
    }
  };
  const navigate = useNavigate();

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -4, boxShadow: "0 20px 60px rgba(180,83,9,0.15)" }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-3xl overflow-hidden border border-amber-100 shadow-[0_4px_24px_rgba(180,83,9,0.08)] group"
      >
        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src={profile.image}
            alt={profile.name}
            className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          {/* Top badge */}
          {profile.verified && (
            <div className="absolute top-3 left-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-semibold text-emerald-700 shadow-md">
              <div className="w-2 h-2 rounded-full bg-emerald-500" /> Verified
            </div>
          )}

          {/* Report button */}
          <button
            onClick={() => setReportOpen(true)}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-500 hover:text-red-600 hover:bg-white shadow-md transition-all opacity-0 group-hover:opacity-100"
            title="Report Profile"
          >
            <Flag size={14} />
          </button>

          {/* Bottom info */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-xl font-bold text-white font-serif">{profile.name}</h3>
            <div className="flex items-center gap-3 mt-1">
              <span className="text-white/80 text-sm">{profile.age} yrs</span>
              <span className="w-1 h-1 rounded-full bg-white/50" />
              <span className="text-white/80 text-sm flex items-center gap-1">
                <MapPin size={11} /> {profile.city}
              </span>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="px-5 py-3 border-b border-gray-50 flex items-center gap-4 text-xs text-gray-500">
          {profile.profession && (
            <span className="flex items-center gap-1">
              <Briefcase size={12} className="text-amber-500" />
              {profile.profession}
            </span>
          )}
          {profile.education && (
            <span className="flex items-center gap-1">
              <GraduationCap size={12} className="text-amber-500" />
              {profile.education}
            </span>
          )}
        </div>

        {/* Action buttons */}
        <div className="px-5 py-4 flex items-center gap-2">
          {/* Like */}
          <button
            onClick={handleLike}
            className={`relative flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              liked
                ? "bg-red-600 text-white shadow-lg shadow-red-200"
                : "bg-red-50 text-red-600 hover:bg-red-100"
            }`}
          >
            <AnimatePresence>
              {likeAnim && (
                <motion.div
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{ scale: 2.5, opacity: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 rounded-xl bg-red-400 pointer-events-none"
                />
              )}
            </AnimatePresence>
            <Heart size={15} className={liked ? "fill-white" : ""} />
            {liked ? "Liked" : "Like"}
          </button>

          {/* Message */}
          <Link to={`/user/user-messages`} className="flex items-center gap-1.5 px-1 py-1 rounded-xl text-sm font-medium bg-amber-50 text-amber-700 hover:bg-amber-100 transition-all flex-1 justify-center">
          <button className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium bg-amber-50 text-amber-700 hover:bg-amber-100 transition-all flex-1 justify-center">
            <MessageCircle size={15} />
            Message
          </button>
          </Link>

          {/* View Profile */}
          <button
            onClick={() => navigate(`/user/profile/${profile.id}`)}
            className="mt-2 px-2 py-2 bg-gradient-to-r from-red-300 via-red-200 to-red-50 text-indigo-900 rounded-full shadow-lg hover:scale-105 transition"
          >
            View
          </button>
        </div>

        {/* Report link */}
        <div className="px-5 pb-4 flex justify-end">
          <button
            onClick={() => setReportOpen(true)}
            className="flex items-center gap-1 text-xs text-red-700 hover:text-red-400 transition-colors"
          >
            <Flag size={11} /> Report this profile
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {reportOpen && (
          <ReportModal onClose={() => setReportOpen(false)} profileName={profile.name} />
        )}
      </AnimatePresence>
    </>
  );
}