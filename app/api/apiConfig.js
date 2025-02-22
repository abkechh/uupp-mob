import axios from "axios";

// Base configuration for all API calls
const api = axios.create({
  baseURL: "http://localhost:3006",
  timeout: 10000, // 10 seconds
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor (for tokens)
api.interceptors.request.use(
  async (config) => {
    // Add token dynamically
    const token = "abc"; // Function to fetch stored token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add a response interceptor (for global error handling)
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    // Handle errors globally (e.g., show toast notifications)
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;
