import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'bootstrap-select/dist/css/bootstrap-select.min.css';
import '../styles/style.css';
import '../styles/responsive.css';

const SignupScreen = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);

  const { signup } = useContext(AuthContext);
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signup(formData); // Assuming signup is your API call
      console.log("Signup response:", response);  // Debug log for response
  
      if (response.success) {
        // Handle success response
        alert(response.message); // Display success message
        navigate('/signin');  // Navigate to sign-in page
      } else {
        // Handle error response
        setError(response.message || 'Signup failed. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
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
              <div className="col-lg-10 col-md-10">
                <div className="app-top-items"></div>
              </div>
              <div className="col-xl-5 col-lg-6 col-md-7">
                <div className="registration">
                  <form onSubmit={handleSubmit}>
                    <h2 className="registration-title">Sign up</h2>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <div className="row mt-3">
                      <div className="col-lg-6 col-md-12">
                        <div className="form-group mt-4">
                          <label className="form-label">First Name*</label>
                          <input
                            className="form-control h_50"
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12">
                        <div className="form-group mt-4">
                          <label className="form-label">Last Name*</label>
                          <input
                            className="form-control h_50"
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group mt-4">
                          <label className="form-label">Your Email*</label>
                          <input
                            className="form-control h_50"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group mt-4">
                          <label className="form-label">Password*</label>
                          <input
                            className="form-control h_50"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                          />
<span className="pass-show-eye"><i className="fas fa-eye-slash"></i></span>                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <button
                          className="main-btn btn-hover w-100 mt-4"
                          type="submit"
                        >
                          Sign Up
                        </button>
                      </div>
                    </div>
                  </form>
                  <div className="already-account mt-3 text-center">
                    Already have an account?{' '}
                    <Link to="/signin" className="sign_link">
                      Sign In
                    </Link>
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

export default SignupScreen;
