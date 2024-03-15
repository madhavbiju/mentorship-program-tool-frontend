import React, { useEffect, useState } from "react";
import EditPage from "./EditPage";
import {
  fetchMentorMenteeName,
  fetchParticularProgram,
} from "./Api/GetParticularProgram";
import { ParticularProgramProps } from "./types";
import { useParams } from "react-router-dom";
import { fetchMenteeData } from "../SearchForMentee/Api/getMenteeData";
import { Mentees } from "../SearchForMentee/Types";
import { fetchMentorData } from "../SearchForMentor/Api/getMentorData";
import { Mentors } from "../SearchForMentor/Types";

export interface MentorMenteeData {
  mentorName: string;
  menteeName: string;
}
interface Params {
  programId: number;
  [key: string]: any;
}
const ProgramEditHandler = () => {
  const [ParticularProgram, SetParticularProgram] =
    useState<ParticularProgramProps>({
      programID: 0,
      mentorID: 0,
      menteeID: 0,
      modifiedTime: "",
      startDate: "",
      endDate: "",
      programName: "",
      programStatus: 0,
    });
  const [MentorMenteeData, SetMentorMenteeData] = useState<MentorMenteeData>({
    menteeName: "",
    mentorName: "",
  });
  const { programId } = useParams<Params>();
  const getProgramData = async () => {
    let response = await fetchParticularProgram(programId!);
    SetParticularProgram(response);
  };

  const getMentorData = async () => {
    if (ParticularProgram.mentorID != 0) {
      let response = await fetchMentorMenteeName(ParticularProgram.mentorID);
      SetMentorMenteeData({
        ...MentorMenteeData, // Spread the existing state
        mentorName: response, // Update menteeName
      });
    }
  };

  const getMenteeData = async () => {
    if (ParticularProgram.menteeID != 0) {
      let response = await fetchMentorMenteeName(ParticularProgram.menteeID);
      SetMentorMenteeData({
        ...MentorMenteeData,
        menteeName: response,
      });
    }
  };
  const [menteeData, setMenteeData] = useState<{
    mentees: Mentees[];
  }>({
    mentees: [],
  });
  const [mentorData, setMentorData] = useState<{
    mentors: Mentors[];
  }>({
    mentors: [],
  });

  const getMenteesData = async () => {
    let response = await fetchMenteeData();
    setMenteeData((prevState) => ({
      mentees: [...prevState.mentees, ...response], //to append fetched mentees to existing mentees data
    }));
    console.log("mentee",response)
    // setMenteeData(response);
  };
  const getMentorsData = async () => {
    let response = await fetchMentorData();
    console.log("mentor",response)
    setMentorData((prevState) => ({
      mentors: [...prevState.mentors, ...response]
    }));
    // setMenteeData(response);
  };
  useEffect(() => {
    getProgramData();
    getMenteesData();
    getMentorsData();
  }, []);

  useEffect(() => {
    getMentorData();
    getMenteeData();
  }, [ParticularProgram]);
  console.log("hello", MentorMenteeData.menteeName);

  return (
    <div>
      <EditPage
        program={ParticularProgram}
        mentorName={MentorMenteeData.mentorName}
        menteeName={MentorMenteeData.menteeName}
        mentees={menteeData.mentees}
        mentors={mentorData.mentors}
      />
    </div>
  );
};

export default ProgramEditHandler;
