import React, { useState } from "react";
import "./Registration.css";
import {Link} from 'react-router-dom'

const Updateprofile = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [mobilenumber, setMobilenumber] = useState("");
  const [address, setAddress] = useState("");
  const [aadharcardnumber, setAadharcardnumber] = useState("");
  const [password, setPassword] = useState("");

  const onRegister = async (userData) => {
    // Perform API call for registration
    try {
      const response = await fetch("http://localhost:3000/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      if (response.ok) {
        // Handle successful registration
        console.log("Registration successful");
      } else {
        // Handle registration failure
        console.error("Registration failed");
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
    };
    onRegister(userData);
  };

 

  return (
    <div className="registration-container">
      <h2>Edit Profile</h2>
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
        <button  type="submit">Edit</button>
      </form>
    </div>
  );
};
export default Updateprofile;
