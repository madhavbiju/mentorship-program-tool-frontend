import React, { useState, useEffect } from "react";
import { Stack } from "@mui/joy";
import { getUserDetails } from "./api/getUserDetails"; // Ensure this function is adapted to accept the `selectedRole` argument
import { User, UserDetailsResponse } from "./types";
import PaginationButtons from "../Pagination/Pagination";
import UserPageSkeleton from "./UserPageSkeleton";
import UserTable from "./UserTable";
import NewUserTable from "./NewUserTable";

// Define the props type, including the selectedRole prop
interface UserPageHandlerProps {
  selectedRole: string;
  status: string;
  sort: string;
  search: string;
}

const UserPageHandler: React.FC<UserPageHandlerProps> = ({
  selectedRole,
  status,
  sort,
  search,
}) => {
  const [totalCount, setTotalCount] = useState<number>(0);
  const [users, setUsers] = useState<User[]>([]);
  const [pageApi, setPageApi] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [submitButtonPressed, setSubmitButtonPressed] =
    useState<boolean>(false);

  const getUserData = async () => {
    try {
      setIsLoading(true);
      // Pass selectedRole to getUserDetails
      const response: UserDetailsResponse = await getUserDetails(
        pageApi,
        selectedRole,
        sort,
        status,
        search
      ); // Adjust this line based on the actual function signature of getUserDetails
      setUsers(response.userList);
      setTotalCount(response.totalCount);
      setIsLoading(false);
    } catch (error) {
      console.error("Failed to fetch user details:", error);
    }
  };

  useEffect(() => {
    getUserData();
  }, [pageApi, selectedRole, submitButtonPressed, sort, status, search]); // Include selectedRole in the dependency array

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
          <NewUserTable
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
