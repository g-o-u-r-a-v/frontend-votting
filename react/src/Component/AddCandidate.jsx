import React,{useState} from 'react'
import { Link } from 'react-router-dom';

function AddCandidate() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [party, setParty] = useState("");

  const handleaddcandidate = async() =>{
    try {
        const authToken = await localStorage.getItem('authToken');
        const response = await fetch("http://localhost:3000/candidate/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
          body: JSON.stringify({
            name : name,
            party : party,
            age : age
          }),
        });
        console.log(response)
        if (response.ok) {
          console.log("Candidate added successful");
        } 
       
        else {
          const data = await response.json()
            alert(data.massage)
            console.log("Did not get candidate bad request")
        }
      } catch (error) {
        console.error("Error:", error);
      }
    

  }
  
  return (
    <div className="registration-container">
        <div className = 'redirecttovoting'> 
          <Link   to= '/vote'> Go to voting </Link>
        </div>
      <h2>Add Candidate</h2>
      <form  onSubmit={handleaddcandidate}>
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
          <label htmlFor="reg-email">Party</label>
          <input
            type="text"
            id="reg-party"
            value={party}
            onChange={(e) => setParty(e.target.value)}
          />
        </div>  

        <button  type="submit">Add</button>
        <br /><br />
        <h3>Note :-Only Admin can add or delete candidate </h3>
      </form>
    </div>
  )
}

export default AddCandidate
