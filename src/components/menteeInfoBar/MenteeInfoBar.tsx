import React, { useState, useEffect } from "react";
import { List, ListDivider, ListItem, Typography } from "@mui/joy";

interface MenteeData {
  programID: number;
  mentorID: number;
  menteeID: number;
  createdBy: number;
  createdTime: string;
  modifiedBy: number | null;
  modifiedTime: string | null;
  startDate: string;
  endDate: string;
  programName: string;
  programStatus: number;
  mentorName: string;
  menteeName: string;
}

const MenteeInfoBar = () => {
  const [menteeData, setMenteeData] = useState<MenteeData | null>(null);

  useEffect(() => {
    const fetchMenteeData = async () => {
      try {
        const response = await fetch("https://localhost:7259/api/program/3");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data: MenteeData = await response.json();
        // Format dates
        data.startDate = formatDate(data.startDate);
        data.endDate = formatDate(data.endDate);
        setMenteeData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMenteeData();
  }, []);

  // Function to format date in dd/mm/yyyy format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div>
      {menteeData && (
        <List orientation="horizontal">
          <ListItem role="none">
            <Typography level="body-xs"> Mentor:</Typography>
            <Typography level="title-sm">{menteeData.mentorName}</Typography>
          </ListItem>
          <ListDivider />
          <ListItem role="none">
            <Typography level="body-xs"> Mentee:</Typography>
            <Typography level="title-sm">{menteeData.menteeName}</Typography>
          </ListItem>
          <ListDivider />
          <ListItem role="none">
            <Typography level="body-xs"> Program:</Typography>
            <Typography level="title-sm">{menteeData.programName}</Typography>
          </ListItem>
          <ListDivider />
          <ListItem role="none">
            <Typography level="body-xs"> Status:</Typography>
            <Typography level="title-sm">{menteeData.programStatus}</Typography>
          </ListItem>
          <ListDivider />
          <ListItem role="none">
            <Typography level="body-xs"> Ends On:</Typography>
            <Typography level="title-sm">{menteeData.endDate}</Typography>
          </ListItem>
        </List>
      )}
    </div>
  );
};

export default MenteeInfoBar;
