import "../../styles/small6.scss"
import { VscSmiley } from "react-icons/vsc";
import { MdEmojiEmotions } from "react-icons/md";

const Small6=({props,title,catName,category_id,saved_status})=>{
    return (
        <>
        <div className="small-cards">
            <div className="img">
                <img src={props}></img>

            </div>
            <div className="content">
                <div className="heading2">
         
                         {title}
                

                </div>

                <p className="mid2">3 guests attended this meeting</p>
                <p className="last2">on Nov 17, 2022</p>
                <p className="last-second2">you  rated this event </p>
            </div>

        </div>
        
        </>
    )
}
export default Small6;