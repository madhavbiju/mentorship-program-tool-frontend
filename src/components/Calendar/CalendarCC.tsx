import React, { useState } from "react";
import { Calendar, momentLocalizer, Event } from "react-big-calendar";
import moment from "moment";
import "./CalendarStyle.css";
import { ExtendedEvent, eventProps } from "./Types";
import { useNavigate } from "react-router-dom";

const localizer = momentLocalizer(moment);

const CalendarCC = ({ eventFormattedList }: eventProps) => {
  const history = useNavigate();
  const [events, setEvents] = useState<ExtendedEvent[]>(eventFormattedList);

  const handleSelectEvent = (event: ExtendedEvent) => {
    history(`event/${event.id}`);
  };

  return (
    <>
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={events}
        style={{ height: "90vh" }}
        onSelectEvent={handleSelectEvent}
      />
    </>
  );
};

export default CalendarCC;
