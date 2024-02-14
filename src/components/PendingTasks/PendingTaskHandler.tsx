import React, { useEffect, useState } from "react";
import MentorDashboardSkeleton from "../../pages/mentor/dashboard/MentorDashboardSkeleton";
import { Task } from "./Types";
import { Stack, Typography } from "@mui/joy";
import PaginationIcons from "../Pagination/PaginationIcons";
import PendingTask from "./PendingTask";
import { fetchPendingTaskData } from "./Api/getPendingTask";

const PendingTaskHandler = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [taskData, setTaskData] = useState<{
    tasks: Task[];
    totalCount: number;
  }>({
    tasks: [],
    totalCount: 0,
  });
  const [pageApi, setPageApi] = useState<number>(1);
  const EmployeeID = sessionStorage.getItem("EmployeeId");
  const getTaskData = async () => {
    setIsLoading(true); // Set loading state to true while fetching data
    let response = await fetchPendingTaskData(pageApi, EmployeeID!);
    setTaskData(response);
    setIsLoading(false); // Set loading state to false after fetching data
  };

  useEffect(() => {
    getTaskData();
  }, []);

  return (
    <>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          //   alignItems: "center",
          mb: 1,
        }}
      >
        <Stack>
          <Typography
            level="h3"
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            Pending Tasks
          </Typography>
        </Stack>
        <PaginationIcons
          total={taskData.totalCount}
          setPageApi={setPageApi}
          perPage={5}
        />
      </Stack>
      {isLoading ? ( // Render skeleton if loading
        <MentorDashboardSkeleton />
      ) : (
        <PendingTask tasks={taskData.tasks} />
      )}
    </>
  );
};

export default PendingTaskHandler;
