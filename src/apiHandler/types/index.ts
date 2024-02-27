export interface JWTPayload {
  sub: string;
  email: string;
  name: string;
  nameid: string; // Added based on the provided payload
  "http://schemas.microsoft.com/ws/2008/06/identity/claims/role":
    | string
    | string[];
  exp: number;
  iss: string;
  aud: string;
  // Add any other properties as needed
}
