import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";

// Create a custom Axios instance with a base URL
const axiosInstance = axios.create({
  baseURL: "https://transformapiv1.azurewebsites.net/", // Replace with your API base URL
});

// Define the exclude paths (paths where token should not be added)
const excludePaths = ["/login"];

// Add a request interceptor to the axios instance
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig<any>) => {
    // Check if the request URL matches any of the exclude paths
    const isExcludedPath = excludePaths.some((path) =>
      config.url?.includes(path)
    );

    // If the path is not excluded, add the Bearer token to the header
    if (!isExcludedPath) {
      // const authToken = sessionStorage.getItem("jwtToken");
      // 

      // // Assuming 'config' is an object that contains your request configuration
      // if (authToken) {
      //   config.headers.Authorization = `Bearer ${authToken}`;
      // } else {
      //   
      // }
      const authTokenRaw = sessionStorage.getItem("jwtToken");
      let authToken: string | null = null; // Initialize authToken as null or as a string

      if (authTokenRaw !== null) {
        try {
          authToken = JSON.parse(authTokenRaw); // Safely parse the token
        } catch (error) {
          console.error("Error parsing authToken:", error);
          // Handle parsing error, e.g., by showing a message to the user or logging the error
        }
      }

      if (authToken) {
        // Ensure config.headers is initialized or use a default object
        config.headers = config.headers || {};
        config.headers.Authorization = `Bearer ${authToken}`;
      } else {
        console.log("No auth token found or parsing failed.");
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
