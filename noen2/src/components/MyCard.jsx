import "../styles/mycard.scss"

const MyCard=({props,text})=>{
    return (
        <>
        <div className="profile-img1" style={{backgroundImage:`url(${props})`}}>
            <p className="text">{text}</p>
        

        </div>
        
        </>
    )
}
export default MyCard;
