import { useState } from "react";
import CreateMeeting from "./CreateMeeting";
import { postMeetingData } from "./Api/postMeeting";
import { meetingType } from "./Types";
import Swal from "sweetalert2";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const CreateMeetingHandler = () => {
  const EmployeeID = sessionStorage.getItem("EmployeeId");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const history = useNavigate();
  function convertToMeetingType(input: any): meetingType {
    return {
      programID: parseInt(input.programID),
      title: input.title,
      scheduleDate: input.scheduledDate + "T00:00:00.000Z",
      createdBy: parseInt(EmployeeID!),
      meetingModeID: 1,
      createdTime: new Date().toISOString(),
      startTime: moment.utc(input.startTime, "HH:mm").format(),
      endTime: moment.utc(input.endTime, "HH:mm").format(),
      agenda: input.agenda,
      meetingStatus: 7,
    };
  }

  const sendMeetingData = async (formatedMeetingData: meetingType) => {
    setIsLoading(true);
    let response = await postMeetingData(formatedMeetingData);
    setIsLoading(false);
    // Use SweetAlert2 to show success or error message based on response
    if (response && (response.status === 200 || response.status === 201)) {
      Swal.fire("Success", "Meeting created successfully!", "success");
      history("/mentor/tasks");
    } else {
      Swal.fire("Error", "Failed to create meeting", "error");
    }
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

    const formatedMeetingData: meetingType =
      convertToMeetingType(formDataObject);
    console.log(formatedMeetingData);
    await sendMeetingData(formatedMeetingData);
  };

  return <CreateMeeting submit={submit} setProgramID={setProgramID} />;
};

export default CreateMeetingHandler;
