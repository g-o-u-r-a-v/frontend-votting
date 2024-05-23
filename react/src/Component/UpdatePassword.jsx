import React, {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate} from 'react-router-dom'



function UpdatePassword() {
    const [currentpass, setCurrentpass] = useState('');
    const [newpass, setNewpass] = useState('');
    const navigation = useNavigate()


    const handleupdatepassword = async() => {


        try {
            const authToken = await localStorage.getItem('authToken');
            console.log(currentpass ,newpass)
            const response = await fetch('http://localhost:3000/user/profile/password', {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${authToken}` ,     
            },
            body: 
                JSON.stringify({
                    currentPassword : currentpass,
                    newPassword : newpass
                })
            ,
          })   
          console.log(response.status) 
          if (response.ok) {
            const data = await response.json()
            console.log(data)
            console.log('Password updated successfully');
            toast('Password updated successfully');
            navigation('/profile' )  
          } 
          else {
            // Handle login error
            setError('Invalid adharcard number or password');
            toast("Try again"
          )
          }
        } catch (error) {
          console.error('Error during login:', error.message);
          setError('An error occurred during login');
        }
    }
  return (
    <div className="login-container">
      <h2>Update Password</h2>
      <form>
        <div className="form-group">
          <label htmlFor="currentpass">Current Password </label>
          <input
            type="password"
            id="currentpass"
            value={currentpass}
            onChange={(e) => setCurrentpass(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="newpass">New Password (String)</label>
          <input
            type="password"
            id="newpass"
            value={newpass}
            onChange={(e) => setNewpass(e.target.value)}
            required
          />
        </div>
        <button type="button" onClick={handleupdatepassword}>Update</button>
      </form>
    </div>
  )
}

export default UpdatePassword
