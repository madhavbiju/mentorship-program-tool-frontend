import React, { useState, useEffect } from "react";
import { ExtendedEvent, eventList } from "./Types";
import CalendarCC from "./CalendarCC";
import { fetchEventData } from "./Api/getEventData";
import moment from "moment";

const CalendarHandler: React.FC = () => {
  const event: eventList = {
    meetingID: 0,
    programID: 0,
    scheduleDate: "",
    startTime: "",
    endTime: "",
    agenda: "",
    title: "",
    meetingModeID: 0,
    location: "",
  };

  const [eventData, setEventData] = useState<eventList[]>([]);
  const [eventFormatedData, setEventFormatedData] = useState<ExtendedEvent[]>(
    []
  );
  const [employeeID, setemployeeID] = useState<number>(2);
  const [roleID, setroleID] = useState<number>(2);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getEventData = async () => {
    setIsLoading(true); // Set loading state to true while fetching data
    let response = await fetchEventData(employeeID, roleID);
    setEventData(response);
    // Map eventData to ExtendedEvent format
    const formattedData = response.map((eventList: eventList) => {
      const scheduleDateMoment = moment(eventList.scheduleDate);
      const startTimeMoment = moment(eventList.startTime);
      const endTimeMoment = moment(eventList.endTime);

      // Extract date, start time, and end time
      const date = scheduleDateMoment.format("YYYY-MM-DD");
      const startTime = startTimeMoment.format("HH:mm:ss");
      const endTime = endTimeMoment.format("HH:mm:ss");
      return {
        id: eventList.meetingID, // Assuming meetingID is a unique identifier
        title: eventList.title,
        agenda: eventList.agenda,
        start: moment(`${date} ${startTime}`).toDate(),
        end: moment(`${date} ${endTime}`).toDate(),
        participants: [eventList.programID], // You can add participants if available in your data
      };
    });
    setEventFormatedData(formattedData);
    setIsLoading(false); // Set loading state to false after fetching data
  };

  useEffect(() => {
    getEventData();
  }, []);
  return (
    <>
      {isLoading ? ( // Render skeleton if loading
        <br />
      ) : (
        <CalendarCC eventFormattedList={eventFormatedData} />
      )}
    </>
  );
};

export default CalendarHandler;
