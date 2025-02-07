import "../../styles/events.scss"
import Button1 from "../../components/Button1";
import Button2 from "../../components/Button2";
import Smal from "../../components/Small";
import img1 from "../../img/golf.jpg";
import img2 from "../../img/surfing.jpg";
import img3 from "../../img/holiday_0.png";
import img4 from "../../img/island.jpg"
import img5 from "../../img/yoga.jpg"
const imgarr2=[img1,img2,img3,img4,img5]


const Events=()=>{
    return (
        <>
<div className="events">
<p className="heading">Hey Charlie,</p>
<p className="para">Let's find something exiting for you.</p>
<div className="btns">
<div className="upper">
    <div className="left">
        <div className="up">
            <p> What suits your Schedule?</p>

        </div>
        <div className="down">
            <div className="btn1">
                <Button1/>

            </div>
            <div className="btn2">
              <Button1/>
            </div>

        </div>

    </div>
    <div className="mid1">
        <div className="up">
        <p> How far are you willing to travel?</p>
        </div>
        <div className="down">
         <Button2/>
        </div>

    </div>

    <div className="mid2">
        <div className="up">

        </div>
        <div className="down">
        <div className="btn1">
            <Button2/>

        </div>
        </div>
       

    </div>
    <div className="right">
        <div className="down">
        <div className="btn1">
        <Button1/>
       </div>
        </div>
       
    </div>

</div>
<div className="down2">
    <div className="up">
        <p className="para">
            Yes can we always filter out the events by catogory wise

        </p>

    </div>
    <div className="down">
        <div className="btn1">
            <Button1/>

        </div>
        <div className="btn1">
            <Button1/>

        </div>
        <div className="btn1">
            <Button1/>

        </div>
        <div className="btn1">
            <Button1/>

        </div>
        <div className="btn1">
            <Button1/>

        </div>
        <div className="btn1">
            <Button1/>

        </div>
        <div className="btn1">
            <Button1/>

        </div>
        <div className="btn1">
            <Button1/>

        </div>

    </div>

</div>
</div>

<div className="card-section">
  {
    imgarr2.map((img,index)=>(
    <Smal key={index} props={img} />
    ))
  }
     </div>

     <div className="card-section">
  {
    imgarr2.map((img,index)=>(
    <Smal key={index} props={img} />
    ))
  }
     </div>
     <div className="card-section">
  {
    imgarr2.map((img,index)=>(
    <Smal key={index} props={img} />
    ))
  }
     </div>

     <button className="btn5">
        Load more

     </button>


</div>
        
        </>
    )
}

export default Events;