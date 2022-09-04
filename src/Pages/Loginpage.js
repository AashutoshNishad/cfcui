import React, { useState } from "react";
import LoginForm from "../COMPONENTS/smallforms/LoginForm";
import "../COMPONENTS/Windows/windows.css";
import graphic_002 from "../COMPONENTS/Windows/5483080_2842680.jpg";
import { useNavigate } from "react-router-dom";
export default function  Loginpage(){
  // useState
  const [infomation, setinfomation] = useState({});
const history = useNavigate();
const loginfetch = async ()=>{
  try {
    
  const response = await fetch(`https://web-cfc.herokuapp.com/auth/login`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ rollNo: infomation.Email, password: infomation.Password })
});
var data = await response.json();
// console.log( await response.json() );
localStorage.setItem("Email" , data.Email);
// window.location = "/Profile";
history("/Profile" , {replace: true});
} catch (error) {
console.log(error);    
}

}
  return (
    <>
      <div className="wind_001">
        <div className="content_box_0101">
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              console.log(infomation);
              loginfetch();
            }}
          >
            <h2>Login</h2>
            <div>
              <label htmlFor="">Email : ... </label>
              <input type="number" name="email" id="" value={infomation.Email} onChange={(e) => {setinfomation({...infomation , ["Email"]: e.target.value})}} />
            </div>{" "}
            <div>
              <label htmlFor="">Password : </label>
              <input type="password" name="password" id="" value={infomation.Password} onChange={(e) => {setinfomation({  ...infomation , Password: e.target.value})}} />
            </div>
            <input type="submit" value="Log in" />
          </form>
        </div>
        <div id="graphic_001">
          <img src={graphic_002} width="100%" alt="" />
        </div>
      </div>
    </>
  );
}
