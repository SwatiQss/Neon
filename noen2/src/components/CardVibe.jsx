import "../styles/cardvibe.scss"
import { FaGrinHearts } from "react-icons/fa";
import { BsEmojiSmileFill } from "react-icons/bs";
import { BsFillEmojiExpressionlessFill } from "react-icons/bs";
import { BsFillEmojiFrownFill } from "react-icons/bs";
import { HiEmojiSad } from "react-icons/hi";

const CardVibe=({props})=>{
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
                            Great eperience!

                        </div>
                        <div className="cardvibe-para">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci temporibus at ad aut, quos impedit facilis commodi accusamus doloremque praesentium tempora autem mollitia fugiat debitis excepturi porro delectus ullam laudantium
                           Adipisci temporibus at ad aut, quos impedit facilis commodi accusamus doloremque praesentium tempora autem mollitia fugiat debitis excepturi porro delectus ullam laudantium.


                        </div>
                    </div>
                    <div className="cardvibe-emoji">
                        <FaGrinHearts style={{color:"green"}}/>
                        <BsEmojiSmileFill style={{color:"#DDDDDD"}}/>
                        <BsFillEmojiExpressionlessFill style={{color:"#DDDDDD"}} />
                        <BsFillEmojiFrownFill style={{color:"#DDDDDD"}}/>
                        <BsFillEmojiFrownFill style={{color:"#DDDDDD"}}/>
                        <BsFillEmojiFrownFill style={{color:"#DDDDDD"}}/>
                        


                    </div>
            </div>
           

        </div>
        </>
    )
}
export  default CardVibe;