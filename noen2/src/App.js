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
import Reschedule from "./components/Reschedule";
import Reschedulesure from "./components/Reschedulesure";

import "./styles/global.scss";
// const Modal = ({ prop, onClose }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      
//      <Reschedulesure/>
//     </div>
//   );
// };



//<Understand props={img2}/>



const App = () => {
  return (
    <Router>
      <Navbar/>
      <hr className='divider'/>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/event" element={<Events />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/setting" element={<Settings />} />
        <Route path="/roundgolf" element={<RoundGolf/>} />
        <Route path="/profile" element={<EditProfile/>} />
      </Routes>
      <Footer/>
      <Reschedulesure/>
    </Router>
  )
};

export default App;
