import UserNavbar from "../../components/user/UserDashboardNavbar";
import Footer from "../../components/user/Footer";

export default function Filters() {
  return (
    <>
      <UserNavbar />
      <div className="min-h-screen pt-[100px] px-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-red-700 mb-6">Filter Profiles</h1>
        <p className="text-gray-600">Add filter functionality here.</p>
      </div>
      <Footer />
    </>
  );
}