import React, { useState, useEffect } from "react";
import { Stack, Typography, Skeleton, Card, CardContent } from "@mui/joy";
import { getMentorList } from "./API/getMentorList";
import { mentorList, programStateProp } from "./Types";
import SelectMentorDropDown from "./SelectMentorDropDown";

const MentorDropDownHandler = ({ setProgramID }: programStateProp) => {
  const mentor: mentorList = {
    programID: 0,
    employeeID: 0,
    firstName: "",
    lastName: "",
  };

  const [mentorListData, setMentorListData] = useState<mentorList[]>([]);
  const [mentorID, setMentorID] = useState<number>(2);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getMentorListData = async () => {
    setIsLoading(true); // Set loading state to true while fetching data
    let response = await getMentorList(mentorID);
    setMentorListData(response);
    setIsLoading(false); // Set loading state to false after fetching data
  };

  useEffect(() => {
    getMentorListData();
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
          <SelectMentorDropDown
            mentorListData={mentorListData}
            setProgramID={setProgramID}
          />
        )}
      </Stack>
    </>
  );
};
export default MentorDropDownHandler;
