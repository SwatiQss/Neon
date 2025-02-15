import "../styles/profile.scss"
// import {FaCalendar} from "react-icons/fa"
import img1 from "../img/golf.jpg"
import img2 from "../img/surfing.jpg";
import img3 from "../img/holiday_0.png";
import img4 from "../img/island.jpg"
import img5 from "../img/yoga.jpg"
import MyCard from "./MyCard";
const text1="Golf"
const text2="Music"
const text3="Rooms"
const text4="Exploring"
const text5="Socilaizing"
const text6="c"
// const imgarr1 = [{img1,text1}, {img2,text2}, {img3,text3}, {img4,text4}, {img5,text5},{img1,text6}]
const imgarr1=[img1, img2, img3, img4, img5,img2];
const imgarr2 = [img1, img2, img3,img4,img5]

const Profile = ({ props }) => {
    return (
        <>
            <div className="profile">
                <p className="heading"> Edit Charlie's Profile</p>
                <div className="content">
                    <div className="profile-img">


                    </div>
                    <div className="profile-content">
                        <div className="input-section">
                            <p className="para">
                                What should we call you?
                            </p>
                            <input className="input" value="Charlie"></input>

                        </div>
                        <div className="input-section">
                            <p className="para">
                                What's your email address?
                            </p>
                            <input className="input" style={{ backgroundColor: "#F5F5F5" }} value="charlie@gmail.com"></input>

                        </div>
                        <div className="input-section">
                            <p className="para">
                                On which number can we contact you?
                            </p>
                            <input className="input" value="9231243434"></input>

                        </div>
                        <div className="input-section">
                            <p className="para">
                                When can we wish a happy birthday?
                            </p>
                            <input className="input" value="09 / 01 / 1979"></input>

                        </div>
                        <div className="card-section">
                            {imgarr1.map((img, index) => (
                                <MyCard props={img} />
                            ))}
                        </div>
                        <div className="card-section">
                            {imgarr2.map((img, index) => (
                                <MyCard props={img} />
                            ))}
                        </div>

                        <div className="input-section">
                            <p className="para">
                                Please let us know if you have some intrests
                            </p>
                            <input className="input1"></input>

                        </div>


                        <div className="save-btn">
                            <div className="">
                                <button className="save">
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