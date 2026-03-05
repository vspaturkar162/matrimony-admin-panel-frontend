// import { motion } from "framer-motion";
// import UserNavbar from "../../components/user/UserNavbar";
// import Footer from "../../components/user/Footer";
// import Sponsors from "../../components/user/Sponsors";

// const profiles = [
//   {
//     id: 1,
//     name: "Aarav Sharma",
//     age: 28,
//     city: "Mumbai",
//     image: "/hero2.PNG",
//   },
//   {
//     id: 2,
//     name: "Priya Verma",
//     age: 26,
//     city: "Pune",
//     image: "/hero3.PNG",
//   },
//   {
//     id: 3,
//     name: "Rohan Mehta",
//     age: 30,
//     city: "Delhi",
//     image: "/hero4.PNG",
//   },
// ];

// export default function UserDashboard() {
//   return (
//     <>
//       <div className="min-h-screen bg-gradient-to-b from-[#fff8f0] to-[#fdf1e6]">
//         <UserNavbar />

//         <div className="max-w-7xl mx-auto px-6 py-16">

//           {/* Welcome Section */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="mb-12 text-center"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold text-red-700 mb-4">
//               Welcome to ShubVivah
//             </h2>
//             <p className="text-lg text-gray-600">
//               Discover meaningful connections with verified profiles.
//             </p>
//           </motion.div>

//           {/* Profiles Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {profiles.map((profile) => (
//               <motion.div
//                 key={profile.id}
//                 whileHover={{ scale: 1.05 }}
//                 className="bg-white rounded-3xl shadow-xl overflow-hidden border border-yellow-200"
//               >
//                 <img
//                   src={profile.image}
//                   alt={profile.name}
//                   className="w-full h-64 object-cover"
//                 />

//                 <div className="p-6 text-center">
//                   <h3 className="text-2xl font-semibold text-red-600">
//                     {profile.name}
//                   </h3>
//                   <p className="text-gray-600 mt-2">
//                     {profile.age} yrs • {profile.city}
//                   </p>

//                   <button
//                     className="mt-4 px-6 py-2 bg-gradient-to-r
//                     from-red-700 via-red-500 to-red-400 text-white
//                     rounded-full shadow-lg hover:scale-105 transition"
//                   >
//                     View Profile
//                   </button>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
            
//         </div>
//       </div>
//         <Sponsors/>
//       <Footer />
//     </>
//   );
// }

import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

import UserNavbar from "../../components/user/UserDashboardNavbar";
import MyProfileSidebar from "../../components/user/MyProfileSidebar";
import ProfileCard from "../../components/user/ProfileCard";
import SuggestedProfiles from "../../components/user/SuggestedProfiles";
import Footer from "../../components/user/Footer";
import Sponsors from "../../components/user/Sponsors";
import { Sparkles, SlidersHorizontal } from "lucide-react";

const profiles = [
  {
    id: 1,
    name: "Aarav Sharma",
    age: 28,
    city: "Mumbai",
    profession: "Software Engineer",
    education: "IIT Bombay",
    image: "/profile1.PNG",
    verified: true,
  },
  {
    id: 2,
    name: "Priya Verma",
    age: 26,
    city: "Pune",
    profession: "Doctor",
    education: "AIIMS",
    image: "/profile2.PNG",
    verified: true,
  },
  {
    id: 3,
    name: "Rohan Mehta",
    age: 30,
    city: "Delhi",
    profession: "CA",
    education: "DU",
    image: "/profile7.PNG",
    verified: false,
  },
  {
    id: 4,
    name: "Sneha Pillai",
    age: 27,
    city: "Bangalore",
    profession: "Designer",
    education: "NID",
    image: "/profile3.PNG",
    verified: true,
  },
  {
    id: 5,
    name: "Arjun Nair",
    age: 29,
    city: "Chennai",
    profession: "Architect",
    education: "SPA",
    image: "/profile8.PNG",
    verified: false,
  },
  {
    id: 6,
    name: "Meera Iyer",
    age: 25,
    city: "Hyderabad",
    profession: "Lawyer",
    education: "NALSAR",
    image: "/profile4.PNG",
    verified: true,
  },
];

const filterTabs = ["All Profiles", "New Today", "Near Me", "Highly Compatible", "Recently Active"];

export default function UserDashboard() {
    const navigate = useNavigate();
  return (
    <>
      {/* Decorative background */}
      <div className="min-h-screen bg-gradient-to-br from-[#fff8f0] via-[#fdf6ee] to-[#fef0e6] relative overflow-x-hidden">
        {/* Subtle pattern overlay */}
        <div
          className="fixed inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23b45309' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <UserNavbar />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-[86px] pb-12">

          {/* Welcome Banner */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-3xl overflow-hidden mb-8 mt-4"
          >
            <div className="bg-gradient-to-r from-red-800 via-red-700 to-amber-600 px-7 py-7 md:py-8">
              {/* Decorative circles */}
              <div className="absolute right-0 top-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/4" />
              <div className="absolute right-24 bottom-0 w-32 h-32 rounded-full bg-white/5 translate-y-1/2" />

              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles size={14} className="text-amber-300" />
                    <span className="text-amber-300 text-xs font-semibold tracking-widest uppercase">Good Morning</span>
                  </div>
                  <h1 className="text-2xl md:text-3xl font-bold text-white font-serif mb-1">
                    Welcome back, Rahul! 👋
                  </h1>
                  <p className="text-white/70 text-sm">
                    You have <span className="text-amber-300 font-semibold">3 new matches</span> and{" "}
                    <span className="text-amber-300 font-semibold">5 unread messages</span> today.
                  </p>
                </div>
                <Link to="/user/user-matches">
                    <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        className="shrink-0 px-5 py-2.5 bg-white text-red-700 font-semibold text-sm rounded-xl shadow-lg hover:shadow-xl transition-all"
                    >
                        Explore Matches →
                    </motion.button>
                    </Link>
              </div>
            </div>
          </motion.div>

          {/* Main layout: Sidebar + Content */}
          <div className="flex flex-col lg:flex-row gap-7">

            {/* LEFT: My Profile Sidebar */}
            <MyProfileSidebar />

            {/* RIGHT: Main Content */}
            <div className="flex-1 min-w-0">

              {/* Filter Tabs */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-2 mb-6 overflow-x-auto pb-1 scrollbar-hide"
              >
                {filterTabs.map((tab, i) => (
                  <button
                    key={tab}
                    className={`shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${
                      i === 0
                        ? "bg-gradient-to-r from-red-700 to-red-500 text-white shadow-md shadow-red-200"
                        : "bg-white text-gray-600 border border-amber-100 hover:border-red-200 hover:text-red-700"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
                <Link to="/user/user-matches">
                    <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        className="shrink-0 px-5 py-2.5 bg-white text-red-700 font-semibold text-sm rounded-xl shadow-lg hover:shadow-xl transition-all"
                    >
                        Explore Matches →
                    </motion.button>
                    </Link>
              </motion.div>

              {/* Section heading */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 font-serif">Discover Profiles</h2>
                  <p className="text-sm text-gray-500 mt-0.5">Showing {profiles.length} verified profiles for you</p>
                </div>
              </div>

              {/* Profiles Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {profiles.map((profile, i) => (
                  <motion.div
                    key={profile.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                  >
                    <ProfileCard profile={profile} />
                  </motion.div>
                ))}
              </div>

              {/* Suggested Profiles (bottom of main content) */}
              <SuggestedProfiles />
            </div>
          </div>
        </div>
      </div>

      <Sponsors />
      <Footer />
    </>
  );
}