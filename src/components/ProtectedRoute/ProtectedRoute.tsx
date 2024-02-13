// Assuming this is in src/components/ProtectedRoute.tsx or similar
import React from "react";
import UnauthorizedPage from "../UnauthorizedPage/UnauthorizedPage";
import { decodeToken } from "../../apiHandler/Decoder";

interface ProtectedRouteProps {
  allowedRoles: string[];
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  allowedRoles,
}) => {
  // Retrieve the JWT token from storage
  const token = sessionStorage.getItem("jwtToken"); // Adjust according to where you store your token
  let isAuthorized = false;

  if (token) {
    const decoded = decodeToken(token);
    if (decoded) {
      const rolesClaim =
        decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
      const userRoles = Array.isArray(rolesClaim) ? rolesClaim : [rolesClaim];
      isAuthorized = userRoles.some((role: string) =>
        allowedRoles.includes(role.toLowerCase())
      );
    }
  }

  if (!isAuthorized) {
    return <UnauthorizedPage />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
