import { FaStar } from "react-icons/fa6";
import "../../styles/roundgolf.scss"
import AddReview from "../../components/AddReview";
import { GrAppsRounded } from "react-icons/gr";
import Reserve from "../../components/Reserve";

const RoundGolf = () => {
    return (
        <>
            <div className="roundGolf">
                <div className="addReview">
                    <AddReview />
                </div>

                <div className="round-heading">
                    <div className="main-heading">
                        Round of Golf
                    </div>
                    <div className="down">


                        <div className="star">
                            <FaStar />
                        </div>

                        <div className="star">
                            <FaStar />
                        </div>

                        <div className="star">
                            <FaStar />
                        </div>

                        <div className="star">
                            <FaStar />
                        </div>

                        <div className="star">
                            <FaStar />
                        </div>

                        <p className="paraa paraa2">5.0</p>
                        <p className="paraa">.</p>
                        <p className="paraa paraa2">23 reviews</p>
                        <p className="paraa">.</p>
                        <p className="paraa">Sindalah City, Dubai</p>

                    </div>


                </div>

                <div className="carasoul">
                    <div className="carasoul-left">
                        <div className="up">
                            <div className="photo1">

                            </div>
                            <div className="photo2">


                            </div>
                        </div>
                        <div className="down">
                            <div className="photo1">

                            </div>
                            <div className="photo2">


                            </div>
                        </div>

                    </div>
                    <div className="carasoul-right">

                    </div>

                </div>

                <div className="about-event">
                    
                    <div className="about-event-heading">
                    About the Event

                    </div>
                  <div className="helper-div">
                  <div className="about-left">
                        <div className="about-left1">
                        <div className="about-left1">
                            <div className="left-icon">
                            <GrAppsRounded/>
                            </div>

                            <div className="left-content">
                                <div className="left-content-heading">
Great Location 
                                </div>
                                <div className="left-content-down">
Every guest has given 5 star location on this 
                                </div>

                            </div>

                        </div>
                        <div className="about-left1">
                            <div className="left-icon">
                            <GrAppsRounded/>
                            </div>

                            <div className="left-content">
                                <div className="left-content-heading">
Invigorating & uplifting experience

                                </div>
                                <div className="left-content-down">

                                </div>

                            <div className="left-icon">
                             <GrAppsRounded/>
                            </div>

                            <div className="left-content">
                                <div className="left-content-heading">
Golf
                                </div>
                                <div className="left-content-down">
This is one of many famous event Catagory comes under Golf Catagory
                                </div>

                            </div>

                        </div>
                            </div>

                        </div>

                    </div>

                    <div className="about-right">
                          <Reserve/>

                    </div>
                  </div>

                </div>

                <div className="review-cards">

                </div>

                <div className="recommed-section">

                </div>



            </div>

        </>
    )
}

export default RoundGolf;