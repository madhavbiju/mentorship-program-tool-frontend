import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "./CalendarStyle.css";
import { height } from "@mui/system";

const localizer = momentLocalizer(moment);

const CalendarCC = () => {
  const [events, setEvents] = useState([
    {
      start: moment().toDate(),
      end: moment().add(1, "days").toDate(),
      title: "DevLink Meeting",
    },
  ]);
  return (
    <>
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={events}
        style={{ height: "90vh" }}
      />
    </>
  );
};

export default CalendarCC;
