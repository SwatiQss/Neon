import "../../styles/navbar.scss"
import { FaBell } from "react-icons/fa";
import { IoIosGlobe } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom"
import { useState, useEffect, useRef } from "react";
import Dropdown from "../dropDown";
import { NavLink } from "react-router-dom";
import { CiGlobe } from "react-icons/ci";
import Reschedule from "../Reschedule/Reschedule";


const Navbar = () => {
  const [letter, setLetter] = useState(""); // Initialize letter state
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const dropdownRef2 = useRef(null);
  const dropdownRef = useRef(null);

  // Fetch and set the user's initial letter only once when the component mounts
  useEffect(() => {
    const savedData = sessionStorage.getItem('user');
    if (savedData) {
      const user = JSON.parse(savedData);
      setLetter(user.name[0].toUpperCase()); // Set the first letter of user's name
    }
  }, []); // Empty dependency array means this effect runs only once, when the component mounts.



  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };


  const toggleDropdown2 = () => {
    setShowDropdown2(!showDropdown2);
  };
  // console.log(letter,"rrrrrrrrrrrrrrrr");


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    const handleClickOutside2 = (event) => {
      if (dropdownRef2.current && !dropdownRef2.current.contains(event.target)) {
        setShowDropdown2(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("mousedown", handleClickOutside2);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("mousedown", handleClickOutside2);
    };
  }, []);

  

  return (
    <nav className="navbar">
      <div className="logo">
       <Link to="/dashboard">
       <img className="img" src="/assets/img/logo2.png" />
       </Link>
      </div>
      <div className="navinner">
        <NavLink to="/dashboard" className="navLink" activeClassName="active">DashBoard</NavLink>
        <NavLink to="/favourite" className="navLink" activeClassName="active">My favourites</NavLink>
        <NavLink to="/event" className="navLink" activeClassName="active">Upcoming events</NavLink>

        <div className="user-menu2" ref={dropdownRef2}>
          <div className="navLink user" onClick={toggleDropdown2}>
            <FaBell style={{ color: "#22222", fontSize: "14px", fontWeight: "400", opacity: "30%" }} />
            <div className="user-img2"></div>
          </div>
          {showDropdown2 && (
            <Reschedule className="dropdown2" />
          )}
        </div>
        

        <div className="user-menu" ref={dropdownRef}>
          <div className="navLink user white-back" onClick={toggleDropdown}>
            <GiHamburgerMenu style={{ color: "#22222", fontSize: "14px", fontWeight: "400" }} />
            <div className="user-img"><p className="user-letter" style={{color:"#fff"}}>{letter}</p></div>
          </div>
          {showDropdown && (
            <Dropdown />
          )}
        </div>

        <NavLink to="/language" className="navLink globe" activeClassName="active">
          <CiGlobe style={{ color: "black", fontSize: "15px", fontWeight: "600", marginLeft: "12px" }} />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;


