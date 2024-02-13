// import React, { useState, useEffect } from "react";
// import { Stack } from "@mui/joy";
// import { getUserDetails } from "./api/getUserDetails";
// import { User, UserDetailsResponse } from "./types";
// import PaginationButtons from "../Pagination/Pagination";
// import UserPageSkeleton from "./UserPageSkeleton";
// import UserTable from "./UserTable";

// const UserPageHandler: React.FC = () => {
//   const [totalCount, setTotalCount] = useState<number>(0);
//   const [users, setUsers] = React.useState<User[]>([]);
//   const [pageApi, setPageApi] = useState<number>(1);
//   const [isLoading, setIsLoading] = useState<boolean>(false);

//   const getUserData = async () => {
//     try {
//       setIsLoading(true);
//       const response: UserDetailsResponse = await getUserDetails(pageApi);
//       setUsers(response.userList);
//       setTotalCount(response.totalCount);
//       setIsLoading(false);

//       console.log(response.totalCount);
//       console.log(response.userList);
//     } catch (error) {
//       console.error("Failed to fetch user details:", error);
//     }
//   };

//   useEffect(() => {
//     getUserData();
//   }, [pageApi]);

//   return (
//     <>
//       <Stack
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           mb: 1,
//         }}
//       >
//         {isLoading ? ( // Render skeleton if loading
//           <UserPageSkeleton />
//         ) : (
//           <UserTable userList={users} />
//         )}
//         <br />
//         <PaginationButtons
//           total={totalCount}
//           perPage={6}
//           setPageApi={setPageApi}
//         />
//       </Stack>
//     </>
//   );
// };

// export default UserPageHandler;
// Import React and other necessary items
import React, { useState, useEffect } from "react";
import { Stack } from "@mui/joy";
import { getUserDetails } from "./api/getUserDetails"; // Ensure this function is adapted to accept the `selectedRole` argument
import { User, UserDetailsResponse } from "./types";
import PaginationButtons from "../Pagination/Pagination";
import UserPageSkeleton from "./UserPageSkeleton";
import UserTable from "./UserTable";

// Define the props type, including the selectedRole prop
interface UserPageHandlerProps {
  selectedRole: string;
}

const UserPageHandler: React.FC<UserPageHandlerProps> = ({ selectedRole }) => {
  const [totalCount, setTotalCount] = useState<number>(0);
  const [users, setUsers] = useState<User[]>([]);
  const [pageApi, setPageApi] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [submitButtonPressed, setSubmitButtonPressed] =
    useState<boolean>(false);
  console.log(selectedRole);

  const getUserData = async () => {
    try {
      setIsLoading(true);
      // Pass selectedRole to getUserDetails
      const response: UserDetailsResponse = await getUserDetails(
        pageApi,
        selectedRole
      ); // Adjust this line based on the actual function signature of getUserDetails
      setUsers(response.userList);
      setTotalCount(response.totalCount);
      setIsLoading(false);

      console.log(response.totalCount);
      console.log("response.userList");
      console.log(response.userList);
    } catch (error) {
      console.error("Failed to fetch user details:", error);
    }
  };

  useEffect(() => {
    getUserData();
  }, [pageApi, selectedRole, submitButtonPressed]); // Include selectedRole in the dependency array

  return (
    <>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mb: 1,
        }}
      >
        {isLoading ? (
          <UserPageSkeleton />
        ) : (
          <UserTable
            userList={users}
            setSubmitButtonPressed={setSubmitButtonPressed}
          />
        )}
        <br />
        <PaginationButtons
          total={totalCount}
          perPage={6}
          setPageApi={setPageApi}
        />
      </Stack>
    </>
  );
};

export default UserPageHandler;
