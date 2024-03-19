import axios from "axios";
import { programType } from "../Types";
import axiosInstance from "../../../../config/configAxios";
import { baseUrl } from "../../../../config/configUrl";

export const postProgramData = async (programData: programType) => {
  try {
    const response = await axiosInstance.post(
      `${baseUrl.program}`,
      programData
    );
    return response.data;
  } catch (error) {
    console.error("Error in creating program:", error);
  }
};
