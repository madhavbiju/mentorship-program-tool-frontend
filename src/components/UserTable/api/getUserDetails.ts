import axios from "axios";
import { User, UserDetailsResponse } from "../types"; // Assuming your types are exported from a 'types.ts' file

function getUserInitials(userName: string): string {
  const names = userName.split(" ");
  if (names.length > 1) {
    return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
  }
  return userName[0].toUpperCase(); // Fallback to just the first letter
}

// Added 'toggleChoice' parameter with default value 'all'
export async function getUserDetails(
  page: number = 1,
  toggleChoice: string = "all" // Default value is 'all'
): Promise<UserDetailsResponse> {
  try {
    // Replace 'all' with `${toggleChoice}` in the URL
    const response = await axios.get<{ users: any[]; totalCount: number }>(
      `https://localhost:7259/api/admin/ByRole/${toggleChoice}?pageNumber=${page}&pageSize=6`
    );

    const { users: usersData, totalCount } = response.data;

    const userList: User[] = usersData.map((user: any) => {
      // Check if userRoles is not empty, else set it to ["Unassigned"]
      const userRoles =
        user.userRoles.length > 0 ? user.userRoles : ["Unassigned"];

      return {
        id: user.userID,
        userName: user.userName,
        userInitials: getUserInitials(user.userName),
        userRoles: userRoles, // Use the modified userRoles with the check for "Unassigned"
        userJob: user.userJob,
        userStatus: user.userStatus,
      };
    });

    return {
      userList,
      totalCount,
    };
  } catch (error) {
    // Improved error handling
    if (axios.isAxiosError(error)) {
      throw new Error(`Axios error fetching user details: ${error.message}`);
    } else {
      throw new Error(`Unexpected error fetching user details: ${error}`);
    }
  }
}
