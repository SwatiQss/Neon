import "../styles/profile.scss";
import { useState } from "react";

const Login = () => {
  // Initializing state with default values
  const [userData, setUserData] = useState({
    id: 29,
    name: '',
    email: '',
    contact: '',
    dob: new Date('1989-12-13').toISOString(),
    password: 'jhjkhjhjk',
    avatar_public_id: "wegwvqgve23727831",
    avatar_url: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80", // Default avatar image
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

  // Handling image file upload
  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the uploaded file

    if (file) {
      const reader = new FileReader();
      
      reader.onloadend = () => {
        // Update the avatar_url with the uploaded image URL (this example uses the URL from FileReader)
        setUserData(userData => ({
          ...userData,
          avatar_url: reader.result // This gives a data URL of the uploaded image
        }));
      };
      
      reader.readAsDataURL(file); // Convert the file to a data URL
    }
  };

  const handleSubmit = () => {
    console.log(userData);
    sessionStorage.setItem('user', JSON.stringify(userData));

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
            <img src={userData.avatar_url} alt="Profile" className="profile-avatar" />
          </div>
          <div className="profile-content">
            <div className="input-section">
              <p className="para">
                What should we call you?
              </p>
              <input
                className="input"
                name="name"
                value={userData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-section">
              <p className="para">
                What's your email address?
              </p>
              <input
                className="input"
                style={{ backgroundColor: "#F5F5F5" }}
                name="email"
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
                name="contact"
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
                name="dob"
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
                name="interests"
                value={userData.interests}
                onChange={handleInputChange}
              />
            </div>

            {/* Image Upload Section */}
            <div className="input-section">
              <p className="para">Upload your profile picture</p>
              <input
                type="file"
                className="input"
                accept="image/*" // Only accept image files
                onChange={handleImageChange} // Handle file change
              />
            </div>

            <div className="save-btn">
              <div>
                <button className="save" onClick={() => {
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
