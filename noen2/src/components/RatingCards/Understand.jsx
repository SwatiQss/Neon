import "../../styles/Understand.scss"

const Understand =({props})=>{
    return (
        <>
        <div className="cards">
            <div className="img">
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

                <div className="no">
                    No, thanks
                </div>

               </div>
            </div>

        </div>
        </>
    )
}

export default Understand