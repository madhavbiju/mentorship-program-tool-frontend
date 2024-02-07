import React, { useEffect, useState } from "react";
import MenteesListCard from "./MenteesListCard";
import { Mentee } from "./Types";
import { fetchMenteeData } from "./Api/getMenteeData";
import PaginationButtons from "../Pagination/Pagination";
import MentorDashboardSkeleton from "../../pages/mentor/dashboard/MentorDashboardSkeleton";

const MenteesListHandler = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [menteeData, setMenteeData] = useState<{
    mentees: Mentee[];
    total: number;
  }>({
    mentees: [],
    total: 0,
  });
  const [pageApi, setPageApi] = useState<number>(1);

  const getMenteeData = async () => {
    setIsLoading(true); // Set loading state to true while fetching data
    let response = await fetchMenteeData(pageApi);
    setMenteeData(response);
    console.log(menteeData.total)
    setIsLoading(false); // Set loading state to false after fetching data
  };

  useEffect(() => {
    getMenteeData();
  }, [pageApi]);

  return (
    <>
    {isLoading ? ( // Render skeleton if loading
        <MentorDashboardSkeleton />
      ) : (
        <MenteesListCard mentees={menteeData.mentees}  totalCount={menteeData.total} />
      )}
      
      <br />
      <PaginationButtons count={menteeData.total} setPageApi={setPageApi} />
    </>
  );
};

export default MenteesListHandler;
