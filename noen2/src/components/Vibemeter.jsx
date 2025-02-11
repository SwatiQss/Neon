import "../styles/vibe.scss"
import { FaGrinHearts } from "react-icons/fa";

const Vibe=()=>{
    return (
        <>
        <div className="vibes">
            <div className="right">
                <div className="right-up">
                    <div className="emoji">
                        <FaGrinHearts style={{color:"green",fontSize:"60px"}}/>
                    </div>
                    <div className="heading1">
                      Overwhelmed experience
                        
                    </div>

                </div>
                <div className="right-down">
                    <div className="vibe">
                         Your Vibe-O-Meter reading exists us too

                    </div>
                    <div className="vibe-para">
                     We are happy too because we successfully keep you happy during this
                     <br/>visit to Sindalah City
                    </div>
                    

                </div>

            </div>
            <div className="left">
                <img className="vibe-img" src="/assets/img/vibe-o-meter.svg"/>

            </div>


        </div>
        
        </>
    )

}

export default Vibe;