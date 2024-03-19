import React, { useEffect, useState } from "react";
import MenteeSearch from "../SearchForMentee/MenteeSearch";
import { fetchMentorData } from "./Api/getMentorData";
import { MentorIdProps, Mentors } from "./Types";
import MentorSearch from "./MentorSearch";

const MentorSearchHandler = ({ setMentorID }: MentorIdProps) => {
  const [mentorData, setMentorData] = useState<{
    mentors: Mentors[];
  }>({
    mentors: [],
  });

  const getMentorsData = async () => {
    let response = await fetchMentorData();
    setMentorData((prevState) => ({
      mentors: [...prevState.mentors, ...response], //to append fetched mentors to existing mentors data
    }));
  };

  useEffect(() => {
    getMentorsData();
  }, []);
  return (
    <>
      <MentorSearch mentors={mentorData.mentors} setMentorID={setMentorID} />
    </>
  );
};

export default MentorSearchHandler;
