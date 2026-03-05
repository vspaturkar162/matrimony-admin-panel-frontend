import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserNavbar from "../../components/user/UserNavbar";
import Footer from "../../components/user/Footer";

import { motion } from "framer-motion";

export default function UserLogin() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        loginData
      );

      localStorage.setItem("token", res.data.token);

      alert("Login Successful");
      navigate("/complete-profile");
    } catch (err: any) {
      alert(err.response?.data?.message || "Login Failed");
    }
  };

  return (
    <>
  {/* Full Background Wrapper */}
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
        className="w-full max-w-2xl rounded-3xl shadow-2xl p-6 sm:p-8
        bg-white/20 backdrop-blur-lg border border-white/30"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-red-800">
          Member Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
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
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            required
          />

          <button
            type="submit"
            className="w-full bg-red-800 text-white py-3 rounded-lg hover:bg-red-900 transition"
          >
            Login
          </button>

          <p className="text-center text-sm text-gray-800 mt-4">
            Forget Password?{" "}
            <a
              href="/admin/forgot-pass"
              className="text-primary hover:underline"
            >
              Click here
            </a>
          </p>
        </form>
      </motion.div>
    </div>
  </div>

  <Footer />
</>

  );
}