import { useState } from "react";
import Swal from "sweetalert2";
import CreatePairCard from "./CreatePairCard";
import { programType } from "./Types";
import { postProgramData } from "./Api/postProgram";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const CreatePairCardHandler = () => {
  const history = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [mentorID, setMentorID] = useState(0);
  const [menteeID, setMenteeID] = useState(0);
  const EmployeeID = sessionStorage.getItem("EmployeeId");
  function convertToProgramType(input: any): programType {
    return {
      mentorID: input.mentorID,
      menteeID: input.menteeID,
      startDate: moment.utc(input.startDate).format(),
      endDate: moment.utc(input.endDate).format(),
      createdBy: parseInt(EmployeeID!),
      programStatus: 1,
      programName: input.programName,
      createdTime: new Date().toISOString(),
    };
  }

  const sendProgramData = async (formatedProgramData: programType) => {
    setIsLoading(true);
    let response = await postProgramData(formatedProgramData);
    setIsLoading(false);
    // Use SweetAlert2 to show success or error message based on response
    if (response?.status == 201 || 200) {
      Swal.fire("Success", "Program created successfully!", "success");
      history("/admin/pairs");
    } else {
      Swal.fire("Error", "Failed to create program", "error");
    }
  };

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append("mentorID", mentorID.toString());
    formData.append("menteeID", menteeID.toString());
    const formDataObject: Record<string, string> = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value as string;
    });
    console.log("hi",formDataObject)
    const formatedProgramData: programType =
      convertToProgramType(formDataObject);
    sendProgramData(formatedProgramData);
  };

  return (
    <CreatePairCard
      submit={submit}
      setMentorID={setMentorID}
      setMenteeID={setMenteeID}
    />
  );
};

export default CreatePairCardHandler;
