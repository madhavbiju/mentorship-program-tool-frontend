// apiService.ts
import axios from "axios";
import axiosInstance from "../../../config/configAxios";
import { baseUrl } from "../../../config/configUrl";

// Define the types for your request and program update data structures
interface ApproveRequestData {
  programExtensionID: number;
  modifiedBy: number;
  requestStatusID: number;
}

interface UpdateProgramDateData {
  programID: number;
  modifiedBy: number;
  modifiedTime: string;
  endDate: string;
}

// Function to approve a request
export const approveRequest = async (data: ApproveRequestData) => {
  try {
    const response = await axiosInstance.put(
      `${baseUrl.request}/approve${data.programExtensionID}`,
      data
    );
    
    return response.data;
  } catch (error) {
    console.error("Error approving request:", error);
    throw error;
  }
};
export const rejectRequest = async (data: ApproveRequestData) => {
  try {
    const response = await axiosInstance.put(
      `${baseUrl.request}/approve${data.programExtensionID}`,
      data
    );
    
    return response.data;
  } catch (error) {
    console.error("Error approving request:", error);
    throw error;
  }
};

// Function to update the program date
export const updateProgramDate = async (data: UpdateProgramDateData) => {
  try {
    const response = await axiosInstance.put(
      `${baseUrl.program}/UpdateProgramDate`,
      data
    );
    

    return response.data;
  } catch (error) {
    console.error("Error updating program date:", error);
    throw error;
  }
};
