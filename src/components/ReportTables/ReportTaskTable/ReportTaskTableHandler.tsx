import React, { useState, useEffect } from "react";
import axios from "axios";
import { Stack, Typography, Skeleton, Card, CardContent } from "@mui/joy";
import { tasks } from ".";
import PaginationIcons from "../../Pagination/PaginationIcons";
import { fetchtaskData } from "./API/GetReportData";
import ReportTaskTable from "./ReportTaskTable";
import ReportTaskTableSkeleton from "./ReportTaskTableSkeleton";

const ReportTaskTableHandler: React.FC = () => {
  const [taskData, settaskData] = useState<{
    tasks: tasks[];
    totalCount: number;
  }>({
    tasks: [],
    totalCount: 0,
  });
  const [pageApi, setPageApi] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const gettaskData = async () => {
    setIsLoading(true); // Set loading state to true while fetching data
    let response = await fetchtaskData(pageApi);
    settaskData(response);
    setIsLoading(false); // Set loading state to false after fetching data
  };

  useEffect(() => {
    gettaskData();
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
        <PaginationIcons count={taskData.totalCount} setPageApi={setPageApi} />
      </Stack>
      {isLoading ? ( // Render skeleton if loading
        <ReportTaskTableSkeleton />
      ) : (
        <ReportTaskTable task={taskData.tasks} totalCount={pageApi} />
      )}
    </>
  );
};

export default ReportTaskTableHandler;
