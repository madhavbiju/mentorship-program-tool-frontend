import { jwtDecode } from "jwt-decode";

interface JWTPayload {
  "http://schemas.microsoft.com/ws/2008/06/identity/claims/role":
    | string
    | string[];
}

const GetLogin = async (token: string): Promise<string[]> => {
  try {
    const response = await axios.post(
      "https://localhost:7259/api/Login/CreateUser",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();

    if (!data.token) {
      console.error("JWT not found in response");
      return [];
    }

    // Decode JWT to get JSON payload
    const decoded: JWTPayload = jwtDecode(data.token);

    // Access roles using the full claim URI
    const rolesClaim =
      decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];

    // Ensure rolesClaim is always an array for consistent handling
    const roles = Array.isArray(rolesClaim) ? rolesClaim : [rolesClaim];

    console.log("Roles", roles);
    sessionStorage.setItem("jwtToken", JSON.stringify(data.token));

    return roles.map((role) => role.toLowerCase());
  } catch (error) {
    console.error("Error sending token to server:", error);
    return [];
  }
};

export default GetLogin;
