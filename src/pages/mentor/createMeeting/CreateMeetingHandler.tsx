import { useState } from "react";
import CreateMeeting from "./CreateMeeting";
import { postMeetingData } from "./Api/postMeeting";
import { meetingType } from "./Types";
import Swal from "sweetalert2";

const CreateMeetingHandler = () => {
  const now = new Date();
  const formattedDate = now.toISOString();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [meetingData, setMeetingData] = useState({
    programID: "",
    title: "",
    scheduleDate: null,
    createdBy: 1,
    meetingModeID: 1,
    createdTime: "",
    startTime: null,
    endTime: null,
    agenda: "",
  });

  function convertToMeetingType(input: any): meetingType {
    return {
      programID: input.programID,
      title: input.title,
      scheduleDate: input.scheduleDate.toISOString(),
      createdBy: input.createdBy,
      meetingModeID: input.meetingModeID,
      createdTime: input.createdTime,
      startTime: input.startTime.toISOString(),
      endTime: input.endTime.toISOString(),
      agenda: input.agenda,
      meetingStatus: 7,
    };
  }

  const sendMeetingData = async (formatedMeetingData: meetingType) => {
    setIsLoading(true);
    let response = await postMeetingData(formatedMeetingData);
    setIsLoading(false);
    // Use SweetAlert2 to show success or error message based on response
    if (response?.status == 201) {
      Swal.fire("Success", "Meeting created successfully!", "success");
    } else {
      Swal.fire("Error", "Failed to create meeting", "error");
    }
  };

  const handleSchedule = async () => {
    setMeetingData((prevData) => ({
      ...prevData,
      ["createdTime"]: formattedDate,
    }));

    // Convert meeting data to meetingType
    const formatedMeetingData: meetingType = convertToMeetingType(meetingData);
    await sendMeetingData(formatedMeetingData);
  };

  const handleInputChange = (key: string, value: any) => {
    setMeetingData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  return (
    <CreateMeeting onSchedule={handleSchedule} onChange={handleInputChange} />
  );
};

export default CreateMeetingHandler;
