import * as React from "react";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Table, { TableProps } from "@mui/joy/Table";

const MenteeProgramTable = () => {
  function createData(
    menteeName: string,
    programName: string,
    endDate: string
  ) {
    return { menteeName, programName, endDate };
  }

  const rows = [
    createData("Shiyas", "React", "12/05/2024"),
    createData("Madhav", ".Net", "15/05/2024"),
    createData("Aadarsh", "Angular", "25/05/2024"),
    createData("Mehanoor", "Node Js", "05/05/2024"),
  ];

  return (
    <div>
      <FormControl orientation="horizontal"></FormControl>
      <Table>
        <thead>
          <tr>
            <th>Mentee Name</th>
            <th>Program Name</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.menteeName}>
              <td>{row.menteeName}</td>
              <td>{row.programName}</td>
              <td>{row.endDate}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MenteeProgramTable;
