import React, { useEffect, useState } from "react";
import EditPage from "./EditPage";
import {
  changeProgramDetails,
  fetchMentorMenteeName,
  fetchParticularProgram,
} from "./Api/GetParticularProgram";
import { ParticularProgramProps } from "./types";
import { useNavigate, useParams } from "react-router-dom";
import { fetchMenteeData } from "../SearchForMentee/Api/getMenteeData";
import { Mentees } from "../SearchForMentee/Types";
import { fetchMentorData } from "../SearchForMentor/Api/getMentorData";
import { Mentors } from "../SearchForMentor/Types";
import Swal from "sweetalert2";
import moment from "moment";

export interface MentorMenteeData {
  mentorName: string;
  menteeName: string;
}
interface Params {
  programId: number;
  [key: string]: any;
}
const ProgramEditHandler = () => {
  const history = useNavigate();
  const [ParticularProgram, SetParticularProgram] =
    useState<ParticularProgramProps>({
      programID: 0,
      mentorID: 0,
      menteeID: 0,
      modifiedTime: "",
      startDate: "",
      endDate: "",
      programName: "",
      modifiedBy: 0,
      programStatus: 1,
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
    // console.log("mentee", response);
  };
  const getMentorsData = async () => {
    let response = await fetchMentorData();
    // console.log("mentor", response);
    setMentorData((prevState) => ({
      mentors: [...prevState.mentors, ...response],
    }));
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

  const sendChangingProgram = async (
    changingProgram: ParticularProgramProps
  ) => {
    let response = await changeProgramDetails(
      changingProgram,
      ParticularProgram.programID
    );
    if (response?.status == 200 || 201) {
      Swal.fire("Success", "Program Edited successfully!", "success");
      history("/admin/pairs");
    } else {
      Swal.fire("Error", "Failed to edit program", "error");
    }
  };
  const empid = sessionStorage.getItem("EmployeeId");
  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formDataObject: Record<string, string> = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value as string;
    });
    console.log("abii", formDataObject);
    const changingProgram = {
      programID: ParticularProgram.programID,
      mentorID: formDataObject.mentorID
        ? parseInt(formDataObject.mentorID)
        : ParticularProgram.mentorID,
      menteeID: ParticularProgram.menteeID,
      modifiedTime: new Date().toISOString(),
      startDate: formDataObject.startDate
        ? moment.utc(formDataObject.startDate).format()
        : ParticularProgram.startDate,
      endDate: formDataObject.endDate
        ? moment.utc(formDataObject.endDate).format()
        : ParticularProgram.endDate,
      programName: formDataObject.programName || ParticularProgram.programName,
      modifiedBy: parseInt(empid!),
      programStatus: 1,
    };
    sendChangingProgram(changingProgram);
    console.log("poda", formDataObject.startDate);
  };

  const deleteProgramData = {
    programStatus: 2,
    programID: ParticularProgram.programID,
    mentorID: ParticularProgram.mentorID,
    menteeID: ParticularProgram.menteeID,
    modifiedTime: ParticularProgram.modifiedTime,
    startDate: ParticularProgram.startDate,
    endDate: ParticularProgram.endDate,
    programName: ParticularProgram.programName,
    modifiedBy: ParticularProgram.modifiedBy,
  };
  const deleteProgram = async () => {
    let response = await changeProgramDetails(
      deleteProgramData,
      ParticularProgram.programID
    );
    if (response?.status == 200 || 201) {
      Swal.fire("Success", "Program Deleted successfully!", "success");
      history("/admin/pairs");
    } else {
      Swal.fire("Error", "Failed to edit program", "error");
    }
  };

  return (
    <div>
      <EditPage
        program={ParticularProgram}
        mentorName={MentorMenteeData.mentorName}
        menteeName={MentorMenteeData.menteeName}
        mentees={menteeData.mentees}
        mentors={mentorData.mentors}
        submitForm={submit}
        deleteProgram={deleteProgram}
      />
    </div>
  );
};

export default ProgramEditHandler;
