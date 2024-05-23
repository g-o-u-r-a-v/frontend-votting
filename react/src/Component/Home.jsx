import React from 'react';
import './Home.css';
import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [profileData, setProfileData] = useState(null);
  
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const authToken = localStorage.getItem('authToken');
        console.log(authToken)
        const response = await fetch('http://localhost:3000/user/profile', {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        if (response.ok){
          console.log("Ho gya bhai ")
          const data = await response.json();
          const user = data['user']
          console.log(user)
          setProfileData(user);
        }
        else {
          console.log("Did not get profile bad request")
        }
      } catch (error) {
        console.error('Profile fetch error:', error);
      }
    };
    fetchProfile();
  }, []);



  return (
    <div className="home-container">
      <nav className="navbar">
        <h1 className="navbar-title">Voting App</h1>
        <ul className="nav-links">
          <li><a href="/contact">Contact</a></li>
          <Link onClick={() => localStorage.clear()} to={'/'}> Logout</Link>
          <Link to={'/changepassword'}> Change Password</Link>

        </ul>
      </nav>
      <div><Link to={'/vote'}>Vote </Link></div>
      <div className="main-content">
      <div>
      {profileData ? (
        <div>
          <div>
            <h2>Welcome</h2>
            <h3>Name: {profileData.name}</h3>
            <p>Email: {profileData.email}</p>
            <p>Age: {profileData.age}</p>
            <p>Mobile Number: {profileData.mobilenumber}</p>
            <p>Address: {profileData.address}</p>
            <p>Adharcard Number: {profileData.aadharcardnumber}</p>
            <p>Role: {profileData.role}</p>
          </div>
          <div>
            <h3>
              <Link to={'/updateprofile'}>Edit Profile</Link>
            </h3>
          </div>
          
        </div>
      ) : (
        <div>
          <h3>404 Bad request</h3>
          <Link to={'/'}>Please login first</Link>
        </div>
        
      )}
    </div>
      </div>
    </div>
  );
};
export default Home;
