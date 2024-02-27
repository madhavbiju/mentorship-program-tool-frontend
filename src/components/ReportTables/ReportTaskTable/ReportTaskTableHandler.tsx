import React, { useState, useEffect } from "react";
import axios from "axios";
import { Stack, Typography, Skeleton, Card, CardContent } from "@mui/joy";
import { Sort, tasks } from ".";
import PaginationIcons from "../../Pagination/PaginationIcons";
import { fetchtaskData } from "./API/GetReportData";
import ReportTaskTable from "./ReportTaskTable";
import ReportTaskTableSkeleton from "./ReportTaskTableSkeleton";

const ReportTaskTableHandler = ({ sort }: Sort) => {
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
    let response = await fetchtaskData(pageApi, sort);
    settaskData(response);

    setIsLoading(false); // Set loading state to false after fetching data
  };

  useEffect(() => {
    gettaskData();
  }, [pageApi, sort]);
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
        <PaginationIcons
          total={taskData.totalCount}
          perPage={5}
          setPageApi={setPageApi}
        />
      </Stack>
      {isLoading ? ( // Render skeleton if loading
        <ReportTaskTableSkeleton />
      ) : (
        <>
          {taskData.tasks.length === 0 ? ( // Check if no tasks
            <Typography>No Task data to display</Typography>
          ) : (
            <ReportTaskTable task={taskData.tasks} totalCount={pageApi} />
          )}
        </>
      )}
    </>
  );
};

export default ReportTaskTableHandler;
