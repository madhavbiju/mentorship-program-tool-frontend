import React, { useEffect, useState } from "react";
import MentorTaskCard from "./MentorTaskCard";
import { Tasks } from "./Types";
import MentorDashboardSkeleton from "../../pages/mentor/dashboard/MentorDashboardSkeleton";
import { fetchTaskData } from "./Api/getTaskData";
import PaginationButtons from "../Pagination/Pagination";

const MentorTaskCardHandler = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [menteeTaskData, setMenteeTaskData] = useState<{
    tasks: Tasks[];
    totalCount: number;
  }>({
    tasks: [],
    totalCount: 0,
  });
  const [pageApi, setPageApi] = useState<number>(1);

  const getTaskData = async () => {
    setIsLoading(true); // Set loading state to true while fetching data
    let response = await fetchTaskData(pageApi);
    setMenteeTaskData(response);
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
        <MentorTaskCard
          tasks={menteeTaskData.tasks}
          totalCount={menteeTaskData.totalCount}
        />
      )}

      <br />
      <PaginationButtons
        total={menteeTaskData.totalCount}
        setPageApi={setPageApi}
        perPage={5}
      />
    </>
  );
};

export default MentorTaskCardHandler;
