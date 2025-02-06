import "../../styles/favourite.scss"
import Smal from "../../components/Small";
import img1 from "../../img/golf.jpg";
import img2 from "../../img/surfing.jpg";
import img3 from "../../img/holiday_0.png";
import img4 from "../../img/island.jpg"
import img5 from "../../img/yoga.jpg"
import Recomedation from "../../components/Recommendation";
const imgarr2=[img1,img2,img3,img4,img5]

const Favourite=()=>{
    return (
        <>
        <div className="favourite">
        <p className="heading">Good morning Charlie!</p>
        <p className="para">You have shortlisted 8 events to join later.</p>
        <div className="card-section">
  {
    imgarr2.map((img,index)=>(
    <Smal key={index} props={img}/>
    ))
  }
     </div>
     <div className="card-section">
  {
    imgarr2.map((img,index)=>(
    <Smal key={index} props={img}/>
    ))
  }
     </div>
     <p className="heading">Charlie, we have founds some recomedation for You</p>
     <Recomedation props={img1}/>
        
        </div>
        
        </>
    )
}
export default Favourite;