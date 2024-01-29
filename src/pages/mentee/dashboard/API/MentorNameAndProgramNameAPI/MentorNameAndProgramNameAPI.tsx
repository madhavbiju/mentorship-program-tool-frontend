import axios, { AxiosResponse } from "axios";
import React from "react";
import { MenteeDetails } from "./MentorNameAndProgramNameAPIPropType";

export const MentorNameAndProgramNameAPI = async (
  id: number
): Promise<MenteeDetails> => {
  try {
    const response: AxiosResponse<MenteeDetails> = await axios.get(
      `https://localhost:7259/api/GetMenteeDetailsById/${id}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Error fetching mentee details");
  }
};
