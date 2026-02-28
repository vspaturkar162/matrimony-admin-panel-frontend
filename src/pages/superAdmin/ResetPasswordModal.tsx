// import { useState } from "react";

// interface Props {
//   admin: {
//     id: string;
//     name: string;
//   };
//   onClose: () => void;
// }

// export default function ResetPasswordModal({ admin, onClose }: Props) {
//   const [mode, setMode] = useState<"AUTO" | "MANUAL">("AUTO");
//   const [manualPassword, setManualPassword] = useState("");

//   const handleSubmit = () => {
//     console.log({
//       adminId: admin.id,
//       mode,
//       manualPassword,
//     });

//     alert("Password reset successfully. Admin will be notified.");
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
//       <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-6">
//         <h3 className="text-lg font-bold text-gray-800 mb-4">
//           Reset Password – {admin.name}
//         </h3>

//         <div className="space-y-4">
//           <div>
//             <label className="flex items-center gap-2 text-sm">
//               <input
//                 type="radio"
//                 checked={mode === "AUTO"}
//                 onChange={() => setMode("AUTO")}
//               />
//               Generate Temporary Password
//             </label>
//           </div>

//           <div>
//             <label className="flex items-center gap-2 text-sm">
//               <input
//                 type="radio"
//                 checked={mode === "MANUAL"}
//                 onChange={() => setMode("MANUAL")}
//               />
//               Set Password Manually
//             </label>
//           </div>

//           {mode === "MANUAL" && (
//             <input
//               type="password"
//               placeholder="Enter new password"
//               value={manualPassword}
//               onChange={(e) => setManualPassword(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-200 rounded-xl"
//             />
//           )}

//           <div className="flex justify-end gap-3 pt-4">
//             <button
//               onClick={onClose}
//               className="px-4 py-2 text-gray-600"
//             >
//               Cancel
//             </button>

//             <button
//               onClick={handleSubmit}
//               className="px-4 py-2 bg-gradient-to-r from-rose-600 to-pink-500 text-white rounded-xl"
//             >
//               Confirm Reset
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";

interface Props {
  admin: { id: string; name: string };
  onClose: () => void;
}

export default function ResetPasswordModal({
  admin,
  onClose,
}: Props) {
  const [mode, setMode] = useState<"AUTO" | "MANUAL">("AUTO");
  const [newPassword, setNewPassword] = useState("");

  const handleReset = () => {
    console.log({
      adminId: admin.id,
      mode,
      newPassword,
      forcePasswordChange: true,
    });

    alert(
      "Password reset successfully.\nAdmin will receive notification.\nNext login → Forced password change."
    );

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">
          Reset Password – {admin.name}
        </h3>

        <div className="space-y-4">
          <label className="flex items-center gap-2 text-sm">
            <input
              type="radio"
              checked={mode === "AUTO"}
              onChange={() => setMode("AUTO")}
            />
            Generate Temporary Password
          </label>

          <label className="flex items-center gap-2 text-sm">
            <input
              type="radio"
              checked={mode === "MANUAL"}
              onChange={() => setMode("MANUAL")}
            />
            Set New Password Manually
          </label>

          {mode === "MANUAL" && (
            <input
              type="password"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-200 rounded-xl"
            />
          )}

          <div className="flex justify-end gap-3 pt-4">
            <button
              onClick={onClose}
              className="text-gray-600"
            >
              Cancel
            </button>

            <button
              onClick={handleReset}
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl"
            >
              Confirm Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}