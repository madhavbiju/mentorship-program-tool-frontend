import React, { useState, useEffect } from "react";
import axios from "axios";
import { Stack, Typography, Skeleton, Card, CardContent } from "@mui/joy";
import PaginationIcons from "../Pagination/PaginationIcons";
import MentorReportTaskTable from "./MentorReportTaskTable";
import MentorReportTaskTableSkeleton from "./MentorReportTaskTableSkeleton";
import { fetchtaskData } from "./API/fetchtaskData";
import { tasks } from "./Types/Index";

const MentorReportTaskTableHandler = ({
  employeeId,
}: {
  sort: string;
  employeeId: number;
}) => {
  const [taskData, settaskData] = useState<{
    tasks: tasks[];
    totalCount: number;
  }>({
    tasks: [],
    totalCount: 0,
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pageApi, setPageApi] = useState<number>(1);

  const gettaskData = async () => {
    setIsLoading(true); // Set loading state to true while fetching data

    let response = await fetchtaskData(employeeId, pageApi);
    settaskData(response);

    setIsLoading(false); // Set loading state to false after fetching data
  };

  useEffect(() => {
    gettaskData();
  }, [pageApi, employeeId]);
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
      {isLoading ? (
        <MentorReportTaskTableSkeleton />
      ) : (
        <>
          {taskData.tasks.length === 0 ? (
            <Typography>No Task data to display</Typography>
          ) : (
            <MentorReportTaskTable task={taskData.tasks} totalCount={0} />
          )}
        </>
      )}
    </>
  );
};

export default MentorReportTaskTableHandler;
