import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import UserNavbar from "../../components/user/UserNavbar";
import Footer from "../../components/user/Footer";

export default function FamilyDetails() {
  const navigate = useNavigate();

  const [family, setFamily] = useState({
    fatherName: "",
    fatherOccupation: "",
    motherName: "",
    motherOccupation: "",
    familyType: "",
    familyStatus: "",
    brothers: "",
    sisters: "",
    familyValues: "",
    nativePlace: "",
    familyIncome: "",
    propertyDetails: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFamily({ ...family, [e.target.name]: e.target.value });
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/user/verification");
  };

  return (
    <>
  <div
    className="min-h-screen bg-cover bg-center relative"
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
        className="relative z-10 w-full max-w-2xl rounded-3xl shadow-2xl p-6 bg-white/20 backdrop-blur-lg border border-white/30"
      >
        <h2 className="text-3xl font-bold text-center text-red-500 mb-6">
          Family Details
        </h2>

        <form onSubmit={handleNext} className="space-y-4">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="fatherName" placeholder="Father's Name" onChange={handleChange} className="p-2.5 border rounded-lg" />
            <input name="fatherOccupation" placeholder="Father's Occupation" onChange={handleChange} className="p-2.5 border rounded-lg" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="motherName" placeholder="Mother's Name" onChange={handleChange} className="p-2.5 border rounded-lg" />
            <input name="motherOccupation" placeholder="Mother's Occupation" onChange={handleChange} className="p-2.5 border rounded-lg" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select name="familyType" onChange={handleChange} className="p-2.5 border rounded-lg">
              <option value="">Family Type</option>
              <option>Joint</option>
              <option>Nuclear</option>
            </select>

            <select name="familyStatus" onChange={handleChange} className="p-2.5 border rounded-lg">
              <option value="">Family Status</option>
              <option>Middle Class</option>
              <option>Upper Middle Class</option>
              <option>Affluent</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="number" name="brothers" placeholder="No. of Brothers" onChange={handleChange} className="p-2.5 border rounded-lg" />
            <input type="number" name="sisters" placeholder="No. of Sisters" onChange={handleChange} className="p-2.5 border rounded-lg" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select name="familyValues" onChange={handleChange} className="p-2.5 border rounded-lg w-full">
            <option value="">Family Values</option>
            <option>Traditional</option>
            <option>Moderate</option>
            <option>Liberal</option>
          </select>
          
          <input name="nativePlace" placeholder="Native Place" onChange={handleChange} className="p-2.5 border rounded-lg w-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="familyIncome" placeholder="Annual Family Income" onChange={handleChange} className="p-2.5 border rounded-lg w-full" />

          <input name="propertyDetails" placeholder="Property Details (Optional)" onChange={handleChange} className="p-2.5 border rounded-lg w-full" />
          </div>
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