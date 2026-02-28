import { useState } from "react";
import { Link } from "react-router-dom";

export default function SuperForgotPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!email.trim()) {
      alert("Please enter your email address");
      return;
    }

    console.log("Reset link sent to:", email);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 to-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-gray-100 p-8">

        {/* Logo / Title */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Forgot Password
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Enter your admin email to reset password
          </p>
        </div>

        {!submitted ? (
          <>
            {/* Email Input */}
            <div className="mb-5">
              <label className="text-sm text-gray-600 font-medium">
                Email Address
              </label>
              <input
                type="email"
                placeholder="admin@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-200 transition"
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full py-2.5 bg-rose-600 text-white rounded-xl font-medium hover:bg-rose-700 transition shadow-sm"
            >
              Send Reset Link
            </button>
          </>
        ) : (
          <div className="text-center">
            <div className="text-emerald-600 bg-emerald-50 px-4 py-3 rounded-xl text-sm font-medium">
              Reset link has been sent to your email.
            </div>
          </div>
        )}

        {/* Back to Login */}
        <div className="text-center mt-6">
          <Link
            to="/admin/login"
            className="text-sm text-rose-600 hover:text-rose-700 font-medium transition"
          >
            ← Back to Login
          </Link>
        </div>

      </div>
    </div>
  );
}