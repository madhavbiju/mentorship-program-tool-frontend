import React, { useEffect, useState } from "react";
import MentorDashboardSkeleton from "../../pages/mentor/dashboard/MentorDashboardSkeleton";
import { Task } from "./Types";
import { Sheet, Stack, Typography } from "@mui/joy";
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
        }}
      >
        <Typography
          level="h3"
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          Pending Tasks
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
          <Sheet
            variant="outlined"
            sx={{
              mt: 1,
              flex: 1,
              borderRadius: "sm",
              height: "100%",
              padding: 1,
            }}
          >
            {taskData.tasks.length === 0 ? (
              <Stack
                justifyContent="center"
                alignItems="center"
                spacing={1}
                sx={{ display: { xs: "none", sm: "flex" } }}
              >
                <img
                  height={300}
                  src="/Assets/file.png" // Specify your default image path
                  srcSet="/Assets/file.png"
                  loading="lazy"
                  alt=""
                />
                <Typography>No Pending Tasks</Typography>
              </Stack>
            ) : (
              <PendingTask tasks={taskData.tasks} />
            )}
          </Sheet>
        </>
      )}
    </>
  );
};

export default PendingTaskHandler;
