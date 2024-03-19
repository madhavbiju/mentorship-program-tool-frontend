import axios from "axios";
import { ParticularProgramProps } from "../types";

export const fetchParticularProgram = async (programId: number) => {
  try {
    let response = await axios.get(
      `https://localhost:7259/api/program/${programId}`
    );
    return response.data;
  } catch (error) {
    console.error("error in fetching data:", error);
  }
};

export const fetchMentorMenteeName = async (employeeId: number) => {
  try {
    let response = await axios.get(
      `https://localhost:7259/api/employee/${employeeId}`
    );
    return response.data.firstName;
  } catch (error) {
    console.error("error employee data:", error);
  }
};

export const changeProgramDetails = async (
  data: ParticularProgramProps,
  programID: number
) => {
  try {
    const response = await axios.put(
      `https://localhost:7259/api/program/${programID}`,
      data
    );
    console.log("hiii", data);
    return response;
  } catch (error) {
    console.error("error in updating program:", error);
  }
};
