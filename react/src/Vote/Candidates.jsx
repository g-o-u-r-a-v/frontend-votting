import React from 'react';
import "./Candidates.css"
import { toast } from 'react-toastify';
 

const CandidateCard = (candidate) => {
    
    
  return (
    <div className="candidate-card">
      <h2>{candidate.name}</h2>
      <p>Party: {candidate.party}</p>
      <p>Age: {candidate.age}</p>
      <p>Vote Count: {candidate.voteCount}</p>
    </div>
  );
};

export default CandidateCard  ;
