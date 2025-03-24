import { useDispatch, useSelector } from "react-redux";
// import { closeModal } from "../redux/modalSlice";
// import Reschedulesure from "./Reschedule/Reschedulesure";
// import ViboModal from "./Meters/VibometerModel";
import ReviewModal from "./ReviewModal";
import "../../styles/modal.scss"
const ModalVibe = () => {
  const isOpen = useSelector((state) => state.modal.isOpen);

  if (!isOpen) return null; // Don't render if modal is closed

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <ReviewModal/>
      </div>
    </div>
  );
};

export default ModalVibe;
