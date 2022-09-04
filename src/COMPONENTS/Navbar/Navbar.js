import React from "react";
import "./nav.css";
import {Link , To} from "react-router-dom";
import logo from './logo.jpg'
export default function Navbar() {

  return (
      <nav id="navbar">
        <div>
<img src={logo} height="30px" alt="" />
        </div>

    <ul id="navlinks">
      <Link to={"/"}>
<li className="links" id="link1">Home</li></Link>
<li className="links" id="link2">Events</li>
<li className="links" id="link3">Our Team</li>
<li className="links" id="link4">About Us</li>
    </ul>


{(localStorage.getItem("Email") )?<Link to={"/login"}>
    <button id="jn_btn_nav">
    Join
    </button></Link>:<>
    <Link to={"/Profile"}>
    <button id="jn_btn_nav" style={{borderRadius: "50%"}}>
    ☺
    </button></Link>
    </>}

      </nav>
  );
}
