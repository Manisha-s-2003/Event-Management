// const Home = () => {
//     return <h1>Welcome to the Home Page</h1>;
//   };
  
//   export default Home;
  

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Link to="/Register">Go to Register</Link>
      <br />
      <Link to="/login">Go to Login</Link>
    </div>
  );
};

export default Home;
