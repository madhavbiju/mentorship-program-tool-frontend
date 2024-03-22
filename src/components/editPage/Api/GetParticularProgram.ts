import axios from "axios";
import { ParticularProgramProps } from "../types";
import axiosInstance from "../../../config/configAxios";
import { baseUrl } from "../../../config/configUrl";

export const fetchParticularProgram = async (programId: number) => {
  try {
    let response = await axiosInstance.get(
      `${baseUrl.program}/${programId}`
    );
    return response.data;
  } catch (error) {
    console.error("error in fetching data:", error);
  }
};

export const fetchMentorMenteeName = async (employeeId: number) => {
  try {
    let response = await axiosInstance.get(
      `${baseUrl.employee}/${employeeId}`
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
    const response = await axiosInstance.put(
      `${baseUrl.program}/${programID}`,
      data
    );
    console.log("hiii", data);
    return response;
  } catch (error) {
    console.error("error in updating program:", error);
  }
};
