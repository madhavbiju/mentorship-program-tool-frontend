import axios from "axios";
import { requestType } from "../Types";
import axiosInstance from "../../../config/configAxios";
import { baseUrl } from "../../../config/configUrl";


 export const postRequestData = async (requestData: requestType) => {
    try {
        const response = await axiosInstance.post(`${baseUrl.request}/create/program-extension`, requestData);
      return(response);
    } catch (error) {
      console.error("Error posting meeting:", error);
    }
  };