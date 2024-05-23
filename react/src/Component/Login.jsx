import React, { useState } from 'react';
import './Login.css';
import { useDispatch } from 'react-redux';
import { setAuthToken } from '../Reducer/AuthReducer';
import { Link,useNavigate} from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigate()
  const dispatch = useDispatch();

  
  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('http://localhost:3000/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'          
        },
        body: JSON.stringify({
          aadharcardnumber: Number(username),
          password: password,
        }),
      })    
      
      if (response.ok) {
        const data = await response.json();
        const token = data.token;
        dispatch(setAuthToken(token));
        localStorage.setItem('authToken', token);
        navigation('/profile');  
    }
      else {
        setError('Invalid adharcard number or password');
        alert("Try again")
      }
    } catch (error) {
      console.error('Error during login:', error.message);
      setError('An error occurred during login');
      
    }
}

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username (Adharcard Number)</label>
          <input
            type="number"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password (String)</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
        <button>
          <Link  to={'/register'}>New user</Link>
        </button>
      </form>
    </div>
  );
}

export default Login 
