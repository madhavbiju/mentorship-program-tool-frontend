import {Event } from "react-big-calendar";

export interface eventList {
    meetingID: number,
    programID: number,
    scheduleDate: string,
    startTime: string,
    endTime: string,
    title: string,
    agenda: string,
    meetingModeID: number,
    location: string,
  }

  export interface ExtendedEvent extends Event {
    id: string | number;
    participants: string[];
    agenda: string
  }

  export interface eventProps {
    eventFormattedList: ExtendedEvent[];
  }

  export interface roleProp{
    roleID: number
  }