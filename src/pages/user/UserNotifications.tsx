import UserNavbar from "../../components/user/UserDashboardNavbar";
import Footer from "../../components/user/Footer";

export default function UserNotifications() {
  const notifications = [
    "Priya Verma liked your profile",
    "New match found near you",
    "Sneha viewed your profile",
  ];

  return (
    <>
      <UserNavbar />
      <div className="min-h-screen pt-[100px] bg-gradient-to-br from-[#fff8f0] to-[#fef1e6] px-6">
        <div className="max-w-5xl mx-auto bg-white p-8 rounded-3xl shadow-xl border border-amber-100">
          <h1 className="text-3xl font-bold text-red-800 mb-6 font-serif">
            🔔 All Notifications
          </h1>

          {notifications.map((note, index) => (
            <div
              key={index}
              className="p-4 border-b border-gray-100 hover:bg-amber-50 rounded-lg transition"
            >
              {note}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}