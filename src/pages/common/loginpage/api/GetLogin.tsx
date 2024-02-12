import axios from "axios";

interface Role {
  roleName: string;
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
    const data = response.data;
    console.log(data);
    const roles: Role[] = data.roles || [];
    console.log("Roles");
    console.log(roles);
    return roles.map((role: Role) => role.roleName.toLowerCase());
  } catch (error) {
    console.error("Error sending token to server:", error);
    return [];
  }
};

export default GetLogin;
