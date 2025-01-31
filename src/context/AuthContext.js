import React, { createContext, useState, useEffect } from 'react';
import AuthService from '../services/authService/authService';
import TOKEN_KEY from '../config/tokenConfig';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [authToken, setAuthToken] = useState(null);
  const [error, setError] = useState(null);

   //signup
  const signup = async (signupData) => {
    setIsLoading(true);
    try {
      const response = await AuthService.doSignup(signupData);
  
      console.log('Signup API Response:', response);
  
      if (response && response.success) {  
        setIsLoading(false); 
  
        return { success: true, message: response.message || 'User created successfully' };
      } else {
        setError(response?.message || 'Signup failed. Please try again.');
        setIsLoading(false);
        return { success: false, message: response?.message || 'Signup failed' };
      }
    } catch (error) {
      console.error('Signup Error:', error);
      setError(error.message || 'An error occurred during signup');
      setIsLoading(false);
      return { success: false, message: error.message || 'An error occurred during signup' };
    }
  
  };


   //login
    const login = async (loginData) => {
      setIsLoading(true);
      try {
        const response = await AuthService.doLogin(loginData);
    
        if (response.success && response.data?.token) {
          const { token, ...userWithoutToken } = response.data;
    
          setUser(userWithoutToken);
          setUserId(userWithoutToken.userId);
          setUserRole(userWithoutToken.role?.toString());
          setAuthToken(token);
    
          localStorage.setItem('user', JSON.stringify(userWithoutToken));
          localStorage.setItem(TOKEN_KEY, token);
          localStorage.setItem('userId', userWithoutToken.userId);
          localStorage.setItem('userRole', userWithoutToken.role?.toString());
    
          setIsLoggedIn(true);
          setIsLoading(false);
          return { success: true };
        } else {
          throw new Error(response.message || 'Login failed');
        }
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
        return { success: false, message: error.message };
      }
    };
    


  
  // const logout = () => {
  //   localStorage.removeItem('user');
  //   localStorage.removeItem(TOKEN_KEY);
  //   localStorage.removeItem('userId');
  //   localStorage.removeItem('userRole');
  //   setUser(null);
  //   setUserId(null);
  //   setUserRole(null);
  //   setAuthToken(null);
  //   setIsLoggedIn(false);
  // };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isLoading,
        userId,
        userRole,
        user,
        authToken,
        error,
        setError,
        login,
        signup,
      
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

