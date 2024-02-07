import React, { useState, useEffect } from "react";
import axios from "axios";
import { Stack, Typography, Skeleton, Card, CardContent } from "@mui/joy";
import PaginationButtons from "../Pagination/Pagination";
import DashboardTable from "./DashboardTable"; // assuming you have this component
import { fetchProgramData } from "./Api/GetProgramData";
import PaginationIcons from "../Pagination/PaginationIcons";
import DashboardTableSkeleton from "./DashboardTableSkeleton";

const DashboardTableHandler: React.FC = () => {
  const [programData, setProgramData] = useState<{
    users: User[];
    total: number;
  }>({
    users: [],
    total: 0,
  });
  const [pageApi, setPageApi] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getProgramData = async () => {
    setIsLoading(true); // Set loading state to true while fetching data
    let response = await fetchProgramData(pageApi);
    setProgramData(response);
    setIsLoading(false); // Set loading state to false after fetching data
  };

  useEffect(() => {
    getProgramData();
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
          Programs
        </Typography>
        <PaginationIcons
          total={programData.total}
          perPage={5}
          setPageApi={setPageApi}
        />
      </Stack>
      {isLoading ? ( // Render skeleton if loading
        <DashboardTableSkeleton />
      ) : (
        <DashboardTable users={programData.users} />
      )}
    </>
  );
};

export default DashboardTableHandler;
