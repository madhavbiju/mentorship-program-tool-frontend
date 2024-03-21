import React, { useState, useEffect } from "react";
import axios from "axios";
import { Sheet, Stack, Typography } from "@mui/joy";
import PaginationIcons from "../Pagination/PaginationIcons";
import RequestBox from "./RequestBox";
import { fetchRequestData } from "./Api/GetRequestData";
import RequestBoxSkeleton from "./RequestBoxSkeleton";
import { requests } from "./Types";

const RequestBoxHandler: React.FC = () => {
  const [requestData, setRequestData] = useState<{
    requests: requests[];
    totalCount: number;
  }>({
    requests: [],
    totalCount: 0,
  });
  const [pageApi, setPageApi] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isApprovedOrNot, setIsApprovedOrNot] = useState<boolean>(false);
  const getRequestData = async () => {
    setIsLoading(true);
    let response = await fetchRequestData(pageApi);
    setRequestData(response);
    setIsLoading(false);
  };

  useEffect(() => {
    getRequestData();
  }, [pageApi, isApprovedOrNot]);

  return (
    <>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          m: 0.8,
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
          total={requestData.totalCount}
          perPage={10}
          setPageApi={setPageApi}
        />
      </Stack>
      {isLoading ? ( // Render skeleton if loading
        <RequestBoxSkeleton />
      ) : (
        <Sheet
          sx={{
            height: "95%",
            minWidth: 240,
            borderRadius: "sm",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <RequestBox
            request={requestData.requests}
            totalCount={requestData.totalCount}
            setIsApprovedOrNot={setIsApprovedOrNot}
          />
        </Sheet>
      )}
    </>
  );
};

export default RequestBoxHandler;
