import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

interface HelpInfo {
  email: string;
  phone: string;
  workingHours: string;
}

export default function Help() {
  const [helpInfo, setHelpInfo] = useState<HelpInfo | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const fetchHelpInfo = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/help");
        setHelpInfo(res.data);
      } catch (error) {
        console.error("Error fetching help info");
      }
    };

    fetchHelpInfo();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/help",
        formData
      );

      alert(res.data.message);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Failed to send request");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff8f0] to-[#fdf1e6] py-16 px-6">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12"
      >

        {/* Left Side - Contact Info */}
        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold text-red-800 mb-6">
            Customer Support
          </h2>

          {helpInfo && (
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>Email:</strong> {helpInfo.email}
              </p>
              <p>
                <strong>Phone:</strong> {helpInfo.phone}
              </p>
              <p>
                <strong>Working Hours:</strong> {helpInfo.workingHours}
              </p>
            </div>
          )}

          <div className="mt-6 text-sm text-gray-500">
            Our team is here to assist you with any questions regarding
            registration, profile creation, or account issues.
          </div>
        </div>

        {/* Right Side - Help Form */}
        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold text-red-800 mb-6">
            Send Us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-400"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-400"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-400"
              required
            />

            <button
              type="submit"
              className="w-full bg-red-800 text-white py-3 rounded-lg hover:bg-red-900 transition"
            >
              Submit Request
            </button>

          </form>
        </div>
      </motion.div>
    </div>
  );
}