// SelectMenteeDropDown.tsx
import React from "react";

interface Props {
  isLoading: boolean;
  menteesData: { mentees: any[] };
}

const SelectMenteeDropDown: React.FC<Props> = ({ isLoading, menteesData }) => {
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <select>
          <option value="">Select Mentee</option>
          {menteesData.mentees.map((mentee) => (
            <option key={mentee.employeeID} value={mentee.employeeID}>
              {mentee.firstName} {mentee.lastName}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default SelectMenteeDropDown;
