import React, { useEffect, useState } from "react";
import SubmittedTask from "./SubmittedTask";
import MentorDashboardSkeleton from "../../pages/mentor/dashboard/MentorDashboardSkeleton";
import { Task } from "./Types";
import { fetchTaskData } from "./Api/getSubmittedTaskData";
import PaginationButtons from "../Pagination/Pagination";

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
      {isLoading ? ( // Render skeleton if loading
        <MentorDashboardSkeleton />
      ) : (
        <SubmittedTask
          tasks={taskData.tasks}
          totalCount={taskData.totalCount}
        />
      )}
      <br />
      <PaginationButtons
        total={taskData.totalCount}
        setPageApi={setPageApi}
        perPage={5}
      />
    </>
  );
};

export default SubmittedTaskHandler;
