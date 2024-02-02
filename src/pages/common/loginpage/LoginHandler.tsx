// LoginHandler.ts
import { useMsal } from "@azure/msal-react";
// import { loginRequest } from "./authConfig";
import { useNavigate } from "react-router-dom";
import { useUserRole } from "./Context/UserRoleContext";
import { loginRequest } from "./Authentication/authConfig";
import GetLogin from "./api/GetLogin";
// import GetLogin from "./GetLogin";
// import { useUserRole } from "./UserRoleContext"; // Ensure this is updated to handle multiple roles

export const useLoginHandler = (onLoginSuccess: () => void) => {
  const navigate = useNavigate();
  const { instance } = useMsal();
  const { setUserRoles } = useUserRole(); // This now expects to set an array of roles

  const handleLogin = async (loginType: string) => {
    if (loginType === "popup") {
      try {
        const response = await instance.loginPopup(loginRequest);
        const roles = await GetLogin(response.accessToken); // Assuming this returns an array of roles
        if (roles.length > 0) {
          setUserRoles(roles); // Save all the roles into context
          sessionStorage.setItem("userRoles", JSON.stringify(roles));
          navigate(`/${roles[0]}/home`); // Navigate based on the primary role for now
        }
        onLoginSuccess();
      } catch (e) {
        console.error(e);
      }
    }
  };

  return { handleLogin };
};

export default useLoginHandler;
