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
  }>({
    tasks: [],
  });
  const [pageApi, setPageApi] = useState<number>(1);

  const getTaskData = async () => {
    setIsLoading(true); // Set loading state to true while fetching data
    let response = await fetchPendingTaskData(pageApi);
    setTaskData({ tasks: response });
    console.log("pth-responsess", response);
    setIsLoading(false); // Set loading state to false after fetching data
  };

  useEffect(() => {
    getTaskData();
    console.log("tasksdata.tasks getTask", taskData.tasks);
  }, []);

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
        {/* <PaginationIcons
          total={taskData.totalCount}
          setPageApi={setPageApi}
          perPage={5}
        /> */}
      </Stack>
      {isLoading ? ( // Render skeleton if loading
        <MentorDashboardSkeleton />
      ) : (
        <>
          {taskData.tasks.length === 0 ? (
            <Typography>No Pending Tasks</Typography>
          ) : (
            <PendingTask tasks={taskData.tasks} />
          )}
        </>
      )}
    </>
  );
};

export default PendingTaskHandler;
