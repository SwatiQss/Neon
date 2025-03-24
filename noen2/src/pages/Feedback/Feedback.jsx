import "../../styles/feedback.scss";
import Vibe from "../../components/Meters/Vibemeter";
import CardVibe from "../../components/Modals/CardVibe";
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
  const [name,setName]=useState("");
  const[id,setId]=useState(null);
  useEffect(() => {
    const savedData = sessionStorage.getItem('user');
    if (savedData) {
      const user = JSON.parse(savedData);
      setName(user.name);
      setId(user.id);
       // Set the first letter of user's name
    }
  }, []); 
  console.log(id,"id");
  console.log(name,"name");

  return (
    <>
      <div className="feedback">
        <Vibe />
        <div className="feedback-container">
          <p className="feedback-heading"> Hi {name},</p>
          <p className="feedback-para">Here are the glimpses of your feedback shared with us.</p>
          {feedback
  .filter(arr => arr.user_id === id) // Filter feedback for the specific user
  .map((arr, index) => (
    <CardVibe key={index} title={arr.title} comment={arr.comment} vibes={arr.vibes}/>
  ))
}

        </div>
      </div>
    </>
  );
};

export default Feedback;
