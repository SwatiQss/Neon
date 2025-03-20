import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";  

import "./styles/global.scss";
import Dashboard from "./pages/DashBoard/Dashboard";
import Favourite from "./pages/My-favourite/Favourite";
import Events from "./pages/Events/Events";
import Feedback from "./pages/Feedback/Feedback";
import Settings from "./pages/Setting/Setting";
import RoundGolf from "./pages/RoundGolf/RoundGolf";
import Navbar from "./components/Navbar/Navbar";
import EditProfile from "./pages/EditProfile/EditProfile";
import Footer from "./components/Footer";
import Reschedulesure from "./components/Reschedulesure";
import ModalRescheduleNext from "./pages/ModalRescheduleNext";
import ViboModal from "./components/VibometerModel";
import Login from "./pages/Login";
import ScheduledRoundGolf from "./pages/RoundGolf/SsheduledRound";
import RescheduleChoices from "./pages/RescheduleChoices";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!sessionStorage.getItem("user"));

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(!!sessionStorage.getItem("user"));
    };

    // Listen for session storage changes
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <Provider store={store}>
      <Router>
        {isLoggedIn && <Navbar />}
        <hr className="divider" />
        <Routes>
          <Route path="/" element={isLoggedIn ? <Dashboard /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/event" element={<Events />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/setting" element={<Settings />} />
          <Route path="/roundgolf" element={<RoundGolf />} />
          <Route path="/profile" element={<EditProfile />} />
          <Route path="/viboModal" element={<ViboModal />} />
          <Route path="/modalNext" element={<ModalRescheduleNext />} />
          <Route path="/scheduled/:id" element={<ScheduledRoundGolf />} />
          <Route path="/choices" element={<RescheduleChoices />} />
          <Route path="/success" element={<RescheduleChoices />} />
        </Routes>
        <Footer />
        <Reschedulesure />
      </Router>
    </Provider>
  );
};

export default App;
