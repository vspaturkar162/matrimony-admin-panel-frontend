import UserNavbar from "../../components/user/UserDashboardNavbar";
import Footer from "../../components/user/Footer";

export default function EditPreferences() {
  return (
    <>
      <UserNavbar />
      <div className="min-h-screen pt-[100px] bg-gradient-to-br from-[#fff8f0] to-[#fef1e6] px-6">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-3xl shadow-xl border border-amber-100">
          <h1 className="text-3xl font-bold text-red-800 font-serif mb-6">
            ✨ Edit Partner Preferences
          </h1>

          <div className="grid md:grid-cols-2 gap-6">
            <input
              placeholder="Preferred Age Range"
              className="p-3 border border-amber-200 rounded-xl"
            />
            <input
              placeholder="Preferred Height"
              className="p-3 border border-amber-200 rounded-xl"
            />
            <input
              placeholder="Religion"
              className="p-3 border border-amber-200 rounded-xl"
            />
            <input
              placeholder="Location"
              className="p-3 border border-amber-200 rounded-xl"
            />
          </div>

          <button className="mt-6 px-6 py-2 bg-gradient-to-r from-red-700 to-amber-500 text-white rounded-xl shadow-lg">
            Save Preferences
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}