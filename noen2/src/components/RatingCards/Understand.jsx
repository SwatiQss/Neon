import "../../styles/Understand.scss"
import { FaGrinHearts } from "react-icons/fa";
import { PiSmileyFill } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/modalSlice";

const Understand =({props,desc,title,id,emoji})=>{
  
    const dispatch=useDispatch();
    const handleClick=()=>{
        dispatch(openModal())
        sessionStorage.setItem('eventId',id);
    }
    return (
        <>
        <div className="cards">
            <div className="img">
               <div className="card-icon">
              {emoji}
               </div>
                <img src={props}/>


            </div>
            <div className="content">
               <p className="heading">
                {title}
               </p><span className="span">on Nov 17, 2022</span>

               <div className="para">
                <p>
                   {desc}
                </p>

               </div>

               <div className="accept">

                <button className="btn" onClick={handleClick}>
                    Yes, I would share
                </button>

                <p className="no">
                    No,thanks
                </p>

               </div>
            </div>

        </div>
        </>
    )
}

export default Understand