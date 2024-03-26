import React, { useEffect, useState } from "react";
import SubmitTask from "./SubmitTask";
import { useParams } from "react-router-dom";
import { fetchTaskData } from "./Api/getTaskData";
import { Tasks } from "../../../components/MentorTaskCard/Types";
interface Params {
  taskId: number;
  [key: string]: any;
}
const SubmitTaskHandler = () => {
  const [taskData, setTaskData] = useState<Tasks>({
    taskID: 0,
    taskName: "",
    menteeFirstName: "",
    menteeLastName: "",
    title: "",
    taskDescription: "",
    taskStatus: 0,
    endDate: "",
  });
  const { taskId } = useParams<Params>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getTaskData = async () => {
    console.log("hi", taskId);

    setIsLoading(true); // Set loading state to true while fetching data
    let response = await fetchTaskData(taskId!);

    setTaskData(response);
    setIsLoading(false); // Set loading state to false after fetching data
  };

  useEffect(() => {
    getTaskData();
  }, []);
  return (
    <>
      {isLoading ? ( // Render skeleton if loading
        <></>
      ) : (
        <SubmitTask detailsOfTask={taskData} />
      )}
    </>
  );
};

export default SubmitTaskHandler;
