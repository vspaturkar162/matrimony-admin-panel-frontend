
// import { useEffect, useState } from "react";
// import Header from "../../../components/admin/Header";

// interface Profile {
//   id: string;
//   name: string;
// }

// export default function PendingProfiles() {
//   const [profiles, setProfiles] = useState<Profile[]>([]);

//   useEffect(() => {
//     setProfiles([
//       { id: "1", name: "Amit Kulkarni" },
//       { id: "2", name: "Priya Deshmukh" },
//     ]);
//   }, []);

//   const handleApprove = (id: string) => {
//     console.log("Approved:", id);
//   };

//   const handleReject = (id: string) => {
//     console.log("Rejected:", id);
//   };

//   return (
//     <div className="flex-1 min-h-screen bg-gray-50">
//       <Header title="Pending Profiles" />

//       <main className="p-6">
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
//           <div className="px-6 py-4 border-b border-gray-50 flex justify-between items-center">
//             <h3 className="font-bold text-gray-800">Pending Approvals</h3>
//             <span className="text-sm text-amber-600 bg-amber-50 px-3 py-1 rounded-lg font-medium">
//               {profiles.length} Pending
//             </span>
//           </div>

//           <div className="divide-y divide-gray-50">
//             {profiles.map((profile) => (
//               <div
//                 key={profile.id}
//                 className="px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4 hover:bg-amber-50/30 transition-colors"
//               >
//                 <div className="flex items-center gap-3">
//                   <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-yellow-300 flex items-center justify-center text-white font-bold text-sm shadow-sm">
//                     {profile.name[0]}
//                   </div>
//                   <p className="font-medium text-gray-800">
//                     {profile.name}
//                   </p>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <button
//                     onClick={() => handleApprove(profile.id)}
//                     className="px-4 py-1.5 text-sm bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-100 transition-colors font-medium"
//                   >
//                     Approve
//                   </button>
//                   <button
//                     onClick={() => handleReject(profile.id)}
//                     className="px-4 py-1.5 text-sm bg-rose-50 text-rose-600 rounded-lg hover:bg-rose-100 transition-colors font-medium"
//                   >
//                     Reject
//                   </button>
//                 </div>
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

export default function PendingProfiles() {
  const [profiles, setProfiles] = useState<Profile[]>([]);

  useEffect(() => {
    setProfiles([
      {
        id: "1",
        memberId: "39D142658",
        name: "Amit Kulkarni",
        image: "https://randomuser.me/api/portraits/men/21.jpg",
        followers: 2,
        reported: 0,
        memberSince: "28/11/2024 11:18 AM",
      },
      {
        id: "2",
        memberId: "8FE89D7F60",
        name: "Priya Deshmukh",
        image: "https://randomuser.me/api/portraits/women/12.jpg",
        followers: 5,
        reported: 1,
        memberSince: "28/11/2024 10:45 AM",
      },
    ]);
  }, []);

  const handleApprove = (id: string) => {
    console.log("Approved:", id);
  };

  const handleReject = (id: string) => {
    console.log("Rejected:", id);
  };

  return (
    <div className="flex-1 min-h-screen bg-gray-50">
      <Header title="Pending Members" />

      <main className="p-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

          {/* Top */}
          <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
            <h3 className="font-bold text-gray-800 text-lg">
              Pending Approval List
            </h3>
            <span className="text-sm text-amber-600 bg-amber-50 px-3 py-1 rounded-lg font-medium">
              {profiles.length} Pending
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
                  <th className="px-6 py-3 text-center">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-50">
                {profiles.map((profile) => (
                  <tr
                    key={profile.id}
                    className="hover:bg-amber-50/40 transition"
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
                      <span className="px-3 py-1 text-xs rounded-full bg-amber-100 text-amber-700 font-semibold">
                        Pending
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

                    <td className="px-6 py-4 text-center">
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => handleApprove(profile.id)}
                          className="px-3 py-1 text-xs bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-100 font-semibold transition"
                        >
                          Approve
                        </button>

                        <button
                          onClick={() => handleReject(profile.id)}
                          className="px-3 py-1 text-xs bg-rose-50 text-rose-600 rounded-lg hover:bg-rose-100 font-semibold transition"
                        >
                          Reject
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