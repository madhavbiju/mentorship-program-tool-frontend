// MenteesDropdown.tsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { GetMenteeNames } from "./API/GetMenteeNames";
import SelectMenteeDropDown from "./SelectMenteeDropDown";
// Import your API function

const SelectMenteeDropDownHandler: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [menteesData, setMenteesData] = useState<any>({ mentees: [] }); // Initialize menteesData state

  const getMenteesData = async () => {
    setIsLoading(true);
    try {
      const response = await GetMenteeNames(1); // Call the API function
      setMenteesData(response); // Update menteesData state with response data
    } catch (error) {
      console.error("Error fetching mentees data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMenteesData();
  }, []);

  return (
    <SelectMenteeDropDown isLoading={isLoading} menteesData={menteesData} />
  );
};

export default SelectMenteeDropDownHandler;
