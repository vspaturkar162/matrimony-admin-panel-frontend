import UserNavbar from "../../components/user/UserDashboardNavbar";
import Footer from "../../components/user/Footer";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Shortlisted() {
  const shortlisted = [
    { id: 1, name: "Priya Verma", city: "Pune", image: "/profile2.PNG" },
    { id: 2, name: "Sneha Pillai", city: "Bangalore", image: "/profile3.PNG" },
  ];

  return (
    <>
      <UserNavbar />
      <div className="min-h-screen pt-[100px] bg-gradient-to-br from-[#fff8f0] to-[#fef1e6] px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-red-800 mb-8 font-serif">
            ❤️ Your Shortlisted Profiles
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shortlisted.map((profile) => (
              <motion.div
                key={profile.id}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-3xl shadow-xl border border-amber-100 overflow-hidden"
              >
                <img
                  src={profile.image}
                  className="h-64 w-full object-cover"
                  alt={profile.name}
                />
                <div className="p-5 text-center">
                  <h2 className="text-xl font-semibold text-red-700">
                    {profile.name}
                  </h2>
                  <p className="text-gray-500">{profile.city}</p>
                  <button className="mt-4 px-6 py-2 bg-gradient-to-r from-red-700 to-amber-500 text-white rounded-full shadow-md">
                    View Profile
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}