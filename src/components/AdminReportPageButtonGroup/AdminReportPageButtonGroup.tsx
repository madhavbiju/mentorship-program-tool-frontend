import { Button, ToggleButtonGroup } from "@mui/joy";
import React, { useState } from "react";

interface AdminReportPageButtonGroupProps {
  defaultReport: string;
  onChange: (newValue: string) => void;
}

const AdminReportPageButtonGroup: React.FC<AdminReportPageButtonGroupProps> = ({
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
      <Button value="Overall Report">Overall Report</Button>
      <Button value="Mentor Report">Mentor Report</Button>
      <Button value="Mentee Report">Pair Report</Button>
    </ToggleButtonGroup>
  );
};

export default AdminReportPageButtonGroup;
