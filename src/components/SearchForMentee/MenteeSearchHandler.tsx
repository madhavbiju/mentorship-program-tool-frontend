import React, { useEffect, useState } from "react";
import MenteeSearch from "../SearchForMentee/MenteeSearch";
import { fetchMenteeData } from "./Api/getMenteeData";
import { Mentees } from "./Types";

const MenteeSearchHandler = () => {
  const [menteeData, setMenteeData] = useState<{
    mentees: Mentees[];
  }>({
    mentees: [],
  });

  const getMenteesData = async () => {
    let response = await fetchMenteeData();
    setMenteeData((prevState) => ({
      mentees: [...prevState.mentees, ...response], //to append fetched mentees to existing mentees data
    }));
  };

  useEffect(() => {
    getMenteesData();
  }, []);
  return (
    <>
      <MenteeSearch mentees={menteeData.mentees} />
      {console.log(menteeData.mentees)}
    </>
  );
};

export default MenteeSearchHandler;
