
import axios from 'axios';
import { API_URL } from './apiConfig';

const loggingEnabled = true; 

const httpAxiosClient = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
});

// Request Interceptor
httpAxiosClient.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (loggingEnabled) {
      console.log('Token in interceptor:', token);
    }

    // Ensure token exists and is valid
    if (token && token !== 'null' && token !== 'undefined') {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    if (loggingEnabled) {
      console.log(`[${new Date().toISOString()}] Request: ${config.method?.toUpperCase()} ${config.url}`);
    }
    return config;
  },
  error => {
    if (loggingEnabled) {
      console.error(`[${new Date().toISOString()}] Request Error:`, error);
    }
    return Promise.reject(error);
  }
);

// Response Interceptor
httpAxiosClient.interceptors.response.use(
  response => {
    if (loggingEnabled) {
      console.log(`[${new Date().toISOString()}] Response: ${response.status} ${response.config.url}`);
    }
    return response;
  },
  error => {
    if (loggingEnabled) {
      if (error.response) {
        console.error(
          `[${new Date().toISOString()}] Response Error: ${error.response.status} - ${error.response.statusText}`
        );
        console.error('Error Details:', error.response.data);
      } else {
        console.error(`[${new Date().toISOString()}] Network Error:`, error.message);
      }
    }

    if (error.response && error.response.status === 401) {
      console.log('Logging out due to 401 error');
      doLogout();
    }
    return Promise.reject(error);
  }
);

// // Logout function
// const doLogout = async () => {
//   try {
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//     window.location.href = '/login'; // Redirect to login page
//     return true;
//   } catch (error) {
//     console.error('Failed to logout:', error);
//   }
// };

export default httpAxiosClient;
