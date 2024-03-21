import React, { useEffect, useState } from "react";
import SubmittedTask from "./SubmittedTask";
import MentorDashboardSkeleton from "../../pages/mentor/dashboard/MentorDashboardSkeleton";
import { Task } from "./Types";
import { fetchTaskData } from "./Api/getSubmittedTaskData";
import PaginationButtons from "../Pagination/Pagination";
import { Box, Card, CardCover, Sheet, Stack, Typography } from "@mui/joy";
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
        }}
      >
        <Typography
          level="h3"
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          Submited Tasks
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
              <>
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
                  <Typography>No Submitted Tasks</Typography>
                </Stack>
              </>
            ) : (
              <SubmittedTask
                tasks={taskData.tasks}
                totalCount={taskData.totalCount}
              />
            )}
          </Sheet>
        </>
      )}
    </>
  );
};

export default SubmittedTaskHandler;
