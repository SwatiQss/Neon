import { FaStar } from "react-icons/fa6";
import "../../styles/roundgolf.scss"
import AddReview from "../../components/AddReview";
import { GrAppsRounded } from "react-icons/gr";
import Reserve from "../../components/Reserve";
import { CiLocationOn } from "react-icons/ci";
import { FaGrinHearts } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";
import ReviewCard from "../../components/ReviewCard";
import { PiArrowCircleLeftThin } from "react-icons/pi";
import { PiArrowCircleRightThin } from "react-icons/pi";
import Smal from "../../components/Small";
import img1 from "../../img/golf.jpg";
import img2 from "../../img/surfing.jpg";
import img3 from "../../img/holiday_0.png";
import img4 from "../../img/island.jpg"
import img5 from "../../img/yoga.jpg"
const imgarr2 = [img1, img2, img3, img4, img5]


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

                <div style={{ display: "flex", gap: "80px" }}>
                    <div className="about-event">

                        <div className="about-event-heading">
                            About the Event

                        </div>


                        <div className="helper-div">
                            <div className="about-left">
                                <div className="about-left1">
                                    <div className="left-icon">
                                        <GrAppsRounded style={{ fontSize: "20px", }} />
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
                                <div className="about-left1">
                                    <div className="left-icon">
                                        <FaGrinHearts style={{ fontSize: "20px" }} />
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
                                        <CiLocationOn style={{ fontSize: "20px" }} />
                                    </div>

                                    <div className="left-content">
                                        <div className="left-content-heading">
                                            Invigorating & uplifting experience

                                        </div>
                                        <div className="left-content-down">
                                            This event has a rating of 5.0 that make this event overwhelemed
                                        </div>

                                    </div>

                                </div>

                            </div>


                        </div>
                        <hr className='divider' />
                        <div className="para-div">
                            <div className="para-div-1">Lorem
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elit.

                            </div>
                            <div className="para-div-2">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elit.
                            </div>
                        </div>
                        <hr className='divider' />

                        <div className="river-home">
                            <div className="river-home-heading">
                                Operator River Stone
                            </div>
                            <div className="river-home-star">
                                <IoMdStar style={{ color: "#FF385C", fontSize: "14px" }} />
                                <IoMdStar style={{ color: "#FF385C", fontSize: "14px" }} />
                                <IoMdStar style={{ color: "#FF385C", fontSize: "14px" }} />
                                <IoMdStar style={{ color: "#FF385C", fontSize: "14px" }} />
                                <IoMdStar style={{ color: "#FF385C", fontSize: "14px" }} />
                                <span className="span">4.9</span>
                            </div>
                            <div className="river-home-para">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elit.

                            </div>

                        </div>
                    </div>

                    <div className="left-section" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Reserve />
                    </div>
                </div>
                <div className="review-cards">
                    <div>
                        <ReviewCard />
                    </div>
                    <div>
                        <ReviewCard />
                    </div>
                    <div>
                        <ReviewCard />
                    </div>
                    <div>
                        <ReviewCard />
                    </div>
                    <div>
                        <ReviewCard />
                    </div>
                    <div>
                        <ReviewCard />
                    </div>
                </div>
                <div className="arrow">
                    <PiArrowCircleLeftThin style={{ color: "grey", fontSize: "48px" }} />
                    <PiArrowCircleRightThin style={{ color: "black", fontSize: "48px" }} />


                </div>

                <div className="recommed-section">
                    <div className="recommed-section-heading">
                        See More Recommedation for you, Shane
                        </div>
                        <div className="card-section">
                            {
                                imgarr2.map((img, index) => (
                                    <Smal key={index} props={img} />
                                ))
                            }
                        </div>
                        <div className="card-section">
                            {
                                imgarr2.map((img, index) => (
                                    <Smal key={index} props={img} />
                                ))
                            }
                        </div>
                   

                </div>



            </div>

        </>
    )
}

export default RoundGolf;