import React, { useState } from "react"; // Import useState
import { useMsal } from "@azure/msal-react";
import { useNavigate } from "react-router-dom";
import { useUserRole } from "./Context/UserRoleContext";
import { loginRequest } from "../../../Authentication/authConfig";
import GetLogin from "./api/GetLogin";

const useLoginHandler = (onLoginSuccess: () => void) => {
  const navigate = useNavigate();
  const { instance } = useMsal();
  const { setUserRoles } = useUserRole();
  const [loading, setLoading] = useState(false); // Loading state

  const handleLogin = async (loginType: string) => {
    setLoading(true); // Enable loading
    if (loginType === "popup") {
      try {
        const response = await instance.loginPopup(loginRequest);
        const roles = await GetLogin(response.accessToken);

        if (roles.length > 0) {
          setUserRoles(roles);
          sessionStorage.setItem("userRoles", JSON.stringify(roles));
          // Navigate based on the primary role
          navigate(`/${roles[0]}/home`);
        }
        if (roles.length === 0) {
          navigate(`/waiting`);
        }
        onLoginSuccess();
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false); // Disable loading regardless of outcome
      }
    }
  };

  return { handleLogin, loading }; // Return loading state
};

export default useLoginHandler;
