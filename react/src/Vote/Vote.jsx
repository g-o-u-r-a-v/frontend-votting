import React from 'react'
import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CandidateCard from './Candidates';

function Vote() {
    const [profileData, setProfileData] = useState(null);
    useEffect(() => {
        const fetchProfile = async () => {
          try {
            const authToken = localStorage.getItem('authToken');
            const response = await fetch('http://localhost:3000/candidate/profile', {
              headers: {
                Authorization: `Bearer ${authToken}`,
              },
            });
            if (response.ok){
              const data = await response.json();
              const candidates = data['candidates']
              console.log(candidates)
              setProfileData(candidates);
            }

            else {
              const data = await response.json()
              alert(data.massage)
              console.log("Did not get candidate bad request")
            }
          } catch (error) {
            console.error('Profile fetch error:', error);
          }
        };
        fetchProfile();
      }, []);

      useEffect(() => {
        const intervalId = setInterval(() => {
          window.location.reload();
        }, 25000); // 10000 milliseconds = 10 seconds
    
        return () => clearInterval(intervalId); // Clean up on unmount
      }, []);

      const handleVoting = async(candidate) => {
        try{
            const authToken = await localStorage.getItem('authToken');
            const response = await fetch(`http://localhost:3000/candidate/vote/${candidate._id}`, {
              method: 'POST',
              headers: {
                Authorization: `Bearer ${authToken}`,
              },
            });
            // location.reload()
            if (response.ok){
                alert("Voting is doen..")
                console.log("Voting is done...")
            }
            if (response.status == 402){
                console.log("Please select a valid candidate ")

            }
            if (response.status == 450){
                alert("Admin csn not vote")
                console.log("Admin can not vote")
                
            }
            if (response.status == 410){
                alert("ALready voting is done..")
                console.log("Already votting is done..")
            }
            else {
                console.log(response.status)
                console.log("Error durring voting")
            }
        }        
        catch(error) {
            console.error('Profile fetch error:', error);
          }
    }


  return(
    <div>
      <div className='redirect'>
        <Link to={'/profile'}>Back to profile</Link>
        <Link  onClick={() => localStorage.clear()} to={'/'}> Logout</Link>
      </div>
      {profileData ? (  
        <div>
          <ul>
            {profileData.map((candidate) => (
              <div key={candidate._id}>
                <CandidateCard  {...candidate}/> 
                <button onClick = {()=> handleVoting(candidate) }className='button'>Vote</button>
              </div>
          ))}
          </ul> 
        <Link to={'/addcandidate'}>Add new Candidate</Link>
      </div>
      ):(<div>
        <h3>404 Bad request</h3>
      </div>)
    }
    </div>
  );
}
  

export default Vote
