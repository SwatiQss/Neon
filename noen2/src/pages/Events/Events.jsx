import "../../styles/events.scss"
import Button1 from "../../components/Button1";
import Button2 from "../../components/Button2";
import Smal from "../../components/Small";
import img1 from "../../img/golf.jpg";
import img2 from "../../img/surfing.jpg";
import img3 from "../../img/holiday_0.png";
import img4 from "../../img/island.jpg"
import img5 from "../../img/yoga.jpg"
import Button3 from "../../components/Button3";
import Button4 from "../../components/Button4";
import { useEffect, useState } from "react";
const imgarr2=[img1,img2,img3,img4,img5]


const Events=()=>{
    const [changeFilter,setChangeFilter]=useState(null);
    const handleDataChild=(data)=>{
        console.log(data,"urrrrr");
        setChangeFilter(data);


    }
    const [filtered,setFiltered]=useState([
        
    ]);
    useEffect(()=>{
        const savedData=sessionStorage.getItem("filtered");
        const event=JSON.parse(savedData);
        setFiltered(event);
    },[changeFilter])

    return (
        <>
<div className="events">
<div className="heading">Hey Charlie,</div>
<div className="para">Let's find something exiting for you.</div>
<div className="btns">
<div className="upper">
    <div className="left">
        <div className="up">
            <p> What suits your Schedule?</p>

        </div>
        <div className="down">
            <div className="btn1">
                <Button1 sendDataParent={handleDataChild}/>

            </div>
            <div className="btn2">
              <Button3/>
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
        <Button4 props={"No limits"}/>
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
        <Button4 props={"Stand up comedy"}/>

        </div>
        <div className="btn1">
        <Button4 props={"Ramp Walk"}/>

        </div>
        <div className="btn1">
        <Button4 props={"Box Cricketer"}/>

        </div>
        <div className="btn1">
        <Button4 props={"Swimming"}/>

        </div>
        <div className="btn1">
        <Button4 props={"Golf Tournament"}/>

        </div>
        <div className="btn1">
        <Button4 props={"Singing"}/>

        </div>
        <div className="btn1">
        <Button4 props={"Talk Shows"}/>

        </div>
        <div className="btn1">
        <Button4 props={"Kite surfing"}/>

        </div>
        <div className="btn1">
        <Button4 props={"Book exhibitions"}/>

        </div>

    </div>

</div>
</div>

<div className="card-section">
  {filtered &&
    filtered.map((arr,index)=>(
    <Smal key={index} props={arr.img} title={arr.title} catName={arr.category_name}  />
    ))
  }
     </div>

     <div className="card-section">
  {filtered&&
     filtered.map((arr,index)=>(
        <Smal key={index} props={arr.img} title={arr.title} catName={arr.category_name}  />
        ))
  }
     </div>
     <div className="card-section">
  {filtered&&
    filtered.map((arr,index)=>(
        <Smal key={index} props={arr.img} title={arr.title} catName={arr.category_name}  />
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