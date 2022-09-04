import React from "react";
import "./nav.css";
import { Link, To } from "react-router-dom";
import logo from "./logo.jpg";
import { Button, Icon, SvgIcon } from "@mui/material";
import Msu from "@mui/icons-material/Menu"
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";

// import MenuIcon from '@mui/icons-material/Menu';
export default function Navbar() {

const [navlink, setnavlink] = useState("none")

  return (
    <nav id="navbar">
      <div id="headicon">
        CFC
        <button id="midbtn" onClick={()=>{
         setnavlink(navlink == "none" ?"flex":"none");
         document.getElementById("navlinks").style.display = navlink;
         }}> <Msu />
  </button>
      </div>
      <ul id="navlinks" >
        <li id="link1">
          <Button sx={{color: "black" }} className="links"> Home </Button>
        </li>
        <li id="link2">
          <Button  sx={{color: "black"}} className="links"> Events </Button>
        </li>
        <li id="link3">
          <Button  sx={{color: "black"}} className="links"> Our Team </Button>
        </li>
        <li id="link4">
          <Button   sx={{color: "black"}} className="links"> About Us</Button>
        </li>
      </ul>
    </nav>
  );
}
