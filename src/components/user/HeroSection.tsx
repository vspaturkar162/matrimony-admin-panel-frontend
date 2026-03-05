
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserNavbar from "./UserNavbar";

const images = ["/hero.PNG", "/heroSemi.PNG", "/hero2.PNG", "/hero3.PNG", "/hero4.PNG"];


export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [formData, setFormData] = useState({
    registerFor: "",
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );

      alert(res.data.message);
      navigate("/complete-profile");
    } catch (err: any) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    
    // <section className="relative h-[90vh] overflow-hidden">
    <section className="relative min-h-[90vh] md:h-[90vh] overflow-hidden">
      
      {/* Animated Background */}
      {images.map((img, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{
            opacity: index === current ? 1 : 0,
            scale: index === current ? 1 : 1.1,
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"><UserNavbar/></div>

      {/* Floating Side Images */}
      <motion.img
        src="/heroSemi.PNG"
        alt="hero img"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="hidden md:block absolute left-10 bottom-2 w-52 rounded-2xl shadow-2xl border-4 border-white"
      />

      {/* <motion.img
        src="/download.jpg"
        alt="hero img"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="hidden md:block absolute right-10 top-20 w-52 rounded-2xl shadow-2xl border-4 border-white"
      /> */}

      {/* Hero Content */}
      {/* <div className="relative z-10 flex items-center justify-between h-full max-w-7xl mx-auto px-6"> */}
      {/* <div className="relative z-10 top-24 left-10 flex justify-between h-full max-w-7xl mx-auto px-6"> */}
      <div className="relative z-10 md:top-24 md:left-10 flex flex-col md:flex-row justify-between items-start md:items-center h-full max-w-7xl mx-auto px-6 pt-28 md:pt-0 gap-10">

        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          // className="text-white max-w-xl space-y-5 "
          className="text-white max-w-xl space-y-5 md:ml-56"
        >
          <h1 className="text-4xl font-bold leading-tight">
            Happy Hearts Matrimony
          </h1>

          <p className="text-lg text-gray-200">
            Where Traditions Meet Technology.  
            Find your perfect life partner with trust, privacy and love.
          </p>
          <p className="text-sm text-gray-200">
            Thousands of verified profiles. Secure platform. Community trusted.
          </p>

        </motion.div>

        {/* Floating Registration Form */}
        <div className="flex justify-end items-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          // className="hidden md:block from-rose-550 to-rose-200 p-8 rounded-2xl shadow-2xl w-[380px]"
          className="block md:block from-rose-550 to-rose-200 p-8 rounded-2xl shadow-2xl w-full md:w-[380px]"
        >
          <h2 className="text-2xl font-bold text-center mb-6 text-red-500">
            Create Free Profile
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <select
              className="w-full p-3 border rounded-lg"
              name="registerFor"
              value={formData.registerFor}
              onChange={handleChange}
              required
            >
              <option value="">Registering For</option>
              <option>Myself</option>
              <option>Son</option>
              <option>Daughter</option>
              <option>Brother</option>
              <option>Sister</option>
            </select>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            />

            <input
              type="password"
              name="name"
              placeholder="Password"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-800 via-red-500 to-red-300 text-white py-3 rounded-lg hover:bg-red-900 transition"
            >
              Register Now
            </button>
          </form>
        </motion.div>
        </div>
      </div>
    </section>

  );
}