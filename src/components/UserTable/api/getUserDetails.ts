import axios from "axios";
import { User, UserDetailsResponse } from "../types"; // Assuming your types are exported from a 'types.ts' file

function getUserInitials(userName: string): string {
  const names = userName.split(" ");
  if (names.length > 1) {
    return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
  }
  return userName[0].toUpperCase(); // Fallback to just the first letter
}

export async function getUserDetails(
  page: number = 1
): Promise<UserDetailsResponse> {
  try {
    const response = await axios.get<{ users: any[]; totalCount: number }>(
      `https://localhost:7259/api/admin/ByRole/all?pageNumber=${page}&pageSize=5`
    );

    const { users: usersData, totalCount } = response.data;

    const usersMap: { [key: string]: User } = {};

    usersData.forEach((user: any) => {
      const id = `${user.userID}`;
      if (usersMap[id]) {
        usersMap[id].userRoles.push(user.userRole);
      } else {
        usersMap[id] = {
          id,
          userName: user.userName,
          userInitials: getUserInitials(user.userName),
          userRoles: [user.userRole],
          userJob: user.userJob,
          userStatus: user.userStatus,
        };
      }
    });

    const userList: User[] = Object.values(usersMap);

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
