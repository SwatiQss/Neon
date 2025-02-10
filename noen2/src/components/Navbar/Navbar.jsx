import "../../styles/navbar.scss"
import { FaBell } from "react-icons/fa";
import { IoIosGlobe } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import {Link} from "react-router-dom"
import { useState,useEffect,useRef } from "react";
import Dropdown from "../dropDown";
import { NavLink } from "react-router-dom";
import { CiGlobe } from "react-icons/ci";



const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <nav className="navbar">
      <div className="logo"><img className="img" src="/assets/img/logo2.png"/></div>
        <div className="navinner">
        <NavLink to="/" className="navLink" activeClassName="active">DashBoard</NavLink>
        <NavLink to="/favourite" className="navLink" activeClassName="active">My favourites</NavLink>
        <NavLink to="/event" className="navLink" activeClassName="active">Upcoming events</NavLink>
        <NavLink to="/notification" className="navLink" activeClassName="active"><FaBell style={{color:"#22222",fontSize:"13px",fontWeight:"400",opacity:"30%",marginLeft:"20px"}}/></NavLink>
         <div className="user-menu" ref={dropdownRef}>
          <div className="navLink user white-back" onClick={toggleDropdown}>
            <GiHamburgerMenu style={{color:"#22222",fontSize:"14px",fontWeight:"400"}}/>
            <div className="user-img"></div>
          </div>
          {showDropdown && (
            <Dropdown/>
          )}
          </div>
        <NavLink to="/language" className="navLink globe" activeClassName="active"><CiGlobe style={{color:"black",fontSize:"15px",fontWeight:"600",marginLeft:"12px"}}/></NavLink>

        </div>
      
    </nav>
  );
};

export default Navbar;
