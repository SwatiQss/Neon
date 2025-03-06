import "../styles/cardvibe.scss"
import { FaGrinHearts } from "react-icons/fa";
import { BsEmojiAngryFill, BsEmojiExpressionless, BsEmojiFrownFill, BsEmojiSmileFill } from "react-icons/bs";
import { BsFillEmojiExpressionlessFill } from "react-icons/bs";
import { BsFillEmojiFrownFill } from "react-icons/bs";
import { HiEmojiSad } from "react-icons/hi";

const CardVibe=({props,title,comment,vibes})=>{
    console.log(vibes,"vibes")
    return (
        <>
        <div className="Vibe-card">
            <div className="vibecard-img" >
                <div className="vibeimg-content">
                    <p className="vibepara1">Mens's Golf Leauge</p>
                    <p className="vibedate">Nov 10, 2022</p>
                    <p className="reviews">121 reviews</p>
                </div>

            </div>
            <div className="cardvibe-content">
                    <div className="cardvibe-date">
                            Nov 17, 2022
                    </div>
                    <div className="cardvibe-content">
                        <div className="cardvibe-heading">
                            {title}

                        </div>
                        <div className="cardvibe-para">
                        {comment}


                        </div>
                    </div>
                    <div className="cardvibe-emoji">
                        {vibes==='overwhelmed'?( <FaGrinHearts style={{color:"green"}}/>): ( <FaGrinHearts style={{color:"DDDDDD"}}/>)}
                        {vibes==='good'?( <BsEmojiSmileFill style={{color:"green"}}/>): (  <BsEmojiSmileFill style={{color:"#DDDDDD"}}/>)}
                        {vibes==='okay'?( <BsEmojiExpressionless style={{color:"green"}}/>): (  <BsEmojiExpressionless style={{color:"#DDDDDD"}}/>)}
                        {vibes==='horrible'?( <BsEmojiFrownFill style={{color:"green"}}/>): (  <BsEmojiFrownFill style={{color:"#DDDDDD"}}/>)}
                        {vibes==='cried'?( <BsEmojiAngryFill style={{color:"green"}}/>): (  <BsEmojiAngryFill style={{color:"#DDDDDD"}}/>)}

          
                        


                    </div>
            </div>
           

        </div>
        </>
    )
}
export  default CardVibe;