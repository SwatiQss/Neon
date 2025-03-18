import "../../styles/Golf.scss";
import { IoIosStar } from "react-icons/io";
import { CiCalendar, CiLocationOn } from "react-icons/ci";
import { AiOutlineAppstore } from "react-icons/ai";
import { FaGrinHearts } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import Temperature from "../Temperature";

const Golf = ({ event, img, title, descrp, cat, location, from, to, rating }) => {
    const dateFrom = new Date(from);
    const fromFormatted = dateFrom.toLocaleDateString("en-us", {
        day: "numeric",
        month: "long"
    });

    const dateTo = new Date(to);
    const toFormatted = dateTo.toLocaleDateString("en-us", {
        day: "numeric",
        month: "long"
    });

    const maxLines = 3;
    const [isExpanded, setIsExpanded] = useState(false);
    const paraRef = useRef(null);
    const [truncatedText, setTruncatedText] = useState(descrp);

    useEffect(() => {
        if (paraRef.current && !isExpanded) {
            const words = descrp.split(" ");
            const visibleWords = words.slice(0, 25).join(" "); // Adjust for mid-third-line cut
            setTruncatedText(visibleWords + "...");
        } else {
            setTruncatedText(descrp);
        }
    }, [isExpanded, descrp]);

    return (
        <>
            <div className="card" style={{ background: `url(${img})` }}>
                <div className="sun-logo">
                    <Temperature className="img" />
                </div>
                <div className="card-content">
                    <div className="head">
                        <h3 className="heading">{title}</h3>
                        <div className="rating">
                            <div className="star">
                                {[...Array(rating)].map((_, index) => (
                                    <IoIosStar key={index} style={{ color: "#FF385C", fontSize: "13px" }} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Paragraph with Read More / Read Less */}
                    <div className="para">
                        <p ref={paraRef} className={`text-content ${!isExpanded ? "fade-text" : ""}`}>
                            {truncatedText}
                        </p>
                        <button 
                            onClick={() => setIsExpanded(!isExpanded)} 
                            className="read-more-btn"
                        >
                            {isExpanded ? " read less" : " read more"}
                        </button>
                    </div>

                    <div className="address">
                        <div className="content">
                            <span className="span">
                                <CiCalendar style={{ color: "#FF385C", fontSize: "15px" }} />
                            </span>
                           <div className="span-cont"> {fromFormatted} - {toFormatted}</div>
                        </div>
                        <div className="content">
                            <span className="span">
                                <CiLocationOn style={{ color: "#FF385C", fontSize: "15px" }} />
                            </span>
                            <div className="span-cont">  {location}</div>
                           
                        </div>
                        <div className="content">
                            <span className="span">
                                <AiOutlineAppstore style={{ color: "#FF385C", fontSize: "15px" }} />
                            </span>
                            <div className="span-cont">
                            {cat}
                            </div>
                          
                        </div>
                    </div>
                    <div className="outer">
                        <div className="quote">
                            <span className="span">
                                <FaGrinHearts style={{ color: "#55BF3B", fontSize: "15px" }} />
                            </span>
                           <div className="span-cont" >
                           Overwhelmed vibes are coming here
                           </div>
                        </div>
                        <div className="schedule">Scheduled</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Golf;
