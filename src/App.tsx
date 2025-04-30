import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import LoginPage from './pages/LoginPage';
import MoviesList from './pages/MoviesList';
import './App.css';
import { useEffect } from 'react';
import { configurations } from './services/client.service';

function App() {
  const token = import.meta.env.VITE_AUTHORIZATION_TOKEN;

  localStorage.setItem('authorizationToken', token);

  useEffect(() => {
    configurations('/configuration', {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    }).then((res)=>{
      localStorage.setItem('configurations', JSON.stringify(res.data));
    });
  }, []);

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID}>
      <Router basename="/tmdb">
        <div className="App">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/logout" element={<LoginPage />} />
            <Route path="/movieslist" element={<MoviesList />} />
          </Routes>
        </div>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
