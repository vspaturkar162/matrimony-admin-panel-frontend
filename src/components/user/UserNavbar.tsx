import { useState } from "react";
import { Link } from "react-router-dom";

export default function UserNavbar() {
  const [language, setLanguage] = useState("English");

  return (
    
    // <div className="bg-gradient-to-r from-red-800 via-red-700 to-red-600 text-white px-3 py-2 shadow-lg bg-black/30"
    // style={{ backgroundImage: "url('/usernavbarback.PNG')"}}>
    <nav className="  inset-0 bg-white/30 text-white px-6 py-3 rounded-bl-full rounded-br-full  shadow-lg">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold tracking-wide">🤍 ShubVivah</h1>

        <div className="flex items-center gap-6">
          <select
            className="bg-red-700 px-3 py-1 rounded-md text-sm"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option>English</option>
            <option>Hindi</option>
            <option>Marathi</option>
          </select>

          <Link to="/user/login" className="hover:text-yellow-400 transition">
            Login
          </Link>

          <Link to="/user/help" className="hover:text-yellow-400 transition">
            Help
          </Link>
        </div>
      </div>
    </nav>
    // </div>
  );
}