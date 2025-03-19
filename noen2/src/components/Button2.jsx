import { FaBell } from "react-icons/fa";
import "../styles/btn2.scss";
import { useState } from "react";

const Button2 = ({ sendDataParent4 }) => {
    const [walk, setWalk] = useState(0);
    const storedEvents = JSON.parse(sessionStorage.getItem("events")) || [];

    const handleClick = (walkTime) => {
        console.log("clicked", walkTime);
        setWalk(walkTime);  // Update state

        // Filter events based on walking time
        const filteredEvents = storedEvents.filter(event => event.walking === walkTime);

        // Send filtered events to parent
        sendDataParent4(filteredEvents);
        console.log(filteredEvents, "walking");
    };

    return (
        <>
            <button className="btn">
                <div className="left" onClick={() => handleClick(10)}>
                    10 mins walking
                </div>
                <div className="mid" onClick={() => handleClick(20)}>
                    20 mins walking
                </div>
                <div className="right" onClick={() => handleClick(30)}>
                    30 mins walking
                </div>
            </button>
        </>
    );
};

export default Button2;
