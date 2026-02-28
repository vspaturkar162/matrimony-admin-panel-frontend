// import React from "react";

// interface StatCardProps {
//   label: string;
//   value: number | string;
// }

// const StatCard: React.FC<StatCardProps> = ({ label, value }) => {
//   return (
//     <div>
//       <h4>{label}</h4>
//       <p>{value}</p>
//     </div>
//   );
// };

// export default StatCard;

interface StatCardProps {
  label: string;
  value: number | string;
}

export default function StatCard({ label, value }: StatCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
      <h4 className="text-gray-500">{label}</h4>
      <p className="text-2xl font-bold text-primary mt-2">{value}</p>
    </div>
  );
}