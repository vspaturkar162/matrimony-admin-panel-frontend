// import { useEffect, useState } from "react";
// import Header from "../../../components/admin/Header";

// interface Profile {
//   id: string;
//   name: string;
// }

// export default function SuperRejectedProfiles() {
//   const [profiles, setProfiles] = useState<Profile[]>([]);

//   useEffect(() => {
//     setProfiles([
//       { id: "1", name: "Rejected User 1" },
//       { id: "2", name: "Rejected User 2" },
//     ]);
//   }, []);

//   return (
//     <div className="flex-1 min-h-screen bg-gray-50">
//       <Header title="Rejected Profiles" />

//       <main className="p-6">
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
//           <div className="px-6 py-4 border-b border-gray-50 flex justify-between items-center">
//             <h3 className="font-bold text-gray-800">Rejected Members</h3>

//             <span className="text-sm text-rose-600 bg-rose-50 px-3 py-1 rounded-lg font-medium">
//               {profiles.length} Rejected
//             </span>
//           </div>

//           <div className="divide-y divide-gray-50">
//             {profiles.map((profile) => (
//               <div
//                 key={profile.id}
//                 className="px-6 py-4 flex items-center justify-between hover:bg-rose-50/30 transition-colors"
//               >
//                 <div className="flex items-center gap-3">
//                   <div className="w-9 h-9 rounded-full bg-gradient-to-br from-rose-400 to-pink-300 flex items-center justify-center text-white font-bold text-sm shadow-sm">
//                     {profile.name[0]}
//                   </div>
//                   <p className="font-medium text-gray-800">
//                     {profile.name}
//                   </p>
//                 </div>

//                 <span className="text-xs px-3 py-1 rounded-lg bg-rose-50 text-rose-600 font-semibold">
//                   Rejected
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }


// import { useEffect, useState } from "react";
// import Header from "../../../components/admin/Header";

// interface Profile {
//   id: string;
//   name: string;
// }

// export default function RejectedProfiles() {
//   const [profiles, setProfiles] = useState<Profile[]>([]);

//   useEffect(() => {
//     setProfiles([
//       { id: "1", name: "Rejected User 1" },
//       { id: "2", name: "Rejected User 2" },
//     ]);
//   }, []);

//   return (
//     <div className="flex-1 min-h-screen bg-gray-50">
//       <Header title="Rejected Profiles" />

//       <main className="p-6">
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
//           <div className="px-6 py-4 border-b border-gray-50 flex justify-between items-center">
//             <h3 className="font-bold text-gray-800">Rejected Members</h3>

//             <span className="text-sm text-rose-600 bg-rose-50 px-3 py-1 rounded-lg font-medium">
//               {profiles.length} Rejected
//             </span>
//           </div>

//           <div className="divide-y divide-gray-50">
//             {profiles.map((profile) => (
//               <div
//                 key={profile.id}
//                 className="px-6 py-4 flex items-center justify-between hover:bg-rose-50/30 transition-colors"
//               >
//                 <div className="flex items-center gap-3">
//                   <div className="w-9 h-9 rounded-full bg-gradient-to-br from-rose-400 to-pink-300 flex items-center justify-center text-white font-bold text-sm shadow-sm">
//                     {profile.name[0]}
//                   </div>
//                   <p className="font-medium text-gray-800">
//                     {profile.name}
//                   </p>
//                 </div>

//                 <span className="text-xs px-3 py-1 rounded-lg bg-rose-50 text-rose-600 font-semibold">
//                   Rejected
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import Header from "../../../components/admin/Header";

interface Profile {
  id: string;
  memberId: string;
  name: string;
  image: string;
  followers: number;
  reported: number;
  memberSince: string;
}

export default function SuperRejectedProfiles() {
  const [profiles, setProfiles] = useState<Profile[]>([]);

  useEffect(() => {
    setProfiles([
      {
        id: "1",
        memberId: "EBD3DC335",
        name: "Rejected User 1",
        image: "https://randomuser.me/api/portraits/men/45.jpg",
        followers: 0,
        reported: 2,
        memberSince: "25/11/2024 01:35 PM",
      },
      {
        id: "2",
        memberId: "36DAB56033",
        name: "Rejected User 2",
        image: "https://randomuser.me/api/portraits/women/22.jpg",
        followers: 0,
        reported: 3,
        memberSince: "24/11/2024 09:20 AM",
      },
    ]);
  }, []);

  return (
    <div className="flex-1 min-h-screen bg-gray-50">
      <Header title="Rejected Members" />

      <main className="p-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

          {/* Top */}
          <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
            <h3 className="font-bold text-gray-800 text-lg">
              Rejected Members List
            </h3>

            <span className="text-sm text-rose-600 bg-rose-50 px-3 py-1 rounded-lg font-medium">
              {profiles.length} Rejected
            </span>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-left text-xs uppercase tracking-wider text-gray-500">
                  <th className="px-6 py-3">User Image</th>
                  <th className="px-6 py-3">Member ID</th>
                  <th className="px-6 py-3">Name</th>
                  <th className="px-6 py-3">Approval Status</th>
                  <th className="px-6 py-3">Followers</th>
                  <th className="px-6 py-3">Reported</th>
                  <th className="px-6 py-3">Member Since</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-50">
                {profiles.map((profile) => (
                  <tr
                    key={profile.id}
                    className="hover:bg-rose-50/40 transition"
                  >
                    <td className="px-6 py-4">
                      <img
                        src={profile.image}
                        alt={profile.name}
                        className="w-10 h-10 rounded-full object-cover border"
                      />
                    </td>

                    <td className="px-6 py-4 font-medium text-gray-700">
                      {profile.memberId}
                    </td>

                    <td className="px-6 py-4 font-semibold text-gray-800">
                      {profile.name}
                    </td>

                    <td className="px-6 py-4">
                      <span className="px-3 py-1 text-xs rounded-full bg-rose-100 text-rose-600 font-semibold">
                        Rejected
                      </span>
                    </td>

                    <td className="px-6 py-4 text-gray-600">
                      {profile.followers}
                    </td>

                    <td className="px-6 py-4 text-gray-600">
                      {profile.reported}
                    </td>

                    <td className="px-6 py-4 text-gray-500">
                      {profile.memberSince}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </main>
    </div>
  );
}