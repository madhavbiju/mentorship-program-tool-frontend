export interface User {
  id: string;
  userName: string;
  userInitials?: string; // Optional field to store user initials
  userRoles: string[];
  userJob: string;
  userStatus: string;
}
export interface UserDetailsResponse {
  userList: User[];
  totalCount: number;
}
