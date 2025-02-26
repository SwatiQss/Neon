import "../../styles/feedback.scss";
import Vibe from "../../components/Vibemeter";
import CardVibe from "../../components/CardVibe";
import { useEffect } from "react";
import { useState } from "react";

const Feedback = () => {
  const [feedback, setFeedback] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:5000/reviews/getreview')
      .then(response => response.json())
      .then(data => setFeedback(data))
      .catch(error => console.error('Error:', error));
  }, []);

  console.log(feedback, "ffffffffffff");

  // Store feedback data in sessionStorage
  sessionStorage.setItem('feedback', JSON.stringify(feedback));

  return (
    <>
      <div className="feedback">
        <Vibe />
        <div className="feedback-container">
          <p className="feedback-heading"> Hi Charlie,</p>
          <p className="feedback-para">Here are the glimpses of your feedback shared with us.</p>
          {feedback.map((arr, index) => (
            // Ensure you return the component from map
            <CardVibe key={index} title={arr.title} comment={arr.comment} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Feedback;
