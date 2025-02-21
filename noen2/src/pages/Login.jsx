import "../styles/profile.scss"
import { useState } from "react";


const Login = () => {
    // Initializing state with default values
    const [userData, setUserData] = useState({
        id: 22,
        name: '',
        email: '',
        contact: '',
        dob: new Date('1989-12-13').toISOString(),
        password: 'jhjkhjhjk',
        avatar_public_id: "wegwvqgve23727831",
        avatar_url: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
        created_at: "2025-02-18T10:19:28.790Z",
        updated_at: "2025-02-18T10:19:28.790Z"
    });
      
    // Handling the input change dynamically
    const handleInputChange = (e) => {
        const { name, value } = e.target;  // Extract name and value from input
        setUserData(userData => ({
            ...userData,      // Spread the previous state
            [name]: value     // Dynamically update the field using name
        }));
    };
    const handleSubmit = () => {
     
        console.log(userData);
        sessionStorage.setItem('user',JSON.stringify(userData));
        // Make the POST request to your backend API
        fetch('http://localhost:5000/profile', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)  // Send user data as JSON
        })
        .then(response => response.json())
        .then(data => {
          console.log('User added:', data);
          // Optionally, show a success message or redirect the user
        })
        .catch(error => {
          console.error('Error:', error);
          // Optionally, show an error message
        });
      };
    
    return (
        <>
            <div className="profile">
                <p className="heading">Login Profile</p>
                <div className="content">
                    <div className="profile-img">
                        {/* Profile image */}
                    </div>
                    <div className="profile-content">
                        <div className="input-section">
                            <p className="para">
                                What should we call you?
                            </p>
                            <input
                                className="input"
                                name="name"  // Name field
                                value={userData.name}
                                onChange={handleInputChange} // Handle change dynamically
                            />
                        </div>
                        <div className="input-section">
                            <p className="para">
                                What's your email address?
                            </p>
                            <input
                                className="input"
                                style={{ backgroundColor: "#F5F5F5" }}
                                name="email" // Email field
                                value={userData.email}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="input-section">
                            <p className="para">
                                On which number can we contact you?
                            </p>
                            <input
                                className="input"
                                name="contact"  // Contact field
                                value={userData.contact}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="input-section">
                            <p className="para">
                                When can we wish a happy birthday?
                            </p>
                            <input
                                className="input"
                                name="dob"  // Date of birth field
                                value={userData.dob}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="input-section">
                            <p className="para">
                                Please let us know if you have some interests
                            </p>
                            <input
                                className="input1"
                                name="interests"  // Interests field
                                value={userData.interests}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="save-btn">
                            <div className="">
                                <button className="save" onClick={()=>{
                                    console.log(userData);
                                    handleSubmit();
                                }}>
                                    Submit
                                </button>
                            </div>
                          
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;

