// import { useState } from "react";
// import Header from "../../components/admin/Header";
// import ResetPasswordModal from "./ResetPasswordModal";

// interface Admin {
//   id: string;
//   name: string;
//   email: string;
// }

// export default function AdminList() {
//   const [admins] = useState<Admin[]>([
//     { id: "1", name: "Admin One", email: "admin1@vivah.com" },
//     { id: "2", name: "Admin Two", email: "admin2@vivah.com" },
//   ]);

//   const [selectedAdmin, setSelectedAdmin] = useState<Admin | null>(null);

//   return (
//     <div className="flex-1 min-h-screen bg-gray-50">
//       <Header title="Admin List" />

//       <main className="p-6">
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
//           {admins.map((admin) => (
//             <div
//               key={admin.id}
//               className="px-6 py-4 flex justify-between items-center border-b last:border-none"
//             >
//               <div>
//                 <p className="font-medium text-gray-800">{admin.name}</p>
//                 <p className="text-sm text-gray-500">{admin.email}</p>
//               </div>

//               <button
//                 onClick={() => setSelectedAdmin(admin)}
//                 className="px-4 py-1.5 bg-rose-50 text-rose-600 rounded-lg text-sm font-medium hover:bg-rose-100 transition"
//               >
//                 Reset Password
//               </button>
//             </div>
//           ))}
//         </div>
//       </main>

//       {selectedAdmin && (
//         <ResetPasswordModal
//           admin={selectedAdmin}
//           onClose={() => setSelectedAdmin(null)}
//         />
//       )}
//     </div>
//   );
// }

import { useState } from "react";
import SuperAdminLayout from "./SuperAdminLayout";
import ResetPasswordModal from "./ResetPasswordModal";

interface Admin {
  id: string;
  name: string;
  email: string;
}

export default function AdminList() {
  const [admins] = useState<Admin[]>([
    { id: "1", name: "Admin One", email: "admin1@vivah.com" },
    { id: "2", name: "Admin Two", email: "admin2@vivah.com" },
  ]);

  const [selected, setSelected] = useState<Admin | null>(null);

  return (
    <SuperAdminLayout>
      <div className="p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-6">
          Admin List
        </h2>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
          {admins.map((admin) => (
            <div
              key={admin.id}
              className="flex justify-between items-center p-5 border-b last:border-none"
            >
              <div>
                <p className="font-medium text-gray-800">
                  {admin.name}
                </p>
                <p className="text-sm text-gray-500">
                  {admin.email}
                </p>
              </div>

              <button
                onClick={() => setSelected(admin)}
                className="px-4 py-2 bg-red-50 text-red-600 rounded-xl text-sm font-medium hover:bg-indigo-100 transition"
              >
                Reset Password
              </button>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <ResetPasswordModal
          admin={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </SuperAdminLayout>
  );
}