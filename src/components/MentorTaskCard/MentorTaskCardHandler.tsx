import React, { useEffect, useState } from "react";
import MentorTaskCard from "./MentorTaskCard";
import { Tasks } from "./Types";
import MentorDashboardSkeleton from "../../pages/mentor/dashboard/MentorDashboardSkeleton";
import { fetchTaskData } from "./Api/getTaskData";
import PaginationButtons from "../Pagination/Pagination";

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
  const EmployeeID = sessionStorage.getItem("EmployeeId");
  
  const getTaskData = async () => {
    setIsLoading(true); // Set loading state to true while fetching data
    let response = await fetchTaskData(
      EmployeeID!,
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
