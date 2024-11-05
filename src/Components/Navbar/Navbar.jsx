// type rafce to convert navbar file to component.
import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import underline from '../../assets/nav_underline.svg'

const Navbar = () => {
  
  const [menu,setMenu] = useState("home");

  return (
    <div className="navbar">
      <div className="flex items-center">
        <img src={logo} alt="Logo" />
      </div>

      <ul className="nav-menu">
        <li><p onClick={()=>setMenu("home")} >Home</p>{menu==="home"? <img src={underline} alt=''/>:<></>}</li>
        <li><p onClick={()=>setMenu("about")} >About Me</p>{menu==="about"? <img src={underline} alt=''/>:<></>}</li>
        <li><p onClick={()=>setMenu("services")} >Services</p>{menu==="services"? <img src={underline} alt=''/>:<></>}</li>
        <li><p onClick={()=>setMenu("portflio")} >Portfolio</p>{menu==="work"? <img src={underline} alt=''/>:<></>}</li>
        <li><p onClick={()=>setMenu("contact")} >Contact</p>{menu==="contact"? <img src={underline} alt=''/>:<></>}</li>
      </ul>
      <div className="nav-connect">Connect with Me</div>
    </div>
  );
};

export default Navbar;
