

// import React, { useState } from 'react';
// import { Button, Snackbar, Alert } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import { API_URL } from '../../config/apiConfig';

// const GoogleAuthScreen = () => {
//     const [showWebView, setShowWebView] = useState(false);
//     const [alertMessage, setAlertMessage] = useState('');
//     const [openSnackbar, setOpenSnackbar] = useState(false);
//     const navigate = useNavigate();

//     const handleGoogleLogin = () => {
//         setShowWebView(true); // Trigger WebView or redirect
//     };

//     const extractTokenFromUrl = (url) => {
//         const tokenMatch = url.match(/token=([^&]+)/);
//         return tokenMatch ? tokenMatch[1] : null;
//     };

//     const onNavigationStateChange = async (event) => {
//         const { url } = event.target;

//         // Check if the URL contains the token
//         if (url.includes('auth/success?token=')) {
//             const token = extractTokenFromUrl(url);

//             if (token) {
//                 // Store token securely in localStorage
//                 localStorage.setItem('authToken', token);
//                 setAlertMessage('Login Successful! Redirecting...');
//                 setOpenSnackbar(true); // Show success alert
//                 setShowWebView(false); // Hide WebView after successful login
//                 navigate('/'); // Redirect to home page or any other page
//             } else {
//                 setAlertMessage('Authentication Failed: Token not found');
//                 setOpenSnackbar(true); // Show failure alert
//             }
//         }
//     };

//     // Trigger OAuth by redirecting to the Google OAuth endpoint
//     const triggerGoogleOAuth = () => {
//         const googleAuthUrl = `${API_URL}/auth/google`;
//         window.location.href = googleAuthUrl; // This will redirect the user to the Google OAuth page
//     };

//     return (
//         <div style={{ flex: 1 }}>
//             {!showWebView ? (
//                 <Button variant="contained" color="primary" onClick={triggerGoogleOAuth}>
//                     Continue with Google
//                 </Button>
//             ) : (
//                 // WebView or OAuth Redirection logic
//                 <div>Redirecting to Google for Authentication...</div>
//             )}

//             {/* Snackbar for displaying success/error messages */}
//             <Snackbar
//                 open={openSnackbar}
//                 autoHideDuration={6000}
//                 onClose={() => setOpenSnackbar(false)}
//             >
//                 <Alert onClose={() => setOpenSnackbar(false)} severity={alertMessage.includes('Failed') ? 'error' : 'success'}>
//                     {alertMessage}
//                 </Alert>
//             </Snackbar>
//         </div>
//     );
// };

// export default GoogleAuthScreen;
