import React, { useState } from "react";
import CreateMeeting from "./CreateMeeting";

const CreateMeetingHandler = () => {
  const [meetingData, setMeetingData] = useState({
    programID: "",
    title: "",
    date: null,
    startTime: null,
    endTime: null,
    agenda: "",
  });

  const handleSchedule = () => {
    console.log("Meeting Data:", meetingData);
    // Here you can perform actions like sending data to the backend, etc.
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
