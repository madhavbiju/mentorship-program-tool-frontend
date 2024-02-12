import { jwtDecode } from "jwt-decode";

interface JWTPayload {
  sub: string;
  email: string;
  "http://schemas.microsoft.com/ws/2008/06/identity/claims/role":
    | string
    | string[];
  exp: number;
  iss: string;
  aud: string;
  name: string;
  // Add any other properties as needed
}

export const decodeToken = (token: string): JWTPayload | null => {
  try {
    const decoded: JWTPayload = jwtDecode(token);
    return decoded;
  } catch (error) {
    console.error("Error decoding JWT:", error);
    return null;
  }
};
