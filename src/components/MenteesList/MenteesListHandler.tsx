import React, { useEffect, useState } from "react";
import MenteesListCard from "./MenteesListCard";
import { Mentee } from "./Types";
import { fetchMenteeData } from "./Api/getMenteeData";
import PaginationButtons from "../Pagination/Pagination";
import MentorDashboardSkeleton from "../../pages/mentor/dashboard/MentorDashboardSkeleton";

const MenteesListHandler = ({
  selectedSortOption,
  selectedFilterOption,
}: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [menteeData, setMenteeData] = useState<{
    mentees: Mentee[];
    totalCount: number;
  }>({
    mentees: [],
    totalCount: 0,
  });
  const [pageApi, setPageApi] = useState<number>(1);
  const EmployeeID = sessionStorage.getItem("EmployeeId");
  const getMenteeData = async () => {
    setIsLoading(true); // Set loading state to true while fetching data
    let response = await fetchMenteeData(
      EmployeeID!,
      pageApi,
      selectedSortOption,
      selectedFilterOption
    );
    setMenteeData(response);
    setIsLoading(false); // Set loading state to false after fetching data
  };

  useEffect(() => {
    getMenteeData();
  }, [pageApi, selectedSortOption, selectedFilterOption]);

  return (
    <>
      {isLoading ? ( // Render skeleton if loading
        <MentorDashboardSkeleton />
      ) : (
        <MenteesListCard
          mentees={menteeData.mentees}
          totalCount={menteeData.totalCount}
        />
      )}

      <br />
      <PaginationButtons
        total={menteeData.totalCount}
        setPageApi={setPageApi}
        perPage={5}
      />
    </>
  );
};

export default MenteesListHandler;
