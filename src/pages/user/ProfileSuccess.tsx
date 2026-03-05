import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import UserNavbar from "../../components/user/UserNavbar";
import Footer from "../../components/user/Footer";

export default function ProfileSuccess() {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center relative"
        style={{ backgroundImage: "url('/profileBackground2.PNG')" }}
      >
        <div className="relative z-20">
          <UserNavbar />
        </div>

        <div className="flex items-center justify-center px-4 py-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-2xl text-center rounded-3xl p-10
            bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-yellow-600 mb-6">
              🎉 Congratulations!
            </h1>

            <p className="text-lg md:text-xl text-gray-800 mb-6 leading-relaxed">
              Your profile has been created successfully.
              <br />
              Welcome to your journey of finding a perfect life partner.
            </p>

            <p className="text-gray-700 mb-8">
              You can now explore verified profiles, send interests,
              and manage your personal dashboard.
            </p>

            <button
              onClick={() => navigate("/user/subscription")}
              className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400
              text-white px-8 py-3 rounded-full text-lg font-semibold shadow-xl
              hover:scale-105 transition"
            >
              Subscribe to Explore Profiles
            </button>
          </motion.div>
        </div>
      </div>

      <Footer />
    </>
  );
}