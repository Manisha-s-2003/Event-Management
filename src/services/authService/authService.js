import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/auth';

const AuthService = {


  doLogin: async (loginData) => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, loginData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Login Successful:', response.data);
      return { success: true, data: response.data };
    } catch (error) {
      // Log full error details for debugging
      console.error('Login Error Response:', error.response?.data || error.message);

      let errorMessage = 'Invalid email or password';
      if (error.response) {
        errorMessage = error.response.data?.message || errorMessage;
      } else if (error.request) {
        errorMessage = 'No response from server. Check your internet connection.';
      } else {
        errorMessage = 'An error occurred. Please try again.';
      }

      return { success: false, message: errorMessage };
    }
  },


doSignup: async (signupData) => {
  try {
      const response = await axios.post(`${BASE_URL}/signup`, signupData, {
          headers: {
              'Content-Type': 'application/json',
          },
      });

      console.log('Signup Response Data:', response.data);  

      return response.data;

  } catch (error) {
      if (error.response) {
          console.error('Signup Error Response:', error.response.data); 
          throw new Error(error.response.data.message || 'Signup failed');
      } else if (error.request) {
          throw new Error('No response from server. Check your internet connection.');
      } else {
          throw new Error('An error occurred. Please try again.');
      }
  }
},



};

export default AuthService;
