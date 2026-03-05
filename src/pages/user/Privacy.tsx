import UserNavbar from "../../components/user/UserDashboardNavbar";
import Footer from "../../components/user/Footer";
import { ShieldCheck, Lock } from "lucide-react";

export default function Privacy() {
  return (
    <>
      <UserNavbar />
      <div className="min-h-screen pt-[100px] bg-gradient-to-br from-[#fff8f0] to-[#fef1e6] px-6">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-3xl shadow-xl border border-amber-100">
          <h1 className="text-3xl font-bold text-red-800 mb-6 font-serif">
            🔐 Privacy & Security
          </h1>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <ShieldCheck className="text-amber-600" />
              <div>
                <h3 className="font-semibold text-gray-800">Profile Visibility</h3>
                <p className="text-gray-500 text-sm">
                  Control who can view your profile and photos.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Lock className="text-amber-600" />
              <div>
                <h3 className="font-semibold text-gray-800">Change Password</h3>
                <p className="text-gray-500 text-sm">
                  Keep your account secure with strong credentials.
                </p>
                <button className="mt-2 px-4 py-2 bg-red-700 text-white rounded-lg">
                  Update Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}