import "../styles/profile.scss";
import img1 from "../img/golf.jpg";
import img2 from "../img/surfing.jpg";
import img3 from "../img/holiday_0.png";
import img4 from "../img/island.jpg";
import img5 from "../img/yoga.jpg";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import MyCard from "./MyCard";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

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

const Profile = () => {
    const [userData, setUserData] = useState({});
    const [selectedInterests, setSelectedInterests] = useState([]);
    const [userId, setUserId] = useState(null);
    const [interestArr, setInterestArr] = useState("");
    const [present, setPresent] = useState([]);

    useEffect(() => {
        const savedData = sessionStorage.getItem("user");
        if (savedData) {
            const user = JSON.parse(savedData);
            setUserData(user);
            setUserId(user.id);
            if (user.interests) {
                setPresent(user.interests.split(",").map(item => item.trim())); // Correctly set existing interests
            }
        }
    }, []);

    useEffect(() => {
        setInterestArr(selectedInterests.join(","));
    }, [selectedInterests]);

    useEffect(() => {
        fetch(`http://localhost:5000/getintrest`)
            .then(response => response.json())
            .then(data => {
                if (data.length > 0 && data[0].interest) {
                    setPresent(data[0].interest.split(",").map(item => item.trim()));
                }
            })
            .catch(error => console.error("Error fetching interests:", error));
    }, []);

    const handleInterestToggle = (selectedText) => {
        setSelectedInterests((prev) =>
            prev.includes(selectedText) ? prev.filter((item) => item !== selectedText) : [...prev, selectedText]
        );
    };

    const notify = () => {
        toast.success("Interests Updated!", { position: "top-right" });
    };

    const handleSave = async () => {
        if (!userId || !interestArr) {
            console.error("User ID or interests are undefined, cannot send request.");
            return;
        }

        try {
            await axios.patch(`http://localhost:5000/update/${userId}/toggle`, {
                interest: interestArr
            });
            notify();
            setPresent(selectedInterests); // Update UI with new selected interests
        } catch (error) {
            console.error("Error updating interests:", error);
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="profile">
                <p className="heading"> Edit {userData.name}'s Profile</p>
                <div className="content">
                    <div
                        className="profile-img"
                        style={{
                            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.467), rgba(0, 0, 0, 0.9)), url(${userData.avatar_url})`
                        }}
                    ></div>
                    <div className="profile-content">
                        <div className="input-section">
                            <p className="para">What should we call you?</p>
                            <input className="input" value={userData.name || ""} readOnly />
                        </div>
                        <div className="input-section">
                            <p className="para">What's your email address?</p>
                            <input className="input" style={{ backgroundColor: "#F5F5F5" }} value={userData.email || ""} readOnly />
                        </div>
                        <div className="input-section">
                            <p className="para">On which number can we contact you?</p>
                            <input className="input" value={userData.contact || ""} readOnly />
                        </div>
                        <div className="input-section">
                            <p className="para">When can we wish you a happy birthday?</p>
                            <input className="input" value={userData.dob || ""} readOnly />
                        </div>

                        <div className="card-section">
                            {interestsData1.map((arr, index) => (
                                <MyCard
                                    key={index}
                                    props={arr.img}
                                    text={arr.text}
                                    onClick={() => handleInterestToggle(arr.text)}
                                    isSelected={selectedInterests.includes(arr.text) || present.includes(arr.text)}
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
                                    isSelected={selectedInterests.includes(arr.text) || present.includes(arr.text)}
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

                        <div className="save-btn">
                           <div className="btnsection">
                           <button className="save" onClick={handleSave}>Save</button>
                           <button className="cancel" onClick={() => setSelectedInterests([])}>Cancel</button>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
