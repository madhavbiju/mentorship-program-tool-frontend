// PrivateRoutes.tsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  // Retrieve roleID from localStorage
  const roleID = localStorage.getItem("roleID");

  // Redirect user based on roleID
  switch (roleID) {
    case "1":
      return <Navigate to="/admin/dashboard" />;
    case "2":
      return <Navigate to="/mentor/dashboard" />;
    case "3":
      return <Navigate to="/mentee/dashboard" />;
    default:
      // If no roleID found, redirect to login
      return <Navigate to="/login" />;
  }
};

export default PrivateRoutes;
