import "../styles/profile.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  // Initializing state with default values
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  // Handling the input change dynamically
  const handleInputChange = (e) => {
    const { name, value } = e.target; // Extract name and value from input
    setUserData((prevUserData) => ({
      ...prevUserData, // Spread the previous state
      [name]: value, // Dynamically update the field using name
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:5000/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login successful:", data);
        sessionStorage.setItem("user", JSON.stringify(data)); // Store user data in sessionStorage
        navigate("/dashboard"); // Redirect to dashboard
      } else {
        console.error("Login failed:", data.message);
        alert(data.message); // Show error message if login fails
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="profile">
      <p className="heading">Sign In</p>
      <div className="content">
        <div className="profile-content">
          <div className="input-section">
            <p className="para">What's your email address?</p>
            <input
              className="input"
              type="email" // Added email validation
              style={{ backgroundColor: "#F5F5F5" }}
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              required // Ensure it's required
            />
          </div>

          <div className="input-section">
            <p className="para">Password</p>
            <input
              className="input"
              type="password" // Fix: Use password type
              name="password"
              value={userData.password}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="save-btn">
            <div className="btnsection">
              <button className="save" onClick={handleSubmit}> {/* No need for extra arrow function */}
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
