import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';


// Create a custom Axios instance with a base URL
const axiosInstance = axios.create({
  baseURL: 'https://localhost:7259', // Replace with your API base URL
});

// Define the exclude paths (paths where token should not be added)
const excludePaths = ['/login'];

// Add a request interceptor to the axios instance
axiosInstance.interceptors.request.use(
  (config:InternalAxiosRequestConfig<any>) => {
    // Check if the request URL matches any of the exclude paths
    const isExcludedPath = excludePaths.some((path) => config.url?.includes(path));

    // If the path is not excluded, add the Bearer token to the header
    if (!isExcludedPath) {
      const authToken = sessionStorage.getItem("jwt"); // Replace with your actual JWT token
      config.headers.Authorization = `Bearer ${authToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export  default axiosInstance;





