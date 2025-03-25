import "../styles/profile.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MyCard from "../components/MyCard";
import img1 from "../img/golf.jpg";
import img2 from "../img/surfing.jpg";
import img3 from "../img/holiday_0.png";
import img4 from "../img/island.jpg";
import img5 from "../img/yoga.jpg";
import { FaImage } from "react-icons/fa";
import axios from "axios";

const Login = () => {
  // Initializing state with default values
  const [userData, setUserData] = useState({
    //id: 32,
    name: '',
    email: '',
    contact: '',
    dob: '',
    password: '',
    avatar_public_id: "wegwvqgve23727831",
    avatar_url: "",
    interests: "",
    created_at: "2025-02-18T10:19:28.790Z",
    updated_at: "2025-02-18T10:19:28.790Z"
  });
  const navigate = useNavigate();
  const [interestArr, setInterestArr] = useState("");
  const [selectedInterests, setSelectedInterests] = useState([]);
  const interestsData1 = [
    { img: img1, text: "Golf" },
    { img: img2, text: "Music" },
    { img: img3, text: "Rooms" },
    { img: img4, text: "Exploring" },
    { img: img5, text: "Cooking" }
  ];
  const interestsData2 = [
    { img: img1, text: "Plays" },
    { img: img2, text: "Chinese Food" },
    { img: img3, text: "Screaming" },
    { img: img4, text: "Walking" },
    { img: img5, text: "Water Sports" }
  ];
  useEffect(() => {
    setInterestArr(selectedInterests.join(","));
  }, [selectedInterests]);

  const handleInterestToggle = (selectedText) => {
    setSelectedInterests((prev) =>
      prev.includes(selectedText) ? prev.filter((item) => item !== selectedText) : [...prev, selectedText]
    );
  };



  // Handling the input change dynamically
  const handleInputChange = (e) => {
    const { name, value } = e.target;  // Extract name and value from input
    setUserData(userData => ({
      ...userData,      // Spread the previous state
      [name]: value     // Dynamically update the field using name
    }));
  };

  //handle image upload
  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch("http://localhost:5000/file/upload", {
        method: "POST",
        body: formData,
      });
      console.log("done")
      const data = await response.json();
      console.log(data, "datata");
      if (data.imageUrl) {
        setUserData((prev) => ({ ...prev, avatar_url: data.imageUrl })); // Store URL in state
        console.log("Image uploaded:", data.imageUrl);
      }
      console.log("done3")
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleSubmit = () => {
    const updatedUserData = { ...userData, interests: interestArr };
    console.log(userData);
    sessionStorage.setItem('user', JSON.stringify(updatedUserData));

    // Make the POST request to your backend API
    fetch('http://localhost:5000/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedUserData)  // Send user data as JSON
    })
      .then(response => response.json())
      .then(data => {
        console.log('User added:', data);
        navigate("/signIn")
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
          <div className="profile-img" style={{
            backgroundImage: `linear-gradient(to bottom, rgba(197, 171, 171, 0.47), rgba(119, 116, 116, 0.9)), url(${userData.avatar_url})`
          }}>

            {/* Profile image */}
            <div className="input-section">

                            <FaImage      onChange={handleFileUpload} color="white" fontSize="20px" style={{marginTop:"36px",opacity:"0.5", marginLeft:"36px", position:"absolute", zIndex:"1000"}}/>

                            <input
                style={{ color: "white", fontSize: "10px",opacity:"0",width:"100px", height:"100px", position:"relative"}}
                type="file"
                className="input"
                accept="image/*" // Only accept image files
              // Handle file change
              onChange={handleFileUpload}
              />
            </div>

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
            <div className="card-section">
              {interestsData1.map((arr, index) => (
                <MyCard
                  key={index}
                  props={arr.img}
                  text={arr.text}
                  onClick={() => handleInterestToggle(arr.text)}
                  isSelected={selectedInterests.includes(arr.text)}
                />
              ))}
            </div>

            <div className="card-section">
              {interestsData2.map((arr, index) => (
                <MyCard
                  key={index}
                  props={arr.img}
                  text={arr.text}
                  onClick={() => handleInterestToggle(arr.text)}
                  isSelected={selectedInterests.includes(arr.text)}
                />
              ))}
            </div>

            <div className="input-section">
              <p className="para">Please let us know if you have some interests</p>
              <input
                className="input1"
                value={selectedInterests.join(", ")}
                onChange={(e) => {
                  const inputValues = e.target.value.split(",").map((item) => item.trim());
                  setSelectedInterests(inputValues);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Backspace" && !e.target.value) {
                    setSelectedInterests((prev) => prev.slice(0, -1));
                  }
                }}
              />
            </div>
            <div className="input-section">
              <p className="para">
                Password
              </p>
              <input
                className="input"
                name="password"
                value={userData.password}
                onChange={handleInputChange}
              />
            </div>

            {/* Image Upload Section */}


            <div className="save-btn">
              <div className="btnsection">
                <button className="save" onClick={() => {
                  console.log(userData);
                  handleSubmit();
                }}>
                  Submit
                </button>
                <button className="signIn" onClick={() => {
                  console.log(userData);
                  handleSubmit();
                }}>
                  Sign In
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
