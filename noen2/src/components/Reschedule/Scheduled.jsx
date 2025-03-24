import "../../styles/scheduled.scss"

const Scheduled=({guests,from,to})=>{

    const dateFrom=new Date(from);

    const fromFormated=dateFrom.toLocaleDateString("en-us",{
        day:"numeric",
        month:"long",
        year:'numeric',
    })

    const dateTo=new Date(to);
    const toFormated=dateFrom.toLocaleDateString("en-us",{
        day:"numeric",
        month:"long",
        year:'numeric'
    })
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
                            From<br/><span className="span">{fromFormated}</span>
                            

                          </div>

                          <div className="to">
                          To<br/><span className="span">{toFormated}</span>
                          </div>
                    </div>

                    <div className="reserve-second">
                        Guests<br/><span className="span">{guests}</span>

                    </div>
                   
                </div>
            </div>


        </div>
        
        </>
    )
}
export default Scheduled;