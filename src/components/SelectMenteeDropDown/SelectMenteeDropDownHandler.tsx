import React, { useState, useEffect } from "react";
import { Stack, Typography, Skeleton, Card, CardContent } from "@mui/joy";
import { menteeList, programStateProp } from "./Types";
import SelectMenteeDropDown from "./SelectMenteeDropDown";
import { fetchMenteeList } from "./Api/getMenteeList";

const MenteeDropDownHandler = ({ setProgramID }: programStateProp) => {
  const mentee: menteeList = {
    programID: 0,
    employeeID: 0,
    firstName: "",
    lastName: "",
  };

  const [menteeListData, setMenteeListData] = useState<menteeList[]>([]);

  const EmployeeID = sessionStorage.getItem("EmployeeId");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getMenteeListData = async () => {
    setIsLoading(true); // Set loading state to true while fetching data
    let response = await fetchMenteeList(EmployeeID!);
    setMenteeListData(response);
    setIsLoading(false); // Set loading state to false after fetching data
  };

  useEffect(() => {
    getMenteeListData();
  }, []);

  return (
    <>
      {isLoading ? (
        <Skeleton width={200} height={40} />
      ) : (
        <SelectMenteeDropDown
          menteeListData={menteeListData}
          setProgramID={setProgramID}
        />
      )}
    </>
  );
};
export default MenteeDropDownHandler;
