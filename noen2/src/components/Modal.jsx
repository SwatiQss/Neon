import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../redux/modalSlice";
import Reschedulesure from "./Reschedulesure";
import "../styles/modal.scss"
const Modal = () => {
 
  const isOpen = useSelector((state) => state.modal.isOpen);
  
  if (!isOpen) return null; // Don't render if modal is closed

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <Reschedulesure/>
      </div>
    </div>
  );
};

export default Modal;
