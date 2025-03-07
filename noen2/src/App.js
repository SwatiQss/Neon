import "./styles/global.scss";
import Dashboard from "./pages/DashBoard/Dashboard";
import Favourite from "./pages/My-favourite/Favourite";
import Events from "./pages/Events/Events";
import Feedback from "./pages/Feedback/Feedback";
import Settings from "./pages/Setting/Setting";
import RoundGolf from "./pages/RoundGolf/RoundGolf";
import Navbar from "./components/Navbar/Navbar";
import EditProfile from "./pages/EditProfile/EditProfile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Reschedulesure from "./components/Reschedulesure";
import { Provider } from "react-redux";
import ModalRescheduleNext from "./pages/ModalRescheduleNext";
import { store } from "./redux/store";  
import ViboModal  from "./components/VibometerModel";// Make sure the path is correct
import Login from "./pages/Login";
import ScheduledRoundGolf from "./pages/RoundGolf/SsheduledRound";
import RescheduleChoices from "./pages/RescheduleChoices";
const App = () => {
  const savedData = sessionStorage.getItem('user');  // Check if user data exists in localStorage
  console.log(savedData,"jjjjjjjjjjjjjjjjjjjj");  // Debugging purpose

  return (
    <Provider store={store}> {/* Wrap everything inside Provider */}
      <Router>
        {savedData &&(<Navbar/>)}
        <hr className="divider" />
        <Routes>
          {savedData ? (
            // If savedData exists (user is logged in), show the Dashboard route
            <Route path="/" element={<Dashboard />} />
          ) : (
            // If savedData doesn't exist (user is not logged in), show the Login route
            <Route path="/" element={<Login />} />
          )}
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/event" element={<Events />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/setting" element={<Settings />} />
          <Route path="/roundgolf" element={<RoundGolf />} />
          <Route path="/profile" element={<EditProfile />} />
          <Route path="/viboModal" element={<ViboModal />} />
          <Route path="/modalNext" element={<ModalRescheduleNext />} />
          <Route path="/scheduled" element={<ScheduledRoundGolf/>}/>
          <Route path="/choices" element={<RescheduleChoices/>}/>
        </Routes>
        <Footer />
        <Reschedulesure />
      </Router>
    </Provider>
  );
};

export default App;
