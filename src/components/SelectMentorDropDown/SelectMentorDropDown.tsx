import React, { useEffect } from "react";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";

import { SelectChangeEvent } from "@mui/material/Select";
import { mentorList } from "./Types/Index";

interface Props {
  mentorListData: mentorList[];
  setProgramID: React.Dispatch<React.SetStateAction<number>>;
}

const SelectMentorDropDown: React.FC<Props> = ({
  mentorListData,
  setProgramID,
}) => {
  const [value, setValue] = React.useState<string | null>("");
  useEffect(() => {
    const selectedMentorName = value;

    // Find the corresponding Mentor object
    const selectedMentor = mentorListData.find(
      (mentor) =>
        `${mentor.firstName} ${mentor.lastName}` === selectedMentorName
    );

    // If a matching Mentor is found, set the programID
    if (selectedMentor) {
      setProgramID(selectedMentor.programID);
    }
  }, [value]);
  return (
    <div>
      <Select
        placeholder="Mentor"
        size="sm"
        onChange={(e, newValue) => setValue(newValue)}
      >
        {mentorListData.map((mentor) => (
          <Option
            key={mentor.programID}
            value={`${mentor.firstName} ${mentor.lastName}`}
          >
            {`${mentor.firstName} ${mentor.lastName}`}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default SelectMentorDropDown;
