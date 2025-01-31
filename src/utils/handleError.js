// src/utils/handleError.js

/**
 * Function to handle API errors and return a user-friendly message.
 * @param {Error} error - The error object from an API call.
 * @returns {string} - A user-friendly error message.
 */
export const handleApiError = (error) => {
    if (error.response) {
      // The request was made, and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('Response error:', error.response);
      return error.response?.data?.message || 'An error occurred while processing your request.';
    } else if (error.request) {
      // The request was made but no response was received
      console.error('Request error:', error.request);
      return 'No response received from the server. Please try again later.';
    } else {
      // Something happened in setting up the request that triggered an error
      console.error('General error:', error.message);
      return error.message || 'An unexpected error occurred.';
    }
  };
  