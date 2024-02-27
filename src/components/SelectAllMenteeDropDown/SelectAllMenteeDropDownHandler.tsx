import React, { useState, useEffect } from "react";
import { Stack, Typography, Skeleton, Card, CardContent } from "@mui/joy";
import SelectAllMenteeDropDown from "./SelectAllMenteeDropDown";
import { menteeList, programStateProp } from "./Types";
import { getMenteeList } from "./API/getMenteeList";

const SelectAllMenteedropDownHandler = ({ setProgramID }: programStateProp) => {
  const mentee: menteeList = {
    programID: 0,
    employeeID: 0,
    firstName: "",
    lastName: "",
  };

  const [menteeListData, setMenteeListData] = useState<menteeList[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getMenteeListData = async () => {
    setIsLoading(true); // Set loading state to true while fetching data
    let response = await getMenteeList();
    setMenteeListData(response);
    console.log(" Handler");
    console.log(response);
    setIsLoading(false); // Set loading state to false after fetching data
  };

  useEffect(() => {
    getMenteeListData();
  }, []);

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
        {isLoading ? (
          <Skeleton width={200} height={40} />
        ) : (
          <SelectAllMenteeDropDown
            menteeListData={menteeListData}
            setProgramID={setProgramID}
          />
        )}
      </Stack>
    </>
  );
};
export default SelectAllMenteedropDownHandler;
