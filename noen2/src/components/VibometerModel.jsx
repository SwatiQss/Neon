import "../styles/vibemterModel.scss"
import { useEffect, useState } from "react";
import Speedometer from "./Speedometer";
import { useNavigate } from "react-router-dom";


const ViboModal = () => {
    const [idUse, setIduse] = useState();
    const[eventId,setEventId]=useState(0);
   
 const [speed, setSpeed] = useState(50);

 useEffect(() => {
    const savedData = sessionStorage.getItem('user');
    const savedId = sessionStorage.getItem('eventId');

    if (savedData) {
        const user = JSON.parse(savedData);
        setIduse(user.id);
    }
    if (savedId) {
        setEventId(parseInt(savedId));
    }
}, []); // Run only once when component mounts

// Update `vibo` whenever `idUse` or `eventId` changes
useEffect(() => {
    setVibo((prevData) => ({
        ...prevData,
        user_id: idUse,
        event_id: eventId
    }));
}, [idUse, eventId]); // Depend on `idUse` and `eventId`


    const [vibo, setVibo] = useState({
        user_id:idUse,
        event_id:eventId,
        vibes: "",
        experience: ""

    })
   

    const handleSpeedChange = (newSpeed) => {
        setSpeed(newSpeed);
    
        let vibe = ""; // Determine the vibe based on speed
    
        if (newSpeed <= 16) vibe = "overwhelmed";
        else if (newSpeed <= 32) vibe = "happy";
        else if (newSpeed <= 48) vibe = "okay";
        else if (newSpeed <= 54) vibe = "bad";
        else if (newSpeed <= 70) vibe = "sad";
        else vibe = "cried";
    
        setVibo((prevData) => ({
            ...prevData,
            vibes: vibe, // Properly setting the vibes key
        }));
    
        console.log("Updated vibes:", vibe);
    };
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setVibo((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    };
    const navigate=useNavigate();

    const handleSubmit = () => {
        console.log("vibo");
        fetch("http://localhost:5000/maps/map", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(vibo),
        })
            .then((reponse) => reponse.json())
            .then((data) => {
                console.log(data);

            })
            .catch((error) => {
                console.log("Error", error);
            })
            navigate('/scheduled');
    }

    return (
        <>
            <div className="reviewModal">
                <div className="review-heading">
                    Add a review


                </div>

                <div className="review-para">
                    Hi Charlie, if you're on this page, we bet you enjoy this event fully.Would you like to share your feedback review wiht us?
                </div>

                <div className="vibemeter">

                    <Speedometer speed={speed} setSpeed={handleSpeedChange} />

                </div>
                <div className="comment-section">
                    <input type="text"
                        className="review-input"
                        name="experience"
                        value={vibo.experience}
                        onChange={handleInputChange}>
                    </input>

                </div>

                <button className="review-btn" onClick={handleSubmit}>
                    Submit
                </button>


            </div>

        </>
    )
}

export default ViboModal;
