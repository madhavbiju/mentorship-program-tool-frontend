import React, { useState, useEffect } from "react";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";

interface Mentee {
  employeeID: number;
  firstName: string;
  lastName: string;
  programName: string;
  startDate: string;
  endDate: string;
}
const SelectMenteeDropDown = () => {
  const [mentees, setMentees] = useState([]);

  useEffect(() => {
    // Fetch mentee data from the API
    fetch("https://localhost:7259/api/mentee/mentor/2")
      .then((response) => response.json())
      .then((data) => {
        // Extract mentee names from the response and set them in state
        const menteeNames = data.map(
          (mentee: { firstName: any }) => mentee.firstName
        );
        setMentees(menteeNames);
      })
      .catch((error) => {
        console.error("Error fetching mentees:", error);
      });
  }, []);

  return (
    <div>
      <Select placeholder="Mentee" size="sm">
        {/* Render options based on the fetched mentees */}
        {mentees.map((menteeName, index) => (
          <Option key={index} value={menteeName}>
            {menteeName}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default SelectMenteeDropDown;
