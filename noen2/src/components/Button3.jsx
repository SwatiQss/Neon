import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import "../styles/btn3.scss";

const Button3 = ({ locations, sendDataParent3 }) => {
    const [location, setLocation] = useState("Pick a Location");
    const [isOpen, setIsOpen] = useState(false);

    const handleSelectLocation = (selectedLocation) => {
        setLocation(selectedLocation);

        // Retrieve and parse events from sessionStorage
        const storedEvents = JSON.parse(sessionStorage.getItem("events")) || [];

        // Filter events based on selected location
        const filteredEvents = storedEvents.filter(event => event.location === selectedLocation);

        // Send filtered events to parent component
        sendDataParent3(filteredEvents);

        setIsOpen(false); // Close dropdown
    };

    return (
        <div className="btn3-container">
            <button className="btn3" onClick={() => setIsOpen(!isOpen)}>
                <div className="emoji">
                    <CiLocationOn style={{ color: "#FF385C" }} />
                </div>
                <div className="date">{location}</div>
            </button>

            {isOpen && (
                <div className="drop" style={{ backgroundColor: "white", width: "15%", height: "200px", borderRadius: "5px", overflowY: "auto", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", padding: "10px", position: "absolute", zIndex: "1200" }}>
                    {locations.map((loc, index) => (
                        <div key={index} className="dropdown-item" onClick={() => handleSelectLocation(loc)} style={{ fontSize: "12px", padding: "10px" }}>
                            {loc}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Button3;
