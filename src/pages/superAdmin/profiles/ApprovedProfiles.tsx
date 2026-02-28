// import { useEffect, useState } from "react";
// import Header from "../../../components/admin/Header";

// interface Profile {
//   id: string;
//   name: string;
// }

// export default function SuperApprovedProfiles() {
//   const [profiles, setProfiles] = useState<Profile[]>([]);

//   useEffect(() => {
//     setProfiles([
//       { id: "1", name: "Rahul Sharma" },
//       { id: "2", name: "Sneha Patil" },
//     ]);
//   }, []);

//   return (
//     <div className="flex-1 min-h-screen bg-gray-50">
//       <Header title="Approved Profiles" />

//       <main className="p-6">
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
//           <div className="px-6 py-4 border-b border-gray-50 flex justify-between items-center">
//             <h3 className="font-bold text-gray-800">Approved Members</h3>
//             <span className="text-sm text-emerald-600 bg-emerald-50 px-3 py-1 rounded-lg font-medium">
//               {profiles.length} Approved
//             </span>
//           </div>

//           <div className="divide-y divide-gray-50">
//             {profiles.map((profile) => (
//               <div
//                 key={profile.id}
//                 className="px-6 py-4 flex items-center justify-between hover:bg-emerald-50/30 transition-colors"
//               >
//                 <div className="flex items-center gap-3">
//                   <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-300 flex items-center justify-center text-white font-bold text-sm shadow-sm">
//                     {profile.name[0]}
//                   </div>
//                   <p className="font-medium text-gray-800">
//                     {profile.name}
//                   </p>
//                 </div>

//                 <span className="text-xs px-3 py-1 rounded-lg bg-emerald-50 text-emerald-600 font-semibold">
//                   Active
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

// export default function ApprovedProfiles() {
//   const [profiles, setProfiles] = useState<Profile[]>([]);

//   useEffect(() => {
//     setProfiles([
//       { id: "1", name: "Rahul Sharma" },
//       { id: "2", name: "Sneha Patil" },
//     ]);
//   }, []);

//   return (
//     <div className="flex-1 min-h-screen bg-gray-50">
//       <Header title="Approved Profiles" />

//       <main className="p-6">
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
//           <div className="px-6 py-4 border-b border-gray-50 flex justify-between items-center">
//             <h3 className="font-bold text-gray-800">Approved Members</h3>
//             <span className="text-sm text-emerald-600 bg-emerald-50 px-3 py-1 rounded-lg font-medium">
//               {profiles.length} Approved
//             </span>
//           </div>

//           <div className="divide-y divide-gray-50">
//             {profiles.map((profile) => (
//               <div
//                 key={profile.id}
//                 className="px-6 py-4 flex items-center justify-between hover:bg-emerald-50/30 transition-colors"
//               >
//                 <div className="flex items-center gap-3">
//                   <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-300 flex items-center justify-center text-white font-bold text-sm shadow-sm">
//                     {profile.name[0]}
//                   </div>
//                   <p className="font-medium text-gray-800">
//                     {profile.name}
//                   </p>
//                 </div>

//                 <span className="text-xs px-3 py-1 rounded-lg bg-emerald-50 text-emerald-600 font-semibold">
//                   Active
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
  approvalStatus: "Approved" | "Pending" | "Rejected";
  memberStatus: "Active" | "Suspended" | "Married";
}

export default function SuperApprovedProfiles() {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const handleMarkMarried = (id: string) => {
  setProfiles((prev) =>
    prev.map((profile) =>
      profile.id === id
        ? { ...profile, memberStatus: "Married" }
        : profile
    )
  );
};

  useEffect(() => {
    setProfiles([
      {
        id: "1",
        memberId: "E22B506C57",
        name: "Rahul Sharma",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        followers: 12,
        reported: 0,
        memberSince: "28/11/2024 10:45 AM",
        approvalStatus: "Approved",
        memberStatus: "Active",
      },
      {
        id: "2",
        memberId: "8FE89D7F60",
        name: "Sneha Patil",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        followers: 5,
        reported: 1,
        memberSince: "27/11/2024 09:10 AM",
        approvalStatus: "Approved",
        memberStatus: "Active",
      },
    ]);
  }, []);

  return (
    <div className="flex-1 min-h-screen bg-gray-50">
      <Header title="Approved Members" />

      <main className="p-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

          {/* Top Section */}
          <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
            <h3 className="font-bold text-gray-800 text-lg">
              Approved Members List
            </h3>

            <div className="flex items-center gap-4">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-200 transition"
              />
            </div>
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
                  <th className="px-6 py-3">Member Status</th>
                  <th className="px-6 py-3 text-center">Options</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-50">
                {profiles
                  .filter((profile) => profile.memberStatus !== "Married")
                  .map((profile) => (
                  <tr
                    key={profile.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    {/* Image */}
                    <td className="px-6 py-4">
                      <img
                        src={profile.image}
                        alt={profile.name}
                        className="w-10 h-10 rounded-full object-cover border"
                      />
                    </td>

                    {/* Member ID */}
                    <td className="px-6 py-4 font-medium text-gray-700">
                      {profile.memberId}
                    </td>

                    {/* Name */}
                    <td className="px-6 py-4 text-gray-800 font-semibold">
                      {profile.name}
                    </td>

                    {/* Approval */}
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 text-xs rounded-full bg-emerald-100 text-emerald-700 font-semibold">
                        {profile.approvalStatus}
                      </span>
                    </td>

                    {/* Followers */}
                    <td className="px-6 py-4 text-gray-600">
                      {profile.followers}
                    </td>

                    {/* Reported */}
                    <td className="px-6 py-4 text-gray-600">
                      {profile.reported}
                    </td>

                    {/* Member Since */}
                    <td className="px-6 py-4 text-gray-500">
                      {profile.memberSince}
                    </td>

                    {/* Status */}
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700 font-semibold">
                        {profile.memberStatus}
                      </span>
                    </td>

                    {/* Options */}
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition text-xs">
                          👁
                        </button>
                        <button className="w-8 h-8 bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-100 transition text-xs">
                          ✏
                        </button>
                        <button
                          onClick={() => handleMarkMarried(profile.id)}
                          className="w-8 h-8 bg-violet-50 text-violet-600 rounded-lg hover:bg-violet-100 transition text-xs"
                        >
                          💍
                        </button>
                        <button className="w-8 h-8 bg-rose-50 text-rose-600 rounded-lg hover:bg-rose-100 transition text-xs">
                          🗑
                        </button>
                      </div>
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