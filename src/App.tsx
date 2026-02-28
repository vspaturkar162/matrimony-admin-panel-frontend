// import { Routes, Route, Navigate } from "react-router-dom";

// import Login from "./pages/admin/Login";
// import Dashboard from "./pages/admin/Dashboard";
// import ChangePassword from "./pages/admin/ChangePassword";
// import AdminList from "./pages/superAdmin/AdminList";
// import PendingProfiles from "./pages/admin/profiles/PendingProfiles";
// import ApprovedProfiles from "./pages/admin/profiles/ApprovedProfiles";
// import RejectedProfiles from "./pages/admin/profiles/RejectedProfiles";
// import ActiveSubscriptions from "./pages/admin/subscriptions/ActiveSubscriptions";
// import ExpiredSubscriptions from "./pages/admin/subscriptions/ExpiredSubscriptions";
// import Sidebar from "./components/admin/Sidebar";
// import ProtectedRoute from "./components/admin/ProtectedRoute";
// import SubscriptionGraph from "./pages/admin/subscriptions/SubscriptionGraph";
// import BannerPanel from "./pages/admin/banners/BannerPanel";
// import PaymentReport from "./pages/admin/payments/PaymentReport";
// import RevenueReport from "./pages/admin/payments/RevenueReport";
// import Matches from "./pages/admin/Matches";
// import Notifications from "./pages/admin/Notification";
// import Analytics from "./pages/admin/analytics";
// import SuperAdminChangePassword from "./pages/superAdmin/SuperAdminChangePassword";
// import SuperAdminDashboard from "./pages/superAdmin/SuperAdminDashboard";

// function App() {
//   return (
//     <div style={{ display: "flex" }}>
//       <Sidebar />

//       <div style={{ padding: "20px", width: "100%" }}>
//         <Routes>
//           <Route path="/" element={<Navigate to="/admin/login" />} />
//           <Route path="/admin/login" element={<Login />} />

//           <Route
//             path="/admin/dashboard"
//             element={
//               <ProtectedRoute>
//                 <Dashboard />
//               </ProtectedRoute>
//             }
//           />

//           <Route path="/admin/change-password" element={<ChangePassword />} />
//           <Route path="/admin/admin-list" element={<AdminList />} />

//           <Route path="/admin/profiles/pending" element={<PendingProfiles />} />
//           <Route path="/admin/profiles/approved" element={<ApprovedProfiles />} />
//           <Route path="/admin/profiles/rejected" element={<RejectedProfiles />} />

//           <Route
//             path="/admin/subscriptions/active"
//             element={<ActiveSubscriptions />}
//           />
//           <Route
//             path="/admin/subscriptions/expired"
//             element={<ExpiredSubscriptions />}
//           />
//           <Route path="/admin/subscriptions/graph" element={<SubscriptionGraph />} />
//           <Route path="/admin/banners/banner-panel" element={<BannerPanel />} />
//           <Route path="/admin/payments/payment-reports" element={<PaymentReport />} />
//           <Route path="/admin/payments/revenue-reports" element={<RevenueReport />} />
//           <Route path="/admin/matches" element={<Matches />} />
//           <Route path="/admin/analytics" element={<Analytics />} />
//           <Route path="/admin/notifications" element={<Notifications />} />
          
//         </Routes>
//         <Routes>
//           <Route
//             path="/admin/super-admin"
//             element={
//               <ProtectedRoute>
//                 <SuperAdminDashboard />
//               </ProtectedRoute>
//             }
//           />
          
//           <Route path="/super-admin/admin-list" element={<AdminList />} />
//           <Route path="/super-admin/change-password" element={<SuperAdminChangePassword />} />
//         </Routes>
//       </div>
//     </div>
//   );
// }

// export default App;

import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import ChangePassword from "./pages/admin/ChangePassword";
import AdminList from "./pages/superAdmin/AdminList";
import PendingProfiles from "./pages/admin/profiles/PendingProfiles";
import ApprovedProfiles from "./pages/admin/profiles/ApprovedProfiles";
import RejectedProfiles from "./pages/admin/profiles/RejectedProfiles";
import ActiveSubscriptions from "./pages/admin/subscriptions/ActiveSubscriptions";
import ExpiredSubscriptions from "./pages/admin/subscriptions/ExpiredSubscriptions";
import Sidebar from "./components/admin/Sidebar";
import ProtectedRoute from "./components/admin/ProtectedRoute";
import SubscriptionGraph from "./pages/admin/subscriptions/SubscriptionGraph";
import BannerPanel from "./pages/admin/banners/BannerPanel";
import PaymentReport from "./pages/admin/payments/PaymentReport";
import RevenueReport from "./pages/admin/payments/RevenueReport";
import Matches from "./pages/admin/Matches";
import Notifications from "./pages/admin/Notification";
import Analytics from "./pages/admin/analytics";
import SuperAdminChangePassword from "./pages/superAdmin/SuperAdminChangePassword";
import SuperAdminDashboard from "./pages/superAdmin/SuperAdminDashboard";
import SuperAdminLogin from "./pages/superAdmin/SuperAdminLogin";
import ActivityLogs from "./pages/superAdmin/ActivityLogs";
import SuperApprovedProfiles from "./pages/superAdmin/profiles/ApprovedProfiles";
import SuperPendingProfiles from "./pages/superAdmin/profiles/PendingProfiles";
import SuperSubscriptionGraph from "./pages/superAdmin/subscriptions/SubscriptionGraph";
import SuperExpiredSubscriptions from "./pages/superAdmin/subscriptions/ExpiredSubscriptions";
import SuperActiveSubscriptions from "./pages/superAdmin/subscriptions/ActiveSubscriptions";
import SuperRejectedProfiles from "./pages/superAdmin/profiles/RejectedProfiles";
import SuperAnalytics from "./pages/superAdmin/analytics";
import SuperNotifications from "./pages/superAdmin/Notification";
import SuperMatches from "./pages/superAdmin/Matches";
import SuperRevenueReport from "./pages/superAdmin/payments/RevenueReport";
import SuperPaymentReport from "./pages/superAdmin/payments/PaymentReport";
import SuperAdminSidebar from "./pages/superAdmin/SuperAdminSidebar";
import MarriedProfiles from "./pages/admin/profiles/MarriedProfiles";
import SuperMarriedProfiles from "./pages/superAdmin/profiles/MarriedProfiles";
import ForgotPassword from "./pages/admin/ForgotPassword";
import SuperForgotPassword from "./pages/superAdmin/SuperForgotPassword";

function App() {
  const location = useLocation();

  // ✅ show admin sidebar ONLY for /admin/*
  const showAdminSidebar =
    location.pathname.startsWith("/admin") &&
    !location.pathname.startsWith("/super-admin") &&
    location.pathname !== "/admin/login";

  // ✅ show super admin sidebar ONLY for /super-admin/*
  const showSuperAdminSidebar =
    location.pathname.startsWith("/super-admin") &&
    location.pathname !== "/super-admin/login";

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {showAdminSidebar && <Sidebar />}
      {showSuperAdminSidebar && <SuperAdminSidebar />}

      <div style={{ padding: "20px", width: "100%" }}>
        <Routes>
          {/* Redirect */}
          <Route path="/" element={<Navigate to="/admin/login" />} />

          {/* Login */}
          <Route path="/admin/login" element={<Login />} />

          {/* Admin Routes */}
          <Route
            path="/admin/login"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/admin/forgot-pass" element={<ForgotPassword />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/change-password" element={<ChangePassword />} />
          <Route path="/admin/admin-list" element={<AdminList />} />

          <Route path="/admin/profiles/pending" element={<PendingProfiles />} />
          <Route path="/admin/profiles/approved" element={<ApprovedProfiles />} />
          <Route path="/admin/profiles/rejected" element={<RejectedProfiles />} />
          <Route path="/admin/profiles/married" element={<MarriedProfiles />} />

          <Route path="/admin/subscriptions/active" element={<ActiveSubscriptions />} />
          <Route path="/admin/subscriptions/expired" element={<ExpiredSubscriptions />} />
          <Route path="/admin/subscriptions/graph" element={<SubscriptionGraph />} />

          <Route path="/admin/banners/banner-panel" element={<BannerPanel />} />

          <Route path="/admin/payments/payment-reports" element={<PaymentReport />} />
          <Route path="/admin/payments/revenue-reports" element={<RevenueReport />} />

          <Route path="/admin/matches" element={<Matches />} />
          <Route path="/admin/analytics" element={<Analytics />} />
          <Route path="/admin/notifications" element={<Notifications />} />

          {/* ✅ SUPER ADMIN ROUTES (NO ADMIN SIDEBAR) */}
          <Route path="/super-admin/login" element={<SuperAdminLogin />} />
          {/* <Route
            path="/super-admin/super-dashboard"
            element={
              <ProtectedRoute>
                <SuperAdminDashboard />
              </ProtectedRoute>
            }
          /> */}
          <Route path="/super-admin/super-forgot-pass" element={<SuperForgotPassword />} />
          <Route path="/super-admin/super-dashboard" element={<SuperAdminDashboard />} />
          <Route path="/super-admin/admin-list" element={<AdminList />} />
          <Route path="/super-admin/activity-logs" element={<ActivityLogs />} />
          <Route path="/super-admin/profiles/pending" element={<SuperPendingProfiles />} />
          <Route path="/super-admin/profiles/approved" element={<SuperApprovedProfiles />} />
          <Route path="/super-admin/profiles/rejected" element={<SuperRejectedProfiles />} />
          <Route path="/super-admin/profiles/married" element={<SuperMarriedProfiles />} />

          <Route path="/super-admin/subscriptions/active" element={<SuperActiveSubscriptions />} />
          <Route path="/super-admin/subscriptions/expired" element={<SuperExpiredSubscriptions />} />
          <Route path="/super-admin/subscriptions/graph" element={<SuperSubscriptionGraph />} />

          <Route path="/super-admin/banners/banner-panel" element={<BannerPanel />} />

          <Route path="/super-admin/payments/payment-reports" element={<SuperPaymentReport />} />
          <Route path="/super-admin/payments/revenue-reports" element={<SuperRevenueReport />} />

          <Route path="/super-admin/matches" element={<SuperMatches />} />
          <Route path="/super-admin/analytics" element={<SuperAnalytics />} />
          <Route path="/super-admin/notifications" element={<SuperNotifications />} />
          <Route path="/super-admin/change-password" element={<SuperAdminChangePassword />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;