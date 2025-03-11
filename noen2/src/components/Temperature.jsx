import sun from "../img/cloudy-day.png"
import "../styles/temp.scss"
const Temperature=({temp})=>{
    return(
        <>
        <div className="temperature">
            <div className="sun">
                   <img className="imgsun" src={sun}></img>
            </div>

            <div className="data">
              <div className="tempdata">
              <p className="temp">18 <span className="sunspan">
                °C
                    </span></p>
              </div>
              <div className="max-min">
              <div className="mintemp">
              <p className="temp">16 <span className="sunspan">
                °C
                    </span></p>
              </div>
              <div className="maxtemp">
              <p className="temp">29 <span className="sunspan">
                °C
                    </span></p>
              </div>

              </div>


            </div>

        </div>
        
        </>
    )
}

export default Temperature;