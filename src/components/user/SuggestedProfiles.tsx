import { motion } from "framer-motion";
import { Sparkles, MapPin, Heart, MessageCircle, ArrowRight } from "lucide-react";

const suggestedProfiles = [
  {
    id: 4,
    name: "Ananya Singh",
    age: 25,
    city: "Mumbai",
    profession: "Doctor",
    match: 96,
    image: "/profile5.PNG",
    tags: ["Same City", "High Match"],
  },
  {
    id: 5,
    name: "Kavya Reddy",
    age: 27,
    city: "Hyderabad",
    profession: "Engineer",
    match: 91,
    image: "/profile6.PNG",
    tags: ["Similar Education"],
  },
  {
    id: 6,
    name: "Shreya Joshi",
    age: 24,
    city: "Pune",
    profession: "CA",
    match: 88,
    image: "/profile2.PNG",
    tags: ["Similar Values"],
  },
  {
    id: 7,
    name: "Divya Nair",
    age: 26,
    city: "Bangalore",
    profession: "Designer",
    match: 85,
    image: "/profile3.PNG",
    tags: ["New Profile"],
  },
];

const tagColors: Record<string, string> = {
  "Same City": "bg-green-50 text-green-700 border-green-200",
  "High Match": "bg-red-50 text-red-600 border-red-200",
  "Similar Education": "bg-blue-50 text-blue-700 border-blue-200",
  "Similar Values": "bg-purple-50 text-purple-700 border-purple-200",
  "New Profile": "bg-amber-50 text-amber-700 border-amber-200",
};

export default function SuggestedProfiles() {
  return (
    <section className="mt-16 mb-8">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center justify-between mb-8"
      >
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-red-600 to-amber-400 flex items-center justify-center shadow-md">
              <Sparkles size={16} className="text-white" />
            </div>
            <span className="text-xs font-semibold text-amber-600 uppercase tracking-widest">AI Suggested</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif">
            Matches For <span className="text-red-700">Your Type</span>
          </h2>
          <p className="text-sm text-gray-500 mt-1">Handpicked based on your preferences and compatibility</p>
        </div>
        <a
          href="/matches"
          className="hidden sm:flex items-center gap-2 text-sm font-semibold text-red-700 hover:text-red-800 bg-red-50 hover:bg-red-100 px-4 py-2.5 rounded-xl transition-all"
        >
          View All <ArrowRight size={15} />
        </a>
      </motion.div>

      {/* Horizontal scroll grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {suggestedProfiles.map((profile, i) => (
          <motion.div
            key={profile.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            whileHover={{ y: -4 }}
            className="bg-white rounded-2xl overflow-hidden border border-amber-100 shadow-[0_4px_20px_rgba(180,83,9,0.08)] group"
          >
            {/* Image */}
            <div className="relative overflow-hidden h-52">
              <img
                src={profile.image}
                alt={profile.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              {/* Match % badge */}
              <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-md">
                <span className="text-xs font-bold text-red-600">{profile.match}% match</span>
              </div>

              {/* Name overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="font-bold text-white text-base font-serif">{profile.name}</p>
                <p className="text-white/75 text-xs flex items-center gap-1 mt-0.5">
                  <MapPin size={10} /> {profile.city} • {profile.age} yrs
                </p>
              </div>
            </div>

            {/* Details */}
            <div className="p-3">
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {profile.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${tagColors[tag] || "bg-gray-50 text-gray-600 border-gray-200"}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-red-50 text-red-600 hover:bg-red-600 hover:text-white text-xs font-semibold transition-all">
                  <Heart size={13} /> Like
                </button>
                <button className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-amber-50 text-amber-700 hover:bg-amber-500 hover:text-white text-xs font-semibold transition-all">
                  <MessageCircle size={13} /> Message
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile view all */}
      <div className="sm:hidden mt-5 text-center">
        <a href="/matches" className="inline-flex items-center gap-2 text-sm font-semibold text-red-700 bg-red-50 px-6 py-2.5 rounded-xl">
          View All Matches <ArrowRight size={15} />
        </a>
      </div>
    </section>
  );
}