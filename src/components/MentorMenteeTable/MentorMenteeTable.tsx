import * as React from "react";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Table, { TableProps } from "@mui/joy/Table";

const MentorMenteeTable = () => {
  function createData(mentorName: string, menteeName: string, endDate: string) {
    return { mentorName, menteeName, endDate };
  }

  const rows = [
    createData("Shiyas", "Tushar", "12/05/2024"),
    createData("Madhav", "TopG", "15/05/2024"),
    createData("Aadarsh", "Aljo", "25/05/2024"),
    createData("Mehanoor", "Fidha", "05/05/2024"),
  ];

  return (
    <div>
      <FormControl orientation="horizontal"></FormControl>
      <Table>
        <thead>
          <tr>
            <th>Mentor Name</th>
            <th>Mentee Name</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.mentorName}>
              <td>{row.mentorName}</td>
              <td>{row.menteeName}</td>
              <td>{row.endDate}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MentorMenteeTable;
