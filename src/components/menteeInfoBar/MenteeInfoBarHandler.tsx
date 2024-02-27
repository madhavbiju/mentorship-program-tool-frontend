import React, { useState, useEffect } from "react";
import MenteeInfoBar from "./MenteeInfoBar";
import { fetchProgramData } from "./API/getProgramData";
import { MenteeinfoBarProps } from "./Types";

const MenteeInfoBarHandler = ({ programid }: { programid: number  }) => {
  const [programData, setProgramData] = useState<MenteeinfoBarProps>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProgramData(programid); // Pass the appropriate program ID
        setProgramData(data);
      } catch (error) {
        // Handle error
      }
    };

    fetchData();
  }, []);

  if (!programData) {
    return <div>Select Mentee</div>; // You can customize the loading state
  }

  return (
    <div>
      <MenteeInfoBar data={programData} />
    </div>
  );
};

export default MenteeInfoBarHandler;
