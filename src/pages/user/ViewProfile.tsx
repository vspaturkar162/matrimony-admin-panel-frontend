import { useParams } from "react-router-dom";
import UserNavbar from "../../components/user/UserDashboardNavbar";
import Footer from "../../components/user/Footer";

export default function ViewProfile() {
  const { id } = useParams();

  return (
    <>
      <UserNavbar />
      <div className="min-h-screen pt-[100px] px-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-red-700 mb-4">
          Profile Details
        </h1>
        <p className="text-gray-600">Viewing profile ID: {id}</p>
      </div>
      <Footer />
    </>
  );
}

// import { useParams } from "react-router-dom";
// import UserNavbar from "../../components/user/UserDashboardNavbar";
// import Footer from "../../components/user/Footer";
// import { Crown, Heart, MessageCircle } from "lucide-react";
// import { motion } from "framer-motion";

// export default function ViewProfile() {
//   const { id } = useParams();

//   // 🔥 SAME DATA YOU USED IN DASHBOARD
//   const profiles = [
//     {
//       id: 1,
//       firstName: "Priya",
//       lastName: "Verma",
//       height: "5'5\"",
//       maritalStatus: "Never Married",
//       country: "India",
//       image: "/profile2.PNG",
//       about: "Doctor who values family and culture.",
//     },
//     {
//       id: 2,
//       firstName: "Sneha",
//       lastName: "Pillai",
//       height: "5'4\"",
//       maritalStatus: "Never Married",
//       country: "India",
//       image: "/profile3.PNG",
//       about: "Creative designer with modern outlook.",
//     },
//     {
//       id: 3,
//       firstName: "Meera",
//       lastName: "Iyer",
//       height: "5'6\"",
//       maritalStatus: "Never Married",
//       country: "India",
//       image: "/profile4.PNG",
//       about: "Lawyer with traditional values.",
//     },
//   ];

//   // 🔥 Convert URL param to number
//   const profile = profiles.find((p) => p.id === Number(id));

//   if (!profile) {
//     return (
//       <>
//         <UserNavbar />
//         <div className="min-h-screen pt-[120px] text-center">
//           <h2 className="text-2xl font-bold text-red-700">
//             Profile Not Found
//           </h2>
//         </div>
//         <Footer />
//       </>
//     );
//   }

//   return (
//     <>
//       <UserNavbar />

//       <div className="min-h-screen pt-[100px] bg-gradient-to-br from-[#fff8f0] via-[#fdf6ee] to-[#fef0e6] px-6 pb-16">
//         <div className="max-w-5xl mx-auto">

//           {/* HEADER */}
//           <div className="bg-white p-8 rounded-3xl shadow-2xl border border-amber-100">
//             <div className="flex flex-col md:flex-row items-center gap-8">
//               <img
//                 src={profile.image}
//                 alt="Profile"
//                 className="w-44 h-44 rounded-3xl object-cover border-4 border-amber-300 shadow-lg"
//               />

//               <div className="flex-1 text-center md:text-left">
//                 <h1 className="text-3xl font-bold text-red-800 font-serif">
//                   {profile.firstName} {profile.lastName}
//                 </h1>

//                 <p className="text-gray-500 mt-2">
//                   {profile.height} • {profile.maritalStatus} • {profile.country}
//                 </p>

//                 <span className="inline-flex items-center gap-1 mt-3 bg-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-sm font-medium border border-amber-200">
//                   <Crown size={14} /> Verified Profile
//                 </span>

//                 {/* Buttons */}
//                 <div className="flex gap-4 mt-6 justify-center md:justify-start">
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     className="px-6 py-2 bg-gradient-to-r from-red-700 to-amber-500 text-white rounded-full shadow-lg flex items-center gap-2"
//                   >
//                     <Heart size={16} /> Shortlist
//                   </motion.button>

//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     className="px-6 py-2 border border-red-600 text-red-700 rounded-full flex items-center gap-2 bg-white hover:bg-red-50"
//                   >
//                     <MessageCircle size={16} /> Send Interest
//                   </motion.button>
//                 </div>

//                 <p className="mt-6 text-gray-600 leading-relaxed">
//                   {profile.about}
//                 </p>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }