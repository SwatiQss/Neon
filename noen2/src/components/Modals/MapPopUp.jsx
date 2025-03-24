import "../../styles/MapPopup.scss"
import { IoStarSharp } from "react-icons/io5";

const MapPopup=({title})=>{
         return(
            <>
            <div className="MapPopup">
                <div className="MapPopup-img">

                </div>
                <div className="MapPopup-content">
                      <div className="headingMap">{title}</div>
                      <div className="mapdate">
                        Nov 10-29
                      </div>
                      <div className="maptime">
                        10:30 AM- 10:30 PM
                      </div>

                      <div className="mapreview">
                        <IoStarSharp style={{fontSize:"14px",color:"black"}}/> <span className="span">
                            4.9 (23 reviews)
                        </span>
                      </div>
                </div>

            </div>
            </>
         )
}
export default MapPopup;