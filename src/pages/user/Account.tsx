import UserNavbar from "../../components/user/UserDashboardNavbar";
import Footer from "../../components/user/Footer";

export default function Account() {
  return (
    <>
      <UserNavbar />
      <div className="min-h-screen pt-[100px] bg-gradient-to-br from-[#fff8f0] to-[#fef1e6] px-6">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-3xl shadow-xl border border-amber-100">
          <h1 className="text-3xl font-bold text-red-800 mb-6 font-serif">
            👤 Account Management
          </h1>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Full Name
              </label>
              <input
                className="w-full mt-1 p-3 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
                defaultValue="Rahul Kumar"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                className="w-full mt-1 p-3 border border-amber-200 rounded-xl"
                defaultValue="rahul@email.com"
              />
            </div>

            <button className="mt-4 px-6 py-2 bg-gradient-to-r from-red-700 to-amber-500 text-white rounded-xl shadow-lg">
              Save Changes
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}