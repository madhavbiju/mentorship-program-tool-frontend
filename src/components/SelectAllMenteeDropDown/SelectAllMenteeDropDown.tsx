import React, { useEffect } from "react";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { menteeList } from "./Types";

interface Props {
  menteeListData: menteeList[];
  setProgramID: React.Dispatch<React.SetStateAction<number>>;
}

const SelectAllMenteedropDown: React.FC<Props> = ({
  menteeListData,
  setProgramID,
}) => {
  const [value, setValue] = React.useState<string | null>("");
  useEffect(() => {
    const selectedMenteeName = value;

    // Find the corresponding mentee object
    const selectedMentee = menteeListData.find(
      (mentee) =>
        `${mentee.firstName} ${mentee.lastName}` === selectedMenteeName
    );

    // If a matching mentee is found, set the programID
    if (selectedMentee) {
      setProgramID(selectedMentee.programID);
    }
  }, [value]);
  return (
    <div>
      <Select
        placeholder="Mentee"
        size="sm"
        onChange={(e, newValue) => {
          if (typeof newValue === "string" || newValue === null) {
            setValue(newValue);
          }
        }}
      >
        {menteeListData.map((mentee) => (
          <Option
            key={mentee.programID}
            value={`${mentee.firstName} ${mentee.lastName}`}
          >
            {`${mentee.firstName} ${mentee.lastName}`}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default SelectAllMenteedropDown;
