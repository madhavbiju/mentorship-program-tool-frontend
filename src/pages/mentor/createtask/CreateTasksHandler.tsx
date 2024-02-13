import React, { useState } from "react";
import moment from "moment";
import { taskType } from "./Types";
import Swal from "sweetalert2";
import CreateTasks from "./CreateTasks";
import { posttaskData } from "./API/postTasks";

const CreatetaskHandler = () => {
  const now = new Date();
  const formattedDate = now.toISOString();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [taskData, settaskData] = useState({
    programID: "",
    title: "",
    taskDescription: "",
    startDate: "",
    endDate: "",
    referenceMaterialFilePath: "",
    taskStatus: 1,
    createdBy: 1,
  });

  function convertTotaskType(input: any): taskType {
    return {
      programID: input.programID,
      title: input.title,
      taskDescription: input.taskDescription,
      startDate: input.startDate,
      endDate: input.endDate.toISOString(),
      referenceMaterialFilePath: "abcdefg",
      taskStatus: 1,
      createdBy: 1,
    };
  }

  const sendtaskData = async (formatedtaskData: taskType) => {
    setIsLoading(true);
    console.log(taskData);
    console.log(formatedtaskData);
    let response = await posttaskData(formatedtaskData);
    setIsLoading(false);
    // Use SweetAlert2 to show success or error message based on response
    if (response?.status == 200) {
      Swal.fire("Success", "task created successfully!", "success");
    } else {
      Swal.fire("Error", "Failed to create task", "error");
    }
  };

  const handleSchedule = async () => {
    settaskData((prevData) => ({
      ...prevData,
      ["startDate"]: formattedDate,
    }));

    // Convert task data to taskType
    const formatedtaskData: taskType = convertTotaskType(taskData);

    // Call sendtaskData after conversion is completed
    await sendtaskData(formatedtaskData);
  };

  const handleInputChange = (key: string, value: any) => {
    settaskData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  return <CreateTasks onCreate={handleSchedule} onChange={handleInputChange} />;
};

export default CreatetaskHandler;
