// import { Navigate } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";

// const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
//   const { user } = useAuth();

//   if (!user) return <Navigate to="/admin/login" />;

//   if (user.forcePasswordChange) {
//     return <Navigate to="/admin/change-password" />;
//   }

//   return children;
// };

// export default ProtectedRoute;

import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function ProtectedRoute({
  children,
}: {
  children: JSX.Element;
}) {
  const { user } = useAuth();
  const location = useLocation();
  const path = location.pathname;

  // 🔴 NOT LOGGED IN
  if (!user) {
    // Super Admin trying to access super admin panel
    if (path.startsWith("/super-admin")) {
      return <Navigate to="/super-admin/login" replace />;
    }

    // Admin trying to access admin panel
    if (path.startsWith("/admin")) {
      return <Navigate to="/admin/login" replace />;
    }

    return <Navigate to="/admin/login" replace />;
  }

  // 🔐 FORCE PASSWORD CHANGE (applies to both roles)
  if (user.forcePasswordChange) {
    // Super Admin forced change
    if (user.role === "SUPER_ADMIN") {
      return <Navigate to="/super-admin/change-password" replace />;
    }

    // Admin forced change
    if (user.role === "ADMIN") {
      return <Navigate to="/admin/change-password" replace />;
    }
  }

  // ❌ ADMIN trying to access SUPER ADMIN panel
  if (path.startsWith("/super-admin") && user.role !== "SUPER_ADMIN") {
    return <Navigate to="/admin/dashboard" replace />;
  }

  // ❌ SUPER ADMIN trying to access ADMIN panel (optional but recommended)
  if (path.startsWith("/admin") && user.role === "SUPER_ADMIN") {
    return <Navigate to="/super-admin" replace />;
  }

  // ✅ ACCESS GRANTED
  return children;
}