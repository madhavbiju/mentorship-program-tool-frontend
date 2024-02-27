import React, { useState } from "react";
import moment from "moment";
import { taskType } from "./Types";
import Swal from "sweetalert2";
import CreateTasks from "./CreateTasks";
import { posttaskData } from "./API/postTasks";
import { useNavigate } from "react-router-dom";

const CreatetaskHandler = () => {
  const now = new Date();
  const formattedDate = now.toISOString();
  const history = useNavigate();
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
  const EmployeeID = sessionStorage.getItem("EmployeeId");
  function convertTotaskType(input: any): taskType {
    return {
      programID: input.programID,
      title: input.title,
      taskDescription: input.description,
      startDate: new Date().toISOString(),
      endDate: moment.utc(input.endDate).format(),
      referenceMaterialFilePath: "filepath",
      taskStatus: 1,
      createdBy: parseInt(EmployeeID!),
    };
  }

  const sendtaskData = async (formatedtaskData: taskType) => {
    setIsLoading(true);

    let response = await posttaskData(formatedtaskData);
    setIsLoading(false);
    // Use SweetAlert2 to show success or error message based on response
    if (response?.status == 200) {
      Swal.fire("Success", "task created successfully!", "success");
      history("/mentor/tasks");
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

  const [programID, setProgramID] = useState(0);
  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append("programID", programID.toString());
    const formDataObject: Record<string, string> = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value as string;
    });
    const formatedtaskData: taskType = convertTotaskType(formDataObject);
    await sendtaskData(formatedtaskData);
  };

  return <CreateTasks submit={submit} setProgramID={setProgramID} />;
};

export default CreatetaskHandler;
