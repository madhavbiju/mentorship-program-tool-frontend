import React, { useEffect, useState } from "react";
import FormControl from "@mui/joy/FormControl";
import Table, { TableProps } from "@mui/joy/Table";

interface Task {
  taskID: number;
  taskName: string;
  startDate: string;
  endDate: string;
  taskStatus: number;
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1; // Month is zero-based
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const MenteeTasksTable = () => {
  const [taskData, setTaskData] = useState<Task[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://localhost:7259/api/task/Program/3,1?page=1"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: Task[] = await response.json();
        setTaskData(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData()
      .then(() => {
        console.log("Data fetched successfully"); // You can perform additional actions after data fetching is completed
      })
      .catch((error) => {
        console.error("Error in fetchData(): ", error); // Catch any errors that occur during data fetching
      });
  }, []);

  return (
    <div>
      <FormControl orientation="horizontal"></FormControl>
      <Table>
        <thead>
          <tr>
            <th>Task Title</th>
            <th>Assigned Date</th>
            <th>Submission Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {taskData.map((task) => (
            <tr key={task.taskID}>
              <td>{task.taskName}</td>
              <td>{formatDate(task.startDate)}</td>
              <td>{formatDate(task.endDate)}</td>
              <td>
                {task.taskStatus === 1
                  ? "Active"
                  : task.taskStatus === 2
                  ? "Inactive"
                  : task.taskStatus === 6
                  ? "Submitted"
                  : "Null"}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MenteeTasksTable;
