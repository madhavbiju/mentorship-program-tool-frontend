import React, { useEffect, useState } from "react";
import MenteeSearch from "../SearchForMentee/MenteeSearch";
import { fetchMentorData } from "./Api/getMenteeData";
import { Mentors } from "./Types";
import MentorSearch from "./MentorSearch";

const MenteeSearchHandler = () => {
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

  // useEffect(() => {
  //  console.log("Updated mentorData:", mentorData);
  // }, [mentorData]);

  useEffect(() => {
    getMentorsData();
  }, []);
  return (
    <>
      <MentorSearch mentors={mentorData.mentors} />
      {console.log("hello")}
      {console.log(mentorData.mentors)}
    </>
  );
};

export default MenteeSearchHandler;
