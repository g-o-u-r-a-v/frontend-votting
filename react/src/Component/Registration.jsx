import React, { useState } from "react";
import "./Registration.css";
import {Link} from 'react-router-dom'

const Registration = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [mobilenumber, setMobilenumber] = useState("");
  const [address, setAddress] = useState("");
  const [aadharcardnumber, setAadharcardnumber] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");


  const onRegister = async (userData) => {
    try {
      console.log(userData)
      const response = await fetch("http://localhost:3000/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      if (response.ok) {
        alert("Registration successful");
      }       
      else {
        const data = await response.json()
        alert(data.msg)
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name,
      age: parseInt(age),
      email,
      mobilenumber,
      address,
      aadharcardnumber: parseInt(aadharcardnumber),
      password,
      role,
    };
    onRegister(userData);
  };

 

  return (
    <div className="registration-container">
      <h2>Registration</h2>
      <form  onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="reg-name">Name</label>
          <input
            type="text"
            id="reg-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="reg-age">Age</label>
          <input
            type="number"
            id="reg-age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="reg-email">Email</label>
          <input
            type="email"
            id="reg-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="reg-mobilenumber">Mobile Number</label>
          <input
            type="text"
            id="reg-mobilenumber"
            value={mobilenumber}
            onChange={(e) => setMobilenumber(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="reg-address">Address</label>
          <input
            type="text"
            id="reg-address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="reg-aadharcardnumber">Aadharcard Number</label>
          <input
            type="number"
            id="reg-aadharcardnumber"
            value={aadharcardnumber}
            onChange={(e) => setAadharcardnumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="reg-password">Password</label>
          <input
            type="password"
            id="reg-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="role">Select Role:</label>
          <select id="role" value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="">Select</option>
          <option value="voter">Voter</option>
          <option value="admin">Admin</option>
          </select>
          <p>Selected Role :   {role}</p>
        </div>
        <button  type="submit">Register</button>
        <button ><Link to={'/'}>Already have an account</Link></button>
      </form>
    </div>
  );
};
export default Registration;
