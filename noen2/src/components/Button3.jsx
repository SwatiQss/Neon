import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import "../styles/btn3.scss";
import { index } from "d3";

const Button3 = ({ locations, sendDataParent3}) => {
    const [location, setLocation] = useState("Pick a Location");
    const [isOpen, setIsOpen] = useState(false); // For dropdown toggle
    const filtered = sessionStorage.getItem("events");
    const handleSelectLocation = (selectedLocation) => {
        setLocation(selectedLocation);
        sendDataParent3(filtered);
        setIsOpen(false); // Close the dropdown after selection
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
                <div className="drop" style={{backgroundColor:"white",  width:"15%",height:"200px",borderRadius:"5px",overflowY:"auto",boxShadow:"0px 4px 6px rgba(0, 0, 0, 0.1)",padding:"10px",position:"absolute",zIndex:"1200"}}>
                    {locations.map((loc, index) => (
                        <div key={index} className="dropdown-item" onClick={() => handleSelectLocation(loc)} style={{fontSize:"14px", padding:"10px"}}>
                            {loc}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Button3;
