import * as React from 'react';
import Table from '@mui/joy/Table';
import { Sheet, Typography } from '@mui/joy';

function createData(
  programname: string,
  mentor: number,
  mentee: number,
  enddate: number,
) {
  return { programname, mentor, mentee, enddate };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24),
  createData('Ice cream sandwich', 237, 9.0, 37),
  createData('Eclair', 262, 16.0, 24),
  createData('Cupcake', 305, 3.7, 67),
  createData('Gingerbread', 356, 16.0, 49),
];

export default function DashboardTable() {
  return (
    <>
    <Typography level="body-lg" mb={2}>
          Programs
        </Typography>
    <Sheet
    variant="outlined"
    sx={{ width: '100%', boxShadow: 'sm', borderRadius: 'sm' }}
  >
    
    <Table hoverRow>
      <thead>
        <tr>
          <th style={{ width: '40%' }}>Program Name</th>
          <th>Mentor</th>
          <th>Mentee</th>
          <th>End Date</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.programname}>
            <td>{row.programname}</td>
            <td>{row.mentor}</td>
            <td>{row.mentee}</td>
            <td>{row.enddate}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    </Sheet>
    </>
  );
}
