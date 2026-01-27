import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// You can add interceptors here if needed for request/response handling

axiosInstance.interceptors.request.use(
  (config) => {
    // You can add authorization headers or other custom headers here
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers = config.headers ?? {};
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

/**
 * RESPONSE INTERCEPTOR
 * Handle global errors (401, 403, etc.)
 */
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        console.error("Unauthorized – redirecting to login");
        // optional: logout logic
        // localStorage.removeItem("accessToken");
        // window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
