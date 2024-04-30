import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent form submission
    try {
      const response = await fetch('http://localhost:8000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      if (response.ok) {
        alert("Login successful");
        navigate('/Dashboard'); // Navigate to page1 on successful login
      } else {
        alert("Login failed");
        setError(true);
      }
    } catch (error) {
      console.error('Error fetching login data:', error);
    }
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
        <h2 className="login__title">Log in</h2>  
          <form className="login" onSubmit={handleLogin}>
            <div className="login__field">
              <i className="login__icon fas fa-user"></i>
              <input 
                type='text' 
                id='username' 
                placeholder='Username' 
                className='login__input' 
                value={username} 
                onChange={handleUsernameChange} 
              />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock"></i>
              <input 
                type='password' 
                id='password' 
                placeholder='Password' 
                className='login__input' 
                value={password} 
                onChange={handlePasswordChange} 
              />
            </div>
            <button type="submit" className="button login__submit">
              <span className="button__text">Login</span>
              <i className="button__icon fas fa-chevron-right"></i>
            </button>
            {error && <p className='error'>Invalid Password or Username</p>}
          </form>
          <div className="social-login">
            <h3 className="social-login__text">Or login with</h3>
            <div className="social-icons">
              <a href="#" className="social-login__icon fab fa-google"></a>
              <a href="#" className="social-login__icon fab fa-facebook-f"></a>
              <a href="#" className="social-login__icon fab fa-twitter"></a>
            </div>
          </div>
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape1"></span>
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape3"></span>
          <span className="screen__background__shape screen__background__shape4"></span>
        </div>
      </div>
    </div>
  );
}

