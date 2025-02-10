import Profile from "../../components/Profile"
import Vibe from "../../components/Vibemeter"
import CardVibe from "../../components/CardVibe"

import "../../styles/edit.scss"

const EditProfile=()=>{
    return (
        <>
        <div className="edit">
          <div className="under">
          <Profile/>
          </div>
        </div>
        
        
        </>
    )
}

export default EditProfile;