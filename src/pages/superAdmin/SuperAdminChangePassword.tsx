// import ChangePassword from "../admin/ChangePassword";

// export default function SuperAdminChangePassword() {
//   return <ChangePassword />;
// }

import { useState } from "react";
import SuperAdminLayout from "./SuperAdminLayout";

export default function SuperAdminChangePassword() {
  const [current, setCurrent] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSubmit = () => {
    if (!current || !newPass) return alert("All fields required");
    if (newPass !== confirm) return alert("Passwords do not match");

    console.log({ current, newPass });
    alert("Password updated successfully");
  };

  return (
    <SuperAdminLayout>
      <div className="p-8 flex justify-center">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-800 mb-6">
            Change Password
          </h2>

          <div className="space-y-4">
            <input
              type="password"
              placeholder="Current Password"
              value={current}
              onChange={(e) => setCurrent(e.target.value)}
              className="w-full px-4 py-2 border border-gray-200 rounded-xl"
            />

            <input
              type="password"
              placeholder="New Password"
              value={newPass}
              onChange={(e) => setNewPass(e.target.value)}
              className="w-full px-4 py-2 border border-gray-200 rounded-xl"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-200 rounded-xl"
            />

            <button
              onClick={handleSubmit}
              className="w-full py-2 bg-gradient-to-r from-red-900 to-red-600 text-white rounded-xl"
            >
              Update Password
            </button>
          </div>
        </div>
      </div>
    </SuperAdminLayout>
  );
}