import "../../styles/Golf.scss";
import { IoIosStar } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineAppstore } from "react-icons/ai";
import { FaGrinHearts } from "react-icons/fa";

const Golf = ({ event,img,title,descrp,cat,location,from,to }) => {
    const dateFrom=new Date(from);
    const fromFormated=dateFrom.toLocaleDateString("en-us",{
        day:"numeric",
        month:"long"
    })

    const dateTo=new Date(to);
    const toFormated=dateTo.toLocaleDateString("en-us",{
        day:"numeric",
        month:"long"
    })
    return (
        <>
            <div className="card" style={{ backgroundImage: `url(${img}})` }}>
                <div className="sun-logo">
                    <img className="img" src="/assets/img/Group 1151.svg" alt="Logo" />
                </div>
                <div className="card-content">
                    <div className="head">
                        <h3 className="heading">{title}</h3>
                        <div className="rating">
                            <div className="star">
                                {/* Display 5 stars */}
                                {[...Array(5)].map((_, index) => (
                                    <IoIosStar key={index} style={{ color: "#FF385C", fontSize: "13px" }} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="para">
                        <p>{descrp}</p>
                    </div>

                    <div className="address">
                        <div className="content">
                            <span className="span">
                                <CiCalendar style={{ color: "#FF385C", fontSize: "12px" }} />
                            </span>
                            {fromFormated}- {toFormated}
                        </div>
                        <div className="content">
                            <span className="span">
                                <CiLocationOn style={{ color: "#FF385C", fontSize: "14px" }} />
                            </span>
                            {location}
                        </div>
                        <div className="content">
                            <span className="span">
                                <AiOutlineAppstore style={{ color: "#FF385C", fontSize: "14px" }} />
                            </span>
                            {cat}
                        </div>
                    </div>
                    <div className="outer">
                        <div className="quote">
                            <span className="span">
                                <FaGrinHearts style={{ color: "#55BF3B", fontSize: "14px" }} />
                            </span>
                            Overwhelmed vibes are coming here
                        </div>
                        <div className="schedule">Scheduled</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Golf;
