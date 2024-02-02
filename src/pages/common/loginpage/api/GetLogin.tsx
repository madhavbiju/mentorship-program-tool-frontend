const GetLogin = async (token: string): Promise<string[]> => {
  try {
    const response = await fetch("https://localhost:7162/api/User/CreateUser", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    const roles = data.roles || [];
    return roles.map((role: any) => role.roleName.toLowerCase());
  } catch (error) {
    console.error("Error sending token to server:", error);
    return [];
  }
};

export default GetLogin;
