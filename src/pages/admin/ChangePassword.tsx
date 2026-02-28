// import { useState } from "react";

// export default function ChangePassword() {
//   const [currentPassword, setCurrentPassword] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const submit = () => {
//     if (!currentPassword || !newPassword) {
//       alert("All fields required");
//       return;
//     }

//     if (newPassword !== confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }

//     console.log({ currentPassword, newPassword });
//     alert("Password changed successfully");
//   };

//   return (
//     <div>
//       <h2>Change Password</h2>

//       <input
//         type="password"
//         placeholder="Current Password"
//         onChange={(e) => setCurrentPassword(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="New Password"
//         onChange={(e) => setNewPassword(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Confirm Password"
//         onChange={(e) => setConfirmPassword(e.target.value)}
//       />

//       <button onClick={submit}>Update</button>
//     </div>
//   );
// }

import { useState } from "react";
import Header from "../../components/admin/Header";

export default function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submit = () => {
    if (!currentPassword || !newPassword) {
      alert("All fields required");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log({ currentPassword, newPassword });
    alert("Password changed successfully");
  };

  return (
    <div className="flex-1 min-h-screen bg-gray-50">
      <Header title="Change Password" />

      <main className="p-6 flex justify-center">
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-sm border border-gray-100 p-8">

          <h3 className="text-lg font-bold text-gray-800 mb-6">
            Update Your Password
          </h3>

          <div className="space-y-5">
            {/* Current Password */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Current Password
              </label>
              <input
                type="password"
                placeholder="Enter current password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:border-rose-400 focus:bg-white transition-all text-sm"
              />
            </div>

            {/* New Password */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                New Password
              </label>
              <input
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:border-rose-400 focus:bg-white transition-all text-sm"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Confirm New Password
              </label>
              <input
                type="password"
                placeholder="Re-enter new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:border-rose-400 focus:bg-white transition-all text-sm"
              />
            </div>

            {/* Button */}
            <button
              onClick={submit}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-pink-500 text-white font-semibold hover:opacity-90 transition-all shadow-sm"
            >
              Update Password
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}