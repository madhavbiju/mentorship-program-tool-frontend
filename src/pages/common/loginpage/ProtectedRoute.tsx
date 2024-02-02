// ProtectedRoute.tsx
import React from "react";
import UnauthorizedPage from "../../../components/UnauthorizedPage/UnauthorizedPage";
// import UnauthorizedPage from "./UnauthorizedPage";

interface ProtectedRouteProps {
  allowedRoles: string[];
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  allowedRoles,
}) => {
  // Retrieve roles from sessionStorage
  const storedRoles = sessionStorage.getItem("userRoles");
  const userRoles = storedRoles ? JSON.parse(storedRoles) : [];

  // Check if userRoles include any of the allowedRoles
  const isAuthorized = userRoles.some((role: string) =>
    allowedRoles.includes(role)
  );

  if (!isAuthorized) {
    // Render UnauthorizedPage directly without navigating
    return <UnauthorizedPage />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
