import "../../styles/Golf.scss";
import { IoIosStar } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineAppstore } from "react-icons/ai";
import { FaGrinHearts } from "react-icons/fa";
import { useState } from "react";
import Temperature from "../Temperature";

const Golf = ({ event,img,title,descrp,cat,location,from,to,rating }) => {
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
  
      let maxLines=3;
        const [isExpanded, setIsExpanded] = useState(false);
    
    
    return (
        <>
            <div className="card" style={{ background: `url(${img})` }}>
                <div className="sun-logo">
                <Temperature className="img"/>
                </div>
                <div className="card-content">
                    <div className="head">
                        <h3 className="heading">{title}</h3>
                        <div className="rating">
                            <div className="star">
                                {/* Display 5 stars */}
                                {[...Array(rating)].map((_, index) => (
                                    <IoIosStar key={index} style={{ color: "#FF385C", fontSize: "13px" }} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="para">
    <p style={{
        display: "-webkit-box",
        WebkitLineClamp: isExpanded ? "unset" : maxLines,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        wordBreak: "break-word",
    }}>
        {descrp}
    </p>
    {descrp.split(" ").length > maxLines * 10 && (
        <button 
            onClick={() => setIsExpanded(!isExpanded)} 
            style={{ 
                color: "#FF385C", 
                cursor: "pointer", 
                fontSize: "10px", 
                background: "none", 
                border: "none", 
                padding: "0",
                display: "inline", // Keeps button inline
              // Adds spacing between text and button
            }}
        >
            {isExpanded ? " read less" : " read more"}
        </button>
    )}
</div>

                    <div className="address">
                        <div className="content">
                            <span className="span">
                                <CiCalendar style={{ color: "#FF385C", fontSize: "14px" }} />
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
