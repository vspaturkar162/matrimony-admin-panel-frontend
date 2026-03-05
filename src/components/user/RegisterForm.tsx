import { useState } from "react";
import axios from "axios";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    registerFor: "",
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/user/register", formData);
    alert("Registered Successfully");
  };

  return (
    <section id="register" className="py-16 bg-gray-100">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-2xl">
        <h3 className="text-3xl font-bold text-center mb-6 text-red-800">
          Create Your Profile
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <select
            name="registerFor"
            required
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
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
            required
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />

          <button className="w-full bg-red-800 text-white py-3 rounded-lg hover:bg-red-900 transition">
            Register Now
          </button>
        </form>
      </div>
    </section>
  );
}