import "../styles/recomedation.scss"
import { FaHeart } from "react-icons/fa";
import { MdEmojiEmotions } from "react-icons/md";

const Recomedation=({props,prop2,prop3,prop4})=>{
    return (
        <>
        <div className="recomm"style={{backgroundImage:`url(${props})`}}>
           <div className="heart">
              <FaHeart/>
           </div>

          <div className="content">
            <div className="left">
                <p className="heading">{prop2}</p>
                <p className="para">{prop3}</p>
                <p className="para">{prop4}</p>

            </div>
            <div className="right">
                  <span className="span"><MdEmojiEmotions style={{color:"green"
                  }}/></span>OverWhelm
            </div>

          </div>

        </div>
        </>
    )
}
export default Recomedation;