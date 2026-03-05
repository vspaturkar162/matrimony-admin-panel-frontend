

import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import UserNavbar from "../../components/user/UserNavbar";
import Footer from "../../components/user/Footer";

export default function CompleteProfile() {
  const [profile, setProfile] = useState({
    profileCreatedBy: "",
    gender: "",
    firstName: "",
    lastName: "",
    day: "",
    month: "",
    year: "",
    religion: "",
    religionFirst: "",
    motherTongue: "",
    country: "",
    phone: "",
    email: "",
    abouteMe: "",
  });

  const [, setPhoto] = useState<File | null>(null);
  const [accepted, setAccepted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  >
  ) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!accepted) {
      alert("Please accept terms & conditions");
      return;
    }

    try {
      await axios.post(
        "http://localhost:5000/api/auth/complete-profile",
        profile
      );

      alert("Profile Completed Successfully");
    } catch (err) {
      alert("Error saving profile");
    }
  };

  return (

    <>
  <div
    className="min-h-screen bg-gradient-to-br bg-cover bg-center relative"
    style={{ backgroundImage: "url('/profileBackground2.PNG')" }}
  >
    {/* Navbar at Top */}
    <div className="relative z-20">
      <UserNavbar />
    </div>

    {/* Centered Form Section */}
    <div className="flex items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-2xl rounded-3xl shadow-2xl p-4 sm:p-6
        bg-white/20 backdrop-blur-lg border border-white/30"
      >
        <h2 className="text-4xl font-bold text-center text-red-500 mb-10 tracking-wide">
          Complete Your Profile
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">

          {/* First & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="Enter First Name"
              onChange={handleChange}
              className="p-2.5 border rounded-lg"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Enter Last Name"
              onChange={handleChange}
              className="p-2.5 border rounded-lg"
              required
            />
          </div>

          {/* DOB */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <select name="day" onChange={handleChange} className="p-2.5 border rounded-lg">
              <option value="">Day</option>
              {[...Array(31)].map((_, i) => (
                <option key={i + 1}>{i + 1}</option>
              ))}
            </select>

            <select name="month" onChange={handleChange} className="p-2.5 border rounded-lg">
              <option value="">Month</option>
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>
            </select>

            <select name="year" onChange={handleChange} className="p-2.5 border rounded-lg">
              <option value="">Year</option>
              {[...Array(40)].map((_, i) => (
                <option key={1985 + i}>{1985 + i}</option>
              ))}
            </select>
          </div>

          {/* Gender & Education */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              name="gender"
              onChange={handleChange}
              className="p-2.5 border rounded-lg"
              required
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>

            <input
              type="text"
              placeholder="Education"
              name="education"
              onChange={handleChange}
              className="p-2.5 border rounded-lg"
              required
            />
          </div>

          {/* Location & Occupation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="Location"
              placeholder="Enter Your Location"
              onChange={handleChange}
              className="p-2.5 border rounded-lg"
            />
            <input
              type="text"
              name="Occupation"
              placeholder="Enter Your Occupation"
              onChange={handleChange}
              className="p-2.5 border rounded-lg"
            />
          </div>

          {/* Religion & Mother Tongue */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              name="religion"
              onChange={handleChange}
              className="p-2.5 border rounded-lg"
            >
              <option value="">Select Your Religion</option>
              <option>Hindu</option>
              <option>Muslim</option>
              <option>Christian</option>
              <option>Sikh</option>
              <option>Jain</option>
            </select>

            <select
              name="motherTongue"
              onChange={handleChange}
              className="p-2.5 border rounded-lg"
            >
              <option value="">Mother Tongue</option>
              <option>Hindi</option>
              <option>Marathi</option>
              <option>Gujarati</option>
              <option>English</option>
            </select>
          </div>

          {/* Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="phone"
              placeholder="Enter Your 10 Digit No"
              onChange={handleChange}
              className="p-2.5 border rounded-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email Id"
              onChange={handleChange}
              className="p-2.5 border rounded-lg"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Few Words About Myself
            </label>
            <textarea
              
              name="aboutMe"
              placeholder="Write something about yourself..."
              onChange={handleChange}
              rows={4}
              className="w-full p-3 border rounded-lg resize-none"
            />
          </div>
          {/* Upload Photo */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Upload Profile Photo
            </label>
            <input
              type="file"
              onChange={(e) =>
                setPhoto(e.target.files ? e.target.files[0] : null)
              }
              className="w-full border p-2 rounded-lg bg-gray-50"
            />
          </div>

          {/* Terms */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={accepted}
              onChange={() => setAccepted(!accepted)}
            />
            <span className="text-sm">
              I accept <span className="font-semibold">terms & conditions</span> and{" "}
              <span className="font-semibold">privacy policy</span>.
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-800 via-red-500 to-red-300 text-white py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition shadow-lg"
          >
            Register Now
          </button>

        </form>
      </motion.div>
    </div>
  </div>

  <Footer />
</>
  );
}