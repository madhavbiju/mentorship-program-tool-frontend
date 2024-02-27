import React, { useState, useEffect } from "react";
import { meetingDetails } from "./Types";
import EventPage from "./EventPage";
import { fetchMeetingData } from "./Api/getMeetingData";
import { useParams } from "react-router-dom";
import moment from "moment";

interface Params {
  meetingId: number;
  [key: string]: any;
}
const EventPageHandler: React.FC = () => {
  const initialMeetingDetails: meetingDetails = {
    meetingID: 0,
    programID: 0,
    scheduleDate: "",
    startTime: "",
    endTime: "",
    title: "",
    agenda: "",
    meetingModeID: 0,
    location: "",
  };
  const { meetingId } = useParams<Params>();
  const [eventData, setEventData] = useState<meetingDetails>(
    initialMeetingDetails
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getMeetingData = async () => {
    setIsLoading(true); // Set loading state to true while fetching data
    let response = await fetchMeetingData(meetingId!);

    setEventData(response);
    setIsLoading(false); // Set loading state to false after fetching data
  };

  useEffect(() => {
    getMeetingData();
  }, []);
  
  return (
    <>
      {isLoading ? ( // Render skeleton if loading
        <></>
      ) : (
        <EventPage detailsOfMeeting={eventData} />
      )}
    </>
  );
};

export default EventPageHandler;
