import { Button, ToggleButtonGroup } from "@mui/joy";
import React, { useState } from "react";

interface MentorReportPageButtonGroupProps {
  defaultReport: string;
  onChange: (newValue: string) => void;
}
const MentorReportButtonGroup: React.FC<MentorReportPageButtonGroupProps> = ({
  defaultReport,
  onChange,
}) => {
  const [value, setValue] = useState<string>(defaultReport);
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newValue: string | null
  ) => {
    if (newValue !== null) {
      setValue(newValue);
      onChange(newValue);
    }
  };

  return (
    <ToggleButtonGroup
      size="lg"
      variant="soft"
      value={value}
      onChange={handleChange}
    >
      <Button value="My Report">My Report</Button>
      <Button value="Pair Report">Pair Report</Button>
    </ToggleButtonGroup>
  );
};

export default MentorReportButtonGroup;
