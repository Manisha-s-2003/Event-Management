import React, { useState } from 'react';
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token); // Save token
        localStorage.setItem('role', data.role); // Save role for future use
        alert(data.message);

        // Redirect based on role
        switch (data.role) {
          case 'admin':
            navigate('/dashboard'); // Navigate to admin dashboard
            break;
          case 'organizer':
            navigate('/dashboard'); // Navigate to organizer dashboard
            break;
          default:
            navigate('/dashboard'); // Navigate to user dashboard
        }
      } else {
        alert(data.message); // Show error message if login fails
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row>
        <Col md={12}>
          <Card className="shadow-lg" style={{ maxWidth: '500px', margin: 'auto' }}>
            <Card.Body>
              <h2 className="text-center mb-4">Welcome Back</h2>
              <p className="text-muted text-center mb-4">
                Please enter your credentials to log in.
              </p>
              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>
                <Button
                  type="submit"
                  className="btn btn-warning w-100"
                  style={{ fontWeight: 'bold' }}
                >
                  Log In
                </Button>
              </Form>
              <div className="text-center mt-3">
                <a href="/forgot-password" style={{ color: '#6c757d', textDecoration: 'none' }}>
                  Forgot Password?
                </a>
              </div>
              <p className="text-center mt-3 mb-0 text-muted">
                Don’t have an account?{' '}
                <Link
                  to="/register"
                  style={{ color: '#ff9800', textDecoration: 'none', fontWeight: 'bold' }}
                >
                  Register here
                </Link>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
