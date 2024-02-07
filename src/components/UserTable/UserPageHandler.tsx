import React, { useState, useEffect } from "react";
import { Stack } from "@mui/joy";
import { getUserDetails } from "./api/getUserDetails";
import { User, UserDetailsResponse } from "./types";
import PaginationButtons from "../Pagination/Pagination";
import UserPageSkeleton from "./UserPageSkeleton";
import UserTable from "./UserTable";

const UserPageHandler: React.FC = () => {
  const [totalCount, setTotalCount] = useState<number>(0);
  const [users, setUsers] = React.useState<User[]>([]);
  const [pageApi, setPageApi] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getUserData = async () => {
    try {
      setIsLoading(true);
      const response: UserDetailsResponse = await getUserDetails(pageApi);
      setUsers(response.userList);
      setTotalCount(response.totalCount);
      setIsLoading(false);

      console.log(response.totalCount);
    } catch (error) {
      console.error("Failed to fetch user details:", error);
    }
  };

  useEffect(() => {
    getUserData();
  }, [pageApi]);

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
        {isLoading ? ( // Render skeleton if loading
          <UserPageSkeleton />
        ) : (
          <UserTable userList={users} />
        )}
        <br />
        <PaginationButtons
          total={totalCount}
          perPage={5}
          setPageApi={setPageApi}
        />
      </Stack>
    </>
  );
};

export default UserPageHandler;
