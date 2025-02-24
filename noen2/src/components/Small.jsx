import "../styles/Small.scss"
import { VscSmiley } from "react-icons/vsc";
import { MdEmojiEmotions } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from 'axios'
const Smal = ({ props, catName, title, index, category_id, saved_status }) => {

    const [isActive, setIsactive] = useState(saved_status)
    const handleClick = async () => {
    try {
        // Toggle the state first
        const newStatus = !isActive; // Toggle the status
        setIsactive(newStatus); // Update the local state immediately

        // Send the update to the backend
        const response = await axios.patch(`http://localhost:5000/categories/category/${category_id}/toggle`, { active: newStatus });

        // Check if the response is correct
        if (response.data.updateStatus !== newStatus) {
            console.error('Backend returned an unexpected value for updateStatus');
        }
    } catch (error) {
        console.error('Error updating status:', error);
        // Revert to previous state if there was an error
        setIsactive(isActive);
    }
};




    return (
        <>
            <div className="small-cards">

                <div className="img">
                    <div className="remove1" onClick={handleClick}>
                        <FaHeart
                            style={{ color: isActive ? 'red' : 'gray', fontSize: '24px' }}
                        />


                    </div>
                    <div className="remove2">
                        {index}
                    </div>
                    <img src={props}></img>


                </div>

                <div className="content">
                    <div className="heading">
                        <div className="left">
                            <span className="span"><MdEmojiEmotions style={{ color: "#9ACC0D", fontSize: "14px" }} /></span>{catName}
                        </div>
                        <div className="right">
                            Nov 10-29

                        </div>

                    </div>

                    <p className="mid">{title}</p>
                    <p className="last">10:38 AM - 7:30 PM</p>
                </div>

            </div>

        </>
    )
}
export default Smal;