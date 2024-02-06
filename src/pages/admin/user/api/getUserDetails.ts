import axios from "axios";

interface User {
  id: string;
  userName: string;
  userInitials?: string; // Optional field to store user initials
  userRoles: string[];
  userJob: string;
  userStatus: string;
}

interface UserDataFetched {
  userList: User[];
  totalCount: number;
}

function getUserInitials(userName: string): string {
  const names = userName.split(" ");
  if (names.length > 1) {
    return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
  }
  // Fallback to just the first letter of the userName if it doesn't have a space
  return userName[0].toUpperCase();
}

// Modify getUserDetails to accept a page parameter
export async function getUserDetails(
  page: number = 1
): Promise<UserDataFetched> {
  try {
    // Use the page parameter in the request URL
    const response = await axios.get(
      `https://localhost:7259/api/admin/ByRole/all?pageNumber=${page}&pageSize=10`
    );
    const usersData = response.data.users;
    const totalCount = response.data.totalCount; // Assuming totalCount is directly accessible from response.data

    const usersMap: { [key: string]: User } = {};

    usersData.forEach((user: any) => {
      const id = `${user.userID}`;
      if (usersMap[id]) {
        usersMap[id].userRoles.push(user.userRole);
      } else {
        usersMap[id] = {
          id,
          userName: user.userName,
          userInitials: getUserInitials(user.userName), // Use the helper function to get initials
          userRoles: [user.userRole],
          userJob: user.userJob,
          userStatus: user.userStatus,
        };
      }
    });

    const userList: User[] = Object.values(usersMap);

    const userDataFetched: UserDataFetched = {
      userList,
      totalCount,
    };

    return userDataFetched;
  } catch (error) {
    throw new Error(`Error fetching user details: ${error}`);
  }
}
