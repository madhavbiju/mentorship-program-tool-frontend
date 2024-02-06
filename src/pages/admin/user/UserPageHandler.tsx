import React, { useState, useEffect } from "react";
import { Stack } from "@mui/joy";
import { getUserDetails } from "./api/getUserDetails";
import { UserDetailsResponse } from "./types";
import PaginationIcons from "../../../components/Pagination/PaginationIcons";
import PaginationButtons from "../../../components/Pagination/Pagination";

const UserPageHandler: React.FC = () => {
  const [totalCount, setTotalCount] = useState<number>(0);
  const [pageApi, setPageApi] = useState<number>(0);

  const getUserData = async () => {
    try {
      const response: UserDetailsResponse = await getUserDetails(pageApi);
      setTotalCount(response.totalCount);
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
          padding: "20px",
        }}
      >
        <br />
        <PaginationButtons count={totalCount} setPageApi={setPageApi} />
      </Stack>
    </>
  );
};

export default UserPageHandler;
