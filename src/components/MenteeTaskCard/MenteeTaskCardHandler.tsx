import React, { useEffect, useState } from "react";
import MenteeTaskCard from "./MenteeTaskCard";
import { Tasks } from "./Types";
import { fetchTaskData } from "./Api/getTaskData";
import PaginationButtons from "../Pagination/Pagination";

const MenteeTaskCardHandler = ({
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
    console.log(menteeTaskData);
    setIsLoading(false); // Set loading state to false after fetching data
  };

  useEffect(() => {
    getTaskData();
  }, [pageApi, selectedSortOption, selectedFilterOption]);

  return (
    <>
      {isLoading ? ( // Render skeleton if loading
        <></>
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

export default MenteeTaskCardHandler;
