import React from "react";
import "../../styles/newSchedule.scss"

const NewSchedule= ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render if modal is closed

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Hey Charlie,</h2>
        <p>
          You have chosen a new <b>"Round of Golf"</b> event on <b>Jan 01, 2023</b>,
          at <b>12:00 AM</b>. Have a great day ahead and enjoy your new round of golf!
        </p>

        <div className="modal-options">
          <div className="modal-option">
            <label>Select a day</label>
            <select>
              <option>Jan 1, 2023</option>
            </select>
          </div>

          <div className="modal-option">
            <label>Select a time slot</label>
            <select>
              <option>10:00 AM - 3:30 PM</option>
            </select>
          </div>
        </div>

        <div className="modal-option">
          <label>Select your seats</label>
          <select>
            <option>1 seat</option>
          </select>
        </div>

        <div className="modal-buttons">
          <button className="reserve-btn">Reserve my seats</button>
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default NewSchedule;
