import { useState } from "react";
import { motion } from "framer-motion";
import UserNavbar from "../../components/user/UserNavbar";
import Footer from "../../components/user/Footer";
import { useNavigate } from "react-router-dom";
export default function Verification() {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [aadhaar, setAadhaar] = useState("");
  const [aadhaarFile, setAadhaarFile] = useState<File | null>(null);
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/user/profile-success");
  };

  return (
    <>
  <div
    className="min-h-screen bg-cover bg-center relative"
    style={{ backgroundImage: "url('/profileBackground2.PNG')" }}
  >
    {/* Navbar */}
    <div className="relative z-20">
      <UserNavbar />
    </div>

    {/* Centered Form */}
    <div className="flex items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-2xl rounded-3xl shadow-2xl p-6
        bg-white/20 backdrop-blur-lg border border-white/30"
      >
        <h2 className="text-3xl font-bold text-center text-red-500 mb-6">
          Mobile & Aadhaar Verification
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            placeholder="Enter Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="p-2.5 border rounded-lg w-full"
            required
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="p-2.5 border rounded-lg"
            />
            <button
              type="button"
              className="bg-red-600 text-white rounded-lg px-4 py-2"
            >
              Send OTP
            </button>
          </div>

          <input
            type="text"
            placeholder="Enter Aadhaar Number"
            value={aadhaar}
            onChange={(e) => setAadhaar(e.target.value)}
            className="p-2.5 border rounded-lg w-full"
            required
          />

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Upload Aadhaar Card
            </label>
            <input
              type="file"
              onChange={(e) =>
                setAadhaarFile(e.target.files ? e.target.files[0] : null)
              }
              className="w-full border p-2 rounded-lg bg-gray-50"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-800 via-red-500 to-red-300 text-white py-3 rounded-full font-semibold shadow-lg"
          >
            Submit Verification
          </button>

        </form>
      </motion.div>
    </div>
  </div>

  <Footer />
</>
  );
}