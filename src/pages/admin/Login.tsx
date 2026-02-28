// import { useState } from "react";
// import { useAuth } from "../../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = () => {
//     // Replace with API
//     const mockResponse = {
//       id: "1",
//       role: "SUPER_ADMIN",
//       forcePasswordChange: false,
//     };

//     login(mockResponse);

//     if (mockResponse.forcePasswordChange) {
//       navigate("/admin/change-password");
//     } else {
//       navigate("/admin/dashboard");
//     }
//   };

//   return (
//     <div>
//       <h2>Admin Login</h2>
//       <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
//       <input
//         placeholder="Password"
//         type="password"
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// }



import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const submit = () => {
    if (!email || !password) {
      alert("Email & password required");
      return;
    }

    login({
      id: "1",
      role: "SUPER_ADMIN",
      forcePasswordChange: false,
    });

    navigate("/admin/dashboard");
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
          Admin Login
        </h4>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={submit}
          className="w-full bg-primary text-white py-2 rounded-lg hover:bg-secondary transition"
        >
          Login
        </button>
        <p className="text-center text-sm text-gray-300 mt-4">
          Forget Password? <a href="/admin/forgot-pass" className="text-primary hover:underline">Click here</a>
        </p>
      </div>
    </div>
  );
}






// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const submit = () => {
//     if (!email || !password) {
//       alert("Email & password required");
//       return;
//     }

//     login({
//       id: "1",
//       role: "SUPER_ADMIN",
//       forcePasswordChange: false,
//     });

//     navigate("/admin/dashboard");
//   };

//   return (
//     <div>
//       <h2>Admin Login</h2>

//       <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
//       <input
//         type="password"
//         placeholder="Password"
//         onChange={(e) => setPassword(e.target.value)}
//       />

//       <button onClick={submit}>Login</button>
//     </div>
//   );
// }