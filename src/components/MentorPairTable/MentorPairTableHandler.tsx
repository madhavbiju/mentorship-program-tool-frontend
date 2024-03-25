import { Typography } from "@mui/joy";
import { Stack } from "@mui/material";
import { useState, useEffect } from "react";
import { programs } from "./Types/Index";
import PaginationButtons from "../Pagination/Pagination";
import { fetchPairData } from "./API/fetchPairData";
import MentorPairTable from "./MentorPairTable";
import MentorPairTableSkeleton from "./MentorPairTableSkeleton";

const MentorPairTableHandler = ({
  employeeId,
}: {
  sort: string;
  employeeId: number;
}) => {
  const [programData, settaskData] = useState<{
    programs: programs[];
    totalCount: number;
  }>({
    programs: [],
    totalCount: 0,
  });
  const [pageApi, setPageApi] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const getprogramdata = async () => {
    setIsLoading(true); // Set loading state to true while fetching data
    let response = await fetchPairData(employeeId, pageApi);
    settaskData(response);
    setIsLoading(false); // Set loading state to false after fetching data
  };

  useEffect(() => {
    getprogramdata();
  }, [pageApi, employeeId]);
  return (
    <>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 1,
        }}
      >
        {isLoading ? ( // Render skeleton if loading
          <MentorPairTableSkeleton />
        ) : (
          <>
            {programData.programs.length === 0 ? ( // Check if no programs
              <Typography>No programs to display</Typography>
            ) : (
              <MentorPairTable
                program={programData.programs}
                totalCount={programData.totalCount}
              />
            )}
          </>
        )}

        <br />
        <PaginationButtons
          total={programData.totalCount}
          perPage={6}
          setPageApi={setPageApi}
        />
      </Stack>
    </>
  );
};

export default MentorPairTableHandler;
