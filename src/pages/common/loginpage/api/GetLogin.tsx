import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { JWTPayload } from "../../../../apiHandler/types";
import { baseUrl } from "../../../../config/configUrl";
import axiosInstance from "../../../../config/configAxios";

const GetLogin = async (token: string): Promise<string[]> => {
  try {
    const response = await axiosInstance.post(
      `${baseUrl.login}/CreateUser`,
      null,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = response.data;

    if (!data.token) {
      console.error("JWT not found in response");
      return [];
    }

    // Decode JWT to get JSON payload
    const decoded: JWTPayload = jwtDecode(data.token);
    sessionStorage.setItem("EmployeeId", decoded.nameid);
    // Access roles using the full claim URI
    const rolesClaim =
      decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];

    // Ensure rolesClaim is always an array for consistent handling
    const roles = Array.isArray(rolesClaim) ? rolesClaim : [rolesClaim];

    sessionStorage.setItem("jwtToken", JSON.stringify(data.token));

    return roles.map((role) => role.toLowerCase());
  } catch (error) {
    console.error("Error sending token to server:", error);
    return [];
  }
};

export default GetLogin;
