import React, { useEffect, useState } from "react";
import SubmittedTask from "./SubmittedTask";
import MentorDashboardSkeleton from "../../pages/mentor/dashboard/MentorDashboardSkeleton";
import { Task } from "./Types";
import { fetchTaskData } from "./Api/getSubmittedTaskData";
import PaginationButtons from "../Pagination/Pagination";
import { Stack, Typography } from "@mui/joy";
import PaginationIcons from "../Pagination/PaginationIcons";

const SubmittedTaskHandler = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [taskData, setTaskData] = useState<{
    tasks: Task[];
    totalCount: number;
  }>({
    tasks: [],
    totalCount: 0,
  });
  const [pageApi, setPageApi] = useState<number>(1);

  const getTaskData = async () => {
    setIsLoading(true); // Set loading state to true while fetching data
    let response = await fetchTaskData(pageApi);
    setTaskData(response);
    setIsLoading(false); // Set loading state to false after fetching data
  };

  useEffect(() => {
    getTaskData();
  }, [pageApi]);
  return (
    <>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          // alignItems: "center", // Uncomment this line if needed
          mb: 1,
        }}
      >
        <Typography
          level="h3"
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          Submitted Tasks
        </Typography>
        <PaginationIcons
          total={taskData.totalCount}
          setPageApi={setPageApi}
          perPage={5}
        />
      </Stack>
      {isLoading ? ( // Render skeleton if loading
        <MentorDashboardSkeleton />
      ) : (
        <>
          {taskData.tasks.length === 0 ? (
            <Typography>No Submitted Tasks</Typography>
          ) : (
            <SubmittedTask
              tasks={taskData.tasks}
              totalCount={taskData.totalCount}
            />
          )}
        </>
      )}
    </>
  );
};

export default SubmittedTaskHandler;
