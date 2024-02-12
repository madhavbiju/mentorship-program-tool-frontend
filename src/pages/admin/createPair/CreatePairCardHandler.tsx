import { useState } from "react";
import Swal from "sweetalert2";
import CreatePairCard from "./CreatePairCard";
import { programType } from "./Types";
import { postProgramData } from "./Api/postProgram";

const CreatePairCardHandler = () => {

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [programData, setProgramData] = useState({
    mentorID: null,
    menteeID: null,
    createdBy: 1,
    startDate: null,
    endDate: null,
    programName: "",
    programStatus: 1,
  });

  function convertToProgramType(input: any): programType {
    return {
      mentorID: input.mentorID,
      menteeID: input.menteeID,
      startDate: input.scheduleDate.toISOString(),
      endDate: input.scheduleDate.toISOString(),
      createdBy: input.createdBy,
      programStatus: input.programStatus,
      programName: input.programName,
    };
  }

  const sendProgramData = async (formatedProgramData: programType) => {
    setIsLoading(true);
    let response = await postProgramData(formatedProgramData);
    setIsLoading(false);
    // Use SweetAlert2 to show success or error message based on response
    if (response?.status == 201) {
      Swal.fire("Success", "Program created successfully!", "success");
    } else {
      Swal.fire("Error", "Failed to create program", "error");
    }
  };

  const handleSubmit = async () => {
    // Convert program data to programType
    const formatedProgramData: programType = convertToProgramType(programData);

    console.log(programData);
    console.log(formatedProgramData);

    sendProgramData(formatedProgramData);
    // // Call sendProgramData after conversion is completed
  };

  const handleInputChange = (key: string, value: any) => {
    setProgramData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  return (
    <CreatePairCard onSubmit={handleSubmit} onChange={handleInputChange} />
  );
};

export default CreatePairCardHandler;
