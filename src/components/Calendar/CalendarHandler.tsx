import React, { useState, useEffect } from "react";
import { ExtendedEvent, eventList, roleProp } from "./Types";
import CalendarCC from "./CalendarCC";
import { fetchEventData } from "./Api/getEventData";
import moment from "moment";

const CalendarHandler = ({ roleID }: roleProp) => {
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

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const EmployeeID = sessionStorage.getItem("EmployeeId");
  const getEventData = async () => {
    setIsLoading(true); // Set loading state to true while fetching data
    let response = await fetchEventData(EmployeeID!, roleID);
    setEventData(response);
    // Map eventData to ExtendedEvent format
    const formattedData = response.map((eventList: eventList) => {
      const scheduleDateMoment = moment.utc(eventList.scheduleDate); // Parse UTC date
      const startTimeMoment = moment.utc(eventList.startTime); // Parse UTC start time
      const endTimeMoment = moment.utc(eventList.endTime); // Parse UTC end time

      // Convert UTC dates to local time zone
      scheduleDateMoment.local();
      startTimeMoment.local();
      endTimeMoment.local();

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
  }, [roleID]);
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
