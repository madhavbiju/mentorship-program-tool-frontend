import React, { useEffect, useState } from "react";
import MentorReport from "../mentorreport/MentorReport";
import MentorSearchHandler from "../SearchForMentor/MentorSearchHandler";

const AdminMentorReportPage = () => {
  const [mentorID, setMentorID] = useState(0);
  const [isMentorSelected, setIsMentorSelected] = useState(false);

  useEffect(() => {
    console.log(mentorID);
    setIsMentorSelected(mentorID !== 0);
  }, [mentorID]);

  const employeeID: string = sessionStorage.getItem("EmployeeId") || "";
  const EmployeeId = parseInt(employeeID);
  return (
    <div>
      <MentorSearchHandler setMentorID={setMentorID} />
      {isMentorSelected && <MentorReport employeeId={mentorID} />}
    </div>
  );
};

export default AdminMentorReportPage;
