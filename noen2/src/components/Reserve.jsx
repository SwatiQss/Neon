import "../styles/reserve.scss"

const Reserve=()=>{
    return (
        <>
        <div className="reserve-card">
            <div className="reserve-main">
                <div className="reserve-date">
                    10:30 AM- 7:30 PM
                </div>

                <div className="reserve-mid">
                    <div className="reserve-first">
                          <div className="from">
                            From<br/><span className="span">Nov 10, 2022</span>
                            

                          </div>

                          <div className="to">
                          To<br/><span className="span">Nov 29, 2022</span>
                          </div>
                    </div>

                    <div className="reserve-second">
                        Guests<br/><span className="span">1 adult</span>

                    </div>
                   
                </div>
                <div className="seats">
                172 Seats still available
                </div>
                

                <div className="reserve-button">
                    <button className="reserve-btn">
                        Reserve my seats

                    </button>

                </div>

            </div>


        </div>
        
        </>
    )
}
export default Reserve;