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

import "./styles/global.scss";



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
        <Route path="/contact" element={<RoundGolf/>} />
        <Route path="/profile" element={<EditProfile/>} />
      </Routes>
    </Router>
  )
};

export default App;
