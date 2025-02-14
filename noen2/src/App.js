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
import { store } from "./redux/store";  // Make sure the path is correct

const App = () => {
  return (
    <Provider store={store}> {/* Wrap everything inside Provider */}
      <Router>
        <Navbar />
        <hr className="divider" />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/event" element={<Events />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/setting" element={<Settings />} />
          <Route path="/roundgolf" element={<RoundGolf />} />
          <Route path="/profile" element={<EditProfile />} />
          <Route path="/modalNext" element={<ModalRescheduleNext />} />
        </Routes>
        <Footer />
        <Reschedulesure />
      </Router>
    </Provider>
  );
};

export default App;
