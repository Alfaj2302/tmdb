import React, { useState, useEffect } from 'react';
import './LoginPage.css';
import { loginAPi } from '../services/client.service';
import { useNavigate } from 'react-router';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    console.log('LoginPage component mounted');
  }, []);

  const token = localStorage.getItem('authorizationToken');
  let navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt with:', { email, password });

    loginAPi('/authentication', {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    }).then((res) => {
      console.log(res.data); // Handle response here
      if (res.data.success === true) {
           navigate('/movieslist');
      }
    });
  };

  const googleLogin = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const userInfo = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: { Authorization: `Bearer ${response.access_token}` },
        });

        console.log('Google user info:', userInfo.data);

        // Here you would typically:
        // 1. Send the user info to your backend
        // 2. Create or update user in your database
        // 3. Generate a session token
        // 4. Store the token

        // For now, we'll just navigate to the movies list
        navigate('/movieslist');
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    },
    onError: () => {
      console.log('Login Failed');
    }
  });

  return (
    <div className="login-container">
      <div className="login-background">
        <div className="login-overlay"></div>
      </div>
      <div className="login-content">
        <div className="login-box">
          <h1 className="login-title">
            Welcome Back to {import.meta.env.VITE_APP_TITLE}
          </h1>
          <p className="login-subtitle">
            Sign in to rate and review your favorite movies
          </p>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="login-button">
              Sign In
            </button>
          </form>

          <div className="login-options">
            <button className="social-login google" onClick={() => googleLogin()}>
              <span>Continue with Google</span>
            </button>
            <button className="social-login facebook">
              <span>Continue with Facebook</span>
            </button>
          </div>

          <div className="login-footer">
            <p>
              Don't have an account? <a href="/signup">Sign up</a>
            </p>
            <a href="/forgot-password" className="forgot-password">
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
