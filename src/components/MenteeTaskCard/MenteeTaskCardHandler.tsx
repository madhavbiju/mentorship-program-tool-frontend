import React, { useEffect, useState } from "react";

import MentorDashboardSkeleton from "../../pages/mentor/dashboard/MentorDashboardSkeleton";

import PaginationButtons from "../Pagination/Pagination";
import { fetchTaskData } from "./API/fetchTaskData";
import { Tasks } from "./Types/Index";
import MenteeTaskCard from "./MenteeTaskCard";

const MentorTaskCardHandler = ({
  selectedSortOption,
  selectedFilterOption,
}: any) => {
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
    let response = await fetchTaskData(
      pageApi,
      selectedSortOption,
      selectedFilterOption
    );
    setMenteeTaskData(response);
    setIsLoading(false); // Set loading state to false after fetching data
  };

  useEffect(() => {
    getTaskData();
  }, [pageApi, selectedSortOption, selectedFilterOption]);

  return (
    <>
      {isLoading ? ( // Render skeleton if loading
        <MentorDashboardSkeleton />
      ) : (
        <MenteeTaskCard
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
