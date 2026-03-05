import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import UserNavbar from "../../components/user/UserNavbar";
import Footer from "../../components/user/Footer";

export default function PhysicalLifestyle() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    height: "",
    weight: "",
    bodyType: "",
    complexion: "",
    maritalStatus: "",
    diet: "",
    smoking: "",
    drinking: "",
    hobbies: "",
    interests: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/user/family-details");
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
          Physical Attributes & Lifestyle
        </h2>

        <form onSubmit={handleNext} className="space-y-4">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="height" placeholder="Height (e.g. 5'8')" onChange={handleChange} className="p-2.5 border rounded-lg" />
            <input name="weight" placeholder="Weight (kg)" onChange={handleChange} className="p-2.5 border rounded-lg" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select name="bodyType" onChange={handleChange} className="p-2.5 border rounded-lg">
              <option value="">Body Type</option>
              <option>Slim</option>
              <option>Average</option>
              <option>Athletic</option>
              <option>Heavy</option>
            </select>

            <select name="complexion" onChange={handleChange} className="p-2.5 border rounded-lg">
              <option value="">Complexion</option>
              <option>Fair</option>
              <option>Wheatish</option>
              <option>Dark</option>
            </select>
          </div>

          <select name="maritalStatus" onChange={handleChange} className="p-2.5 border rounded-lg w-full">
            <option value="">Marital Status</option>
            <option>Never Married</option>
            <option>Divorced</option>
            <option>Widowed</option>
          </select>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select name="diet" onChange={handleChange} className="p-2.5 border rounded-lg">
              <option value="">Diet</option>
              <option>Vegetarian</option>
              <option>Non-Vegetarian</option>
              <option>Eggetarian</option>
            </select>

            <select name="smoking" onChange={handleChange} className="p-2.5 border rounded-lg">
              <option value="">Smoking</option>
              <option>No</option>
              <option>Occasionally</option>
              <option>Yes</option>
            </select>
          </div>

          <select name="drinking" onChange={handleChange} className="p-2.5 border rounded-lg w-full">
            <option value="">Drinking</option>
            <option>No</option>
            <option>Occasionally</option>
            <option>Yes</option>
          </select>

          <input name="hobbies" placeholder="Hobbies (e.g. Music, Travel)" onChange={handleChange} className="p-2.5 border rounded-lg w-full" />
          <input name="interests" placeholder="Interests (e.g. Reading, Fitness)" onChange={handleChange} className="p-2.5 border rounded-lg w-full" />

          <button className="w-full bg-gradient-to-r from-red-800 via-red-500 to-red-300 text-white py-3 rounded-full font-semibold shadow-lg">
            Next
          </button>

        </form>
      </motion.div>
    </div>
  </div>

  <Footer />
</>
  );
}