import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function SuperAdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    // TEMP: mock authentication
    if (email === "superadmin@vivah.com" && password === "super123") {
      login({
        id: "super-1",
        role: "SUPER_ADMIN",
        forcePasswordChange: false,
      });

      navigate("/super-admin");
    } else {
      alert("Invalid Super Admin credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-no-repeat bg-cover bg-center"
    style={{ backgroundImage: "url('/backgroundLogin.png')" }}>
      <div className=" from-gray-950 via-red-950 to-red-900 border-l-fuchsia-700 p-8 rounded-xl shadow-xl w-96">
        <img
          src="/logo1.png"
          alt="Happy Hearts Logo"
          className="mx-auto w-10 h-20 object-contain mb-0"
        />

        <h2 className=" font-bold text-center text-primary mb-6">
          HAPPY HEARTS MATRIMONY
        </h2>
        <h4 className="text-2xl font-bold text-center text-white mb-6">
          Super Admin Login
        </h4>


        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-200 rounded-xl"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-200 rounded-xl"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleLogin}
            className="w-full bg-primary text-white py-2 rounded-lg hover:bg-secondary transition"
          >
            Login
          </button>
          <p className="text-center text-sm text-gray-300 mt-4">
            Forget Password? <a href="#" className="text-primary hover:underline">Click here</a>
          </p>
        </div>
      </div>
    </div>
  );
}