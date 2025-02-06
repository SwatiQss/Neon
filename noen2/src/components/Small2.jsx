import "../styles/Small2.scss"
import { VscSmiley } from "react-icons/vsc";
import { MdEmojiEmotions } from "react-icons/md";

const Small2=()=>{
    return (
        <>
        <div className="small-cards">
            <div className="img">
                <img src="/assets/img/golf.jpg"></img>

            </div>
            <div className="content">
                <div className="heading">
                    <div className="left">
                         <span className="span"><MdEmojiEmotions style={{ color: "#55BF3B",width:"14px" }} /></span>Integrating&Uplifiting
                    </div>
                    <div className="right">
                        Nov,10

                    </div>

                </div>

                <p className="mid">Ground of Gold</p>
                <p className="last">10:38 AM - 7:30 PM</p>
            </div>

        </div>
        
        </>
    )
}
export default Small2;