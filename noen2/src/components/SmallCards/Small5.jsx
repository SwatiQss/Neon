import "../../styles/Small5.scss"
import { VscSmiley } from "react-icons/vsc";
import { MdEmojiEmotions } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

const Small5=({props})=>{
    return (
        <>
        <div className="small-cards">

            <div className="img">
            <div className="remove1">
                <FaHeart style={{ color: "#222222"}}/>
            </div>
            <div className="remove2">
                1
            </div>
                <img src={props}></img>
               

            </div>
            
            <div className="content">
                <div className="heading">
                    <div className="left">
                         <span className="span"><MdEmojiEmotions style={{ color: "#9ACC0D",fontSize:"14px" }} /></span>Integrating&Uplifiting
                    </div>
                    <div className="right">
                        Nov 10-29

                    </div>

                </div>

                <p className="mid">Ground of Gold</p>
                <p className="last">10:38 AM - 7:30 PM</p>
            </div>

        </div>
        
        </>
    )
}
export default Small5;