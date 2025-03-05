import "../styles/mycard.scss"
import { BiSolidLike } from "react-icons/bi";
const MyCard=({props,text,onClick,isSelected})=>{
    return (
        <>
        <div className="profile-img1" style={{backgroundImage:`url(${props})`}} onClick={onClick}>
        {isSelected && (
                <BiSolidLike
                   className="heart"
                    style={{ 
                        position: "absolute",  
                        color: "white", 
                        fontSize: "20px" 
                    }} 
                />
            )}
            <p className="text">{text}</p>
        

        </div>
        
        </>
    )
}
export default MyCard;
