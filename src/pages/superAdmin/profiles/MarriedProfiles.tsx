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
  approvalStatus: "Approved";
  memberStatus: "Married";
}

export default function SuperMarriedProfiles() {
  const [profiles, setProfiles] = useState<Profile[]>([]);

  useEffect(() => {
    setProfiles([
      {
        id: "1",
        memberId: "75ACB3036",
        name: "Karan Mehta",
        image: "https://randomuser.me/api/portraits/men/52.jpg",
        followers: 18,
        reported: 0,
        memberSince: "15/06/2023 08:15 AM",
        approvalStatus: "Approved",
        memberStatus: "Married",
      },
      {
        id: "2",
        memberId: "31C44E8129",
        name: "Anjali Verma",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        followers: 24,
        reported: 1,
        memberSince: "10/03/2023 02:30 PM",
        approvalStatus: "Approved",
        memberStatus: "Married",
      },
    ]);
  }, []);

  const handleRestore = (id: string) => {
    setProfiles((prev) => prev.filter((profile) => profile.id !== id));
    console.log("Restored:", id);
  };

  return (
    <div className="flex-1 min-h-screen bg-gray-50">
      <Header title="Married Members" />

      <main className="p-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

          {/* Top Section */}
          <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
            <h3 className="font-bold text-gray-800 text-lg">
              Married Members List
            </h3>

            <span className="text-sm text-violet-600 bg-violet-50 px-3 py-1 rounded-lg font-medium">
              {profiles.length} Married
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
                  <th className="px-6 py-3">Member Status</th>
                  <th className="px-6 py-3 text-center">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-50">
                {profiles.map((profile) => (
                  <tr
                    key={profile.id}
                    className="hover:bg-violet-50/40 transition"
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
                    <td className="px-6 py-4 font-semibold text-gray-800">
                      {profile.name}
                    </td>

                    {/* Approval Status */}
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

                    {/* Member Status */}
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 text-xs rounded-full bg-violet-100 text-violet-700 font-semibold">
                        💍 Married
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => handleRestore(profile.id)}
                        className="px-3 py-1 text-xs bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 font-semibold transition"
                      >
                        Restore
                      </button>
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