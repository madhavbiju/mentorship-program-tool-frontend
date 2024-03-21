import axios from "axios";
const PALM_API_KEY = "AIzaSyCjG5xgGj166rEzwgLW9Vm8ssLAJBe2Rmg";
const headers = {
    "Content-Type": "application/json",
  };

export const talkToPaLM = async (requestData: any) => {
  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta2/models/chat-bison-001:generateMessage?key=${PALM_API_KEY}`,
      requestData,
      {
        headers,
      }
    );
    return response.data;
  } catch (error) {
    console.error(
      "An error occurred while making the Google Cloud API request:",
      error
    );
  }
};
