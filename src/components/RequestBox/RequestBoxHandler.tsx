import React, { useState, useEffect } from "react";
import axios from "axios";
import { Stack, Typography } from "@mui/joy";
import PaginationIcons from "../Pagination/PaginationIcons";
import RequestBox from "./RequestBox";
import { fetchRequestData } from "./Api/GetRequestData";
import RequestBoxSkeleton from "./RequestBoxSkeleton";

const RequestBoxHandler: React.FC = () => {
  const [requestData, setRequestData] = useState<{
    users: User[];
    total: number;
  }>({
    users: [],
    total: 0,
  });
  const [pageApi, setPageApi] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const getRequestData = async () => {
    setIsLoading(true);
    let response = await fetchRequestData(pageApi);
    setRequestData(response);
    setIsLoading(false);
  };

  useEffect(() => {
    getRequestData();
  }, [pageApi]);

  return (
    <>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 1,
        }}
      >
        <Typography
          level="body-lg"
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          Requests
        </Typography>
        <PaginationIcons
          total={requestData.total}
          perPage={4}
          setPageApi={setPageApi}
        />
      </Stack>
      {isLoading ? ( // Render skeleton if loading
        <RequestBoxSkeleton />
      ) : (
        <RequestBox users={requestData.users} />
      )}
    </>
  );
};

export default RequestBoxHandler;
