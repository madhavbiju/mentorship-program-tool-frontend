import React, { useEffect, useState } from "react";
import MenteeTaskCard from "../../../components/MenteeTaskCard/MenteeTaskCard";
import { fetchtaskData } from "./Api/getMenteeTasks";
import { Tasks } from "../../../components/MenteeTaskCard/Types";
import { Grid } from "@mui/joy";

interface TaskProp {
  programID: number;
}

const TasksGrid = ({ programID }: TaskProp) => {
  const [taskData, settaskData] = useState<{
    tasks: Tasks[];
    totalCount: number;
  }>({
    tasks: [],
    totalCount: 0,
  });

  const gettaskData = async () => {
    let response = await fetchtaskData(programID);
    settaskData(response);
  };

  useEffect(() => {
    gettaskData();
  }, [programID]);
  return (
    <Grid sx={{ marginTop: 1 }}>
      <MenteeTaskCard tasks={taskData.tasks} totalCount={taskData.totalCount} />
    </Grid>
  );
};

export default TasksGrid;
