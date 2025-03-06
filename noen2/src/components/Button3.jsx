import { useState, useEffect } from "react";
import { FaBell } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import "../styles/btn3.scss";

const Button3 = () => {
    const [location, setLocation] = useState("Pick a Location");
    const handleClick=()=>{
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;
                    try {
                        const response = await fetch(
                            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
                        );
                        const data = await response.json();
                        setLocation(data.display_name || "Location Not Found");
                    } catch (error) {
                        console.error("Error fetching location:", error);
                        setLocation("Location Not Found");
                    }
                },
                (error) => {
                    console.error("Geolocation error:", error);
                    setLocation("Enable Location");
                }
            );
        } else {
            setLocation("Geolocation Not Supported");
        }
    }

    

    return (
        <>
            <button className="btn3" onClick={handleClick} >
                <div className="emoji">
                    <CiLocationOn style={{ color: "#FF385C" }} />
                </div>
                <div className="date">{location}</div>
            </button>
        </>
    );
};

export default Button3;
