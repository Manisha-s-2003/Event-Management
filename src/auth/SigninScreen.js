// import React, { useState, useEffect, useContext } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
// import 'bootstrap-select/dist/css/bootstrap-select.min.css';
// import '../styles/style.css';
// import '../styles/responsive.css';

// const SigninScreen = () => {
//     const { login, isLoading, isLoggedIn, error, setError } = useContext(AuthContext);
//     const navigate = useNavigate();

//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     useEffect(() => {
//         if (isLoggedIn) {
//             navigate('/dashboard'); // Redirect on successful login
//         }
//         if (error) {
//             const timer = setTimeout(() => setError(null), 5000);
//             return () => clearTimeout(timer);
//         }
//     }, [isLoggedIn, error, navigate, setError]);

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         const response = await login({ email, password });

//         if (response.success) {
//             navigate('/dashboard');
//         } else {
//             setError(response.message || 'Login failed');
//         }
//     };

//     return (
//         <div className="form-wrapper">
//             <div className="app-form">
//                 <div className="app-form-sidebar">
//                     <div className="sign_sidebar_text"></div>
//                 </div>
//                 <div className="app-form-content">
//                     <div className="container">
//                         <div className="row justify-content-center">
//                             <div className="col-xl-5 col-lg-6 col-md-7">
//                                 <div className="app-top-items"></div>

//                                 <div className="registration">
//                                     <form onSubmit={handleLogin}>
//                                         <h2 className="registration-title">Sign In</h2>
//                                         <div className="form-group mt-3">
//                                             <label>Email*</label>
//                                             <input
//                                                 className="form-control h_50"
//                                                 type="email"
//                                                 placeholder="Enter your email"
//                                                 value={email}
//                                                 onChange={(e) => setEmail(e.target.value)}
//                                                 required
//                                             />
//                                         </div>
//                                         <div className="form-group mt-3">
//                                             <label>Password*</label>
//                                             <input
//                                                 className="form-control h_50"
//                                                 type="password"
//                                                 placeholder="Enter your password"
//                                                 value={password}
//                                                 onChange={(e) => setPassword(e.target.value)}
//                                                 required
//                                             />
//                                             <span className="pass-show-eye"><i className="fas fa-eye-slash"></i></span>
//                                         </div>
//                                         <button className="main-btn btn-hover w-100 mt-4" type="submit" disabled={isLoading}>
//                                             {isLoading ? 'Signing In...' : 'Sign In'}
//                                         </button>
//                                     </form>

//                                     {error && <div className="error-message">{error}</div>}

//                                     <div className="already-account mt-3 text-center">
//                                         Don't have an account? <Link to="/signup" className="sign_link">Sign Up</Link>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SigninScreen;


import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'bootstrap-select/dist/css/bootstrap-select.min.css';
import '../styles/style.css';
import '../styles/responsive.css';

const SigninScreen = () => {
    const { login, isLoading, isLoggedIn, error, setError } = useContext(AuthContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/dashboard'); // Redirect on successful login
        }
        if (error) {
            const timer = setTimeout(() => setError(null), 5000);
            return () => clearTimeout(timer);
        }
    }, [isLoggedIn, error, navigate, setError]);

    // const handleLogin = async (e) => {
    //     e.preventDefault();
        
    //     const response = await login({ email, password });

    //     if (response.success) {
    //         // ✅ Store login data from backend
    //         console.log('Login Successful:', response);
    //         localStorage.setItem('user', JSON.stringify(response.data.user)); // Store user details
    //         localStorage.setItem('token', response.data.token); // Store authentication token
            
    //         navigate('/dashboard'); // Redirect after successful login
    //     } else {
    //         setError(response.message || 'Login failed');
    //     }
    // };

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await login({ email, password });
    
        if (response.success) {
            navigate('/dashboard');  // Redirect to dashboard on successful login
        } else {
            setError(response.message || 'Login failed');  // Show error message
        }
    };

    return (
        <div className="form-wrapper">
            <div className="app-form">
                <div className="app-form-sidebar">
                    <div className="sign_sidebar_text"></div>
                </div>
                <div className="app-form-content">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-5 col-lg-6 col-md-7">
                                <div className="app-top-items"></div>

                                <div className="registration">
                                    <form onSubmit={handleLogin}>
                                        <h2 className="registration-title">Sign In</h2>
                                        <div className="form-group mt-3">
                                            <label>Email*</label>
                                            <input
                                                className="form-control h_50"
                                                type="email"
                                                placeholder="Enter your email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="form-group mt-3">
                                            <label>Password*</label>
                                            <input
                                                className="form-control h_50"
                                                type="password"
                                                placeholder="Enter your password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <button className="main-btn btn-hover w-100 mt-4" type="submit" disabled={isLoading}>
                                            {isLoading ? 'Signing In...' : 'Sign In'}
                                        </button>
                                    </form>

                                    {error && <div className="error-message">{error}</div>}

                                    <div className="already-account mt-3 text-center">
                                        Don't have an account? <Link to="/signup" className="sign_link">Sign Up</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SigninScreen;

