import { jwtDecode } from "jwt-decode";
import { JWTPayload } from "./types";

export const decodeToken = (token: string): JWTPayload | null => {
  try {
    const decoded: JWTPayload = jwtDecode(token);
    return decoded;
  } catch (error) {
    console.error("Error decoding JWT:", error);
    return null;
  }
};
