import "../../styles/Golf.scss"
import { IoIosStar } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineAppstore } from "react-icons/ai";
import { VscSmiley } from "react-icons/vsc";
const Golf = ({ props }) => {
    return (
        <>
            <div className="card" style={{backgroundImage:`url(${props})`}}>
                <div className="sun-logo">
                    <img className="img" src="/assets/img/Group 1151.svg"/>

                </div>
                <div className="card-content">
                    <div className="head">
                        <h3 className="heading">
                            Round of Golf
                        </h3>
                        <div className="rating">
                            <div className="star">
                                <IoIosStar style={{ color: "#FF385C" }} />
                                <IoIosStar style={{ color: "#FF385C" }} />
                                <IoIosStar style={{ color: "#FF385C" }} />
                                <IoIosStar style={{ color: "#FF385C" }} />
                            </div>

                        </div>

                    </div>
                    <div className="para">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sequi alias architecto perferendis velit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sequi alias architecto perferendis velit?</p>

                    </div>
                    <div className="address">

                        <div className="content">

                            <span className="span"><CiCalendar style={{ color: "#FF385C" }} /></span>Nov,24 9:30 AM-Nov,29 10:30 PM
                        </div>
                        <div className="content">

                            <span className="span"><CiLocationOn style={{ color: "#FF385C" }} /></span>Sandalh City
                        </div>
                        <div className="content">

                            <span className="span"><AiOutlineAppstore style={{ color: "#FF385C" }} /></span>Golf
                        </div>

                    </div>
                    <div className="outer">
                        <div className="quote">
                            <span className="span"><VscSmiley style={{ color: "#55BF3B" }} /></span>Overhelemed vibes are coming here

                        </div>
                        <div className="schedule">
                            Scheduled

                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Golf;