import "../../styles/navbar.scss"
import { FaBell } from "react-icons/fa";
import { IoIosGlobe } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";



const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo"><img className="img" src="/assets/img/logo.jpg"/></div>
        <div className="navinner">
        <a href="#" className="navLink">DashBoard</a>
        <a href="#" className="navLink">MyFavourites</a>
        <a href="#" className="navLink">Upcoming Events</a>
        <a href="#" className="navLink"><FaBell/></a>
        <a href="#" className="navLink">
          <div className="user">
            <GiHamburgerMenu/>
          </div>
        </a>
        <a href="#" className="navLink globe"><IoIosGlobe/></a>

        </div>
      
    </nav>
  );
};

export default Navbar;
