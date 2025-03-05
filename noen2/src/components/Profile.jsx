import "../styles/profile.scss"
// import {FaCalendar} from "react-icons/fa"
import img1 from "../img/golf.jpg"
import img2 from "../img/surfing.jpg";
import img3 from "../img/holiday_0.png";
import img4 from "../img/island.jpg"
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import img5 from "../img/yoga.jpg"
import MyCard from "./MyCard";
import { useState,useEffect } from "react";
import {ToastContainer,toast} from 'react-toastify'
import { useNavigate } from "react-router-dom";
const text1="Golf"
const text2="Music"
const text3="Rooms"
const text4="Exploring"
const text5="Socilaizing"
const text6="cooking"
// const imgarr1 = [{img1,text1}, {img2,text2}, {img3,text3}, {img4,text4}, {img5,text5},{img1,text6}]
const imgarr1=[img1, img2, img3, img4, img5,img2];
const imgarr2 = [img1, img2, img3,img4,img5]
const dataa=[
    {
        img:img1,
        text:text1
    },
    {
        img:img2,
        text:text2
    },
    {
        img:img3,
        text:text3
    },
    {
        img:img4,
        text:text5
    },
    {
        img:img5,
        text:text6
    },

]

const dataa2=[
    {
        img:img1,
        text:"Plays"
    },
    {
        img:img2,
        text:"chinese Food"
    },
    {
        img:img3,
        text:"screaming"
    },
    {
        img:img4,
        text:"walking"
    },
    {
        img:img5,
        text:"water-sports"
    },

]


const Profile = ({ props }) => {
    const [data,setData]=useState([]);
    useEffect(()=>{
        const saveData=sessionStorage.getItem('user');

        if(saveData){
            const user=JSON.parse(saveData);
            setData(user);
        }
    },[])

    

 const [select, setSelect] = useState([]);
 const [interestArr,setInterestArr]=useState("");
 console.log(select,"select");
 const[id,setId]=useState();
 useEffect(()=>{
    const savedData=sessionStorage.getItem('user');
if(savedData){
    const user=JSON.parse(savedData);
    setId(user.id);
    console.log(id);
}
let n=select.length;
for(let i=0;i<n;i++){
    setInterestArr(interestArr+','+select[i]);
}
console.log(interestArr,"@@@@@@@@@@@");
},[select]);
 const handleInputChange = (selectedText) => {
     setSelect((prevSelect) => [...prevSelect, selectedText]);
     console.log("clicked", selectedText);
 };
   const notify=()=>{
      toast.success("Inerests Updated !!", {
      position: "top-right"})
   }
 //doing dsa question of storing all stirnfgs comma seprated as individual

 //making patch request for updating the intrests table
 const navigate=useNavigate();
 const handleClick = async () => {
    if (!id) {
        console.error("User ID is undefined, cannot send request.");
        return;
    }

    try {
        const response = await axios.patch(`http://localhost:5000/update/${id}/toggle`, {
            interest: interestArr,
        });
        console.log("Response:", response.data);
        notify();
        navigate("/")
    } catch (error) {
        console.error("Error updating status:", error);
    }
};


 
    return (

       
        <>
            <div className="profile">
                <p className="heading"> Edit Charlie's Profile</p>
                <div className="content">
                    <div className="profile-img">
<ToastContainer/>

                    </div>
                    <div className="profile-content">
                        <div className="input-section">
                            <p className="para">
                                What should we call you?
                            </p>
                            <input className="input" value={data.name}></input>

                        </div>
                        <div className="input-section">
                            <p className="para">
                                What's your email address?
                            </p>
                            <input className="input" style={{ backgroundColor: "#F5F5F5" }} value={data.email}></input>

                        </div>
                        <div className="input-section">
                            <p className="para">
                                On which number can we contact you?
                            </p>
                            <input className="input" value={data.contact}></input>

                        </div>
                        <div className="input-section">
                            <p className="para">
                                When can we wish a happy birthday?
                            </p>
                            <input className="input" value={data.dob}></input>

                        </div>
                        <div className="card-section">
                            {dataa.map((arr, index) => (
                                <MyCard props={arr.img} text={arr.text} key={index} onClick={()=>{handleInputChange(arr.text)}} isSelected={select.includes(arr.text)}  />
                            ))}
                        </div>
                        <div className="card-section">
                            {dataa2.map((arr, index) => (
                                <MyCard props={arr.img} text={arr.text} key={index} onClick={()=>{handleInputChange(arr.text)}} isSelected={select.includes(arr.text)}/>
                            ))}
                        </div>

                        <div className="input-section">
                            <p className="para">
                                Please let us know if you have some intrests
                            </p>
                            <input
    className="input1"
    value={select.join(", ")}  // Display selected items as a comma-separated string
    onChange={(e) => {
        const inputValues = e.target.value.split(",").map((item) => item.trim()); // Split and trim spaces
        setSelect(inputValues);  // Store as an array
        
        

    }}
    onKeyDown={(e) => {
        if (e.key === "Backspace" && select.length > 0) {
            const lastInput = e.target.value.trim();
            if (lastInput.endsWith(",")) {
                setSelect(select.slice(0, -1)); // Remove last item if there's a trailing comma
            }
        }
    }}
/>



                        </div>


                        <div className="save-btn">
                            <div className="">
                                <button className="save" onClick={handleClick}>
                                    Save

                                </button>

                            </div>
                            <div className="">

                                <button className="cancel">
                                    Cancel

                                </button>

                            </div>

                        </div>

                    </div>

                </div>


            </div>

        </>
    )

}

export default Profile;