import React, { useEffect, useState } from "react";
import MenteeSearch from "../SearchForMentee/MenteeSearch";
import { fetchMenteeData } from "./Api/getMenteeData";
import { MenteeIdProps, Mentees } from "./Types";

const MenteeSearchHandler = ({ setMenteeID }: MenteeIdProps) => {
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
      <MenteeSearch mentees={menteeData.mentees} setMenteeID={setMenteeID} />
    </>
  );
};

export default MenteeSearchHandler;
