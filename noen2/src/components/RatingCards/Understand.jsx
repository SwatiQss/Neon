import "../../styles/Understand.scss"
import { FaGrinHearts } from "react-icons/fa";
import { PiSmileyFill } from "react-icons/pi";


const Understand =({props,props2})=>{
    return (
        <>
        <div className="cards">
            <div className="img">
               <div className="card-icon">
               <FaGrinHearts/>
               </div>
                <img src={props}/>


            </div>
            <div className="content">
               <p className="heading">
                Indulge in the Finest Epicurean Cuisines
               </p><span className="span">on Nov 17, 2022</span>

               <div className="para">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis totam at, culpa, mollitia praesentium cum sed debitis corporis illo neque ullam amet odio porro nihil ea. Quidem explicabo adipisci et.
                </p>

               </div>

               <div className="accept">

                <button className="btn">
                    Yes, I accept
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