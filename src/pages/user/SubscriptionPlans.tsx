import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import UserNavbar from "../../components/user/UserNavbar";
import Footer from "../../components/user/Footer";
import UserDashboardNavbar from "../../components/user/UserDashboardNavbar";

const plans = [
  {
    name: "Silver",
    price: "₹1,999 / 3 Months",
    features: [
      "View Limited Profiles",
      "Send 5 Interests per Day",
      "Basic Search Filters",
    ],
    color: "from-gray-400 to-gray-300",
  },
  {
    name: "Gold",
    price: "₹3,999 / 6 Months",
    features: [
      "Unlimited Profile Views",
      "Unlimited Interests",
      "Access Contact Details",
      "Priority Listing",
    ],
    color: "from-yellow-500 to-yellow-400",
    popular: true,
  },
  {
    name: "Platinum",
    price: "₹7,999 / 12 Months",
    features: [
      "Everything in Gold",
      "Dedicated Relationship Manager",
      "Highlighted Profile",
      "Weekly Profile Boost",
    ],
    color: "from-purple-600 to-purple-400",
  },
];

export default function SubscriptionPlans() {
  const navigate = useNavigate();

  return (
    <>
      <div
    className="min-h-screen bg-gradient-to-br bg-cover bg-center relative"
    style={{ backgroundImage: "url('/profileBackground2.PNG')" }}
  >
        <UserDashboardNavbar />

        <div className="max-w-7xl mx-auto px-6 py-20">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-red-700 mb-4">
              Choose Your Membership
            </h2>
            <p className="text-gray-600 text-lg">
              Unlock premium features and find your perfect match faster.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className={`relative bg-gradient-to-br bg-orange-100 backdrop-brightness-200 rounded-3xl shadow-2xl p-8 border border-yellow-200`}
              >
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-sm shadow-lg">
                    Most Popular
                  </span>
                )}

                <h3 className="text-3xl font-bold text-center mb-4">
                  {plan.name}
                </h3>

                <p className="text-center text-2xl font-semibold mb-6 text-yellow-600">
                  {plan.price}
                </p>

                <ul className="space-y-3 mb-8 text-gray-700">
                  {plan.features.map((feature, i) => (
                    <li key={i}>✔ {feature}</li>
                  ))}
                </ul>

                <button
                  onClick={() => navigate("/user/user-dashboard")}
                  className={`w-full bg-gradient-to-r ${plan.color} text-white py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition`}
                >
                  Choose Plan
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}