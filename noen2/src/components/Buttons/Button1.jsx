import { FaBell } from "react-icons/fa";
import "../../styles/btn.scss";
import { CiCalendar } from "react-icons/ci";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

const Button1 = ({ sendDataParent }) => {
  const [startDate, setStartDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [eventsFiltered, setEventsFiltered] = useState([]);

  // Update state when startDate changes
  useEffect(() => {
    if (startDate) {
      const date = new Date(startDate);
      const formattedDate = format(date, "yyyy/MM/dd");
      console.log(formattedDate, "formatted date");

      const savedEvent = sessionStorage.getItem("events");
      if (savedEvent) {
        const events = JSON.parse(savedEvent); // Parse the string into an array

        // Filter the events based on the selected startDate
        const filtered = events.filter((event) => {
          const eventDate = new Date(event.from_date);
          const formattedEventDate = format(eventDate, "yyyy/MM/dd");
          return formattedEventDate >= formattedDate;
        });

        setEventsFiltered(filtered); // Set the filtered events in the state
        console.log(filtered, "filtered events");

        // Optionally, store the filtered events in sessionStorage
        sessionStorage.setItem("filtered", JSON.stringify(filtered));

        // If you need to pass the filtered data to the parent component
        sendDataParent(filtered);
      }
    }
  }, [startDate]); // Re-run effect when startDate changes

  // Function to toggle calendar visibility
  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  return (
    <>
      <button className="btn" onClick={toggleCalendar}>
        <div className="emoji">
          <CiCalendar style={{ color: "#FF385C" }} />
        </div>
        <div className="date">Pick a date</div>
      </button>

      {/* Conditionally rendering the date picker */}
      {showCalendar && (
        <DatePicker
          selected={startDate}
          onChange={(date) => {setStartDate(date)
            setShowCalendar(!setShowCalendar)
          }} // Update startDate
          dateFormat="yyyy/MM/dd"
          inline
        />
      )}

    </>
  );
};

export default Button1;
