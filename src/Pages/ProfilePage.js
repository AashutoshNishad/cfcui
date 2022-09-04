import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import graphic_002 from "../COMPONENTS/Windows/5483080_2842680.jpg";

export default function ProfilePage(props) {
// useEffect
const history = useNavigate();
    useEffect(() => {
      return () => {
        rsp();
      }
    }, [])
    

console.log([props , {no: 0}]);
// useState
const [info, setinfo] = useState({})
var rsp =async ()=>{
try {
    const response = await fetch(`https://web-cfc.herokuapp.com/user/fetch_user`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Email': localStorage.getItem("Email")
            },
         });
         var data = await response.json();
        console.log(data);
        setinfo(data);
        } catch (error) {
    console.log(error); 
    history("/login" , {replace: true});
        }
        };


        // rsp();
  return (<>
     <div className="wind_001">
        <div className="content_box_0101">
          <h1>Profile page</h1>
          <div>Name: {info.Name}</div>
          <div> Email: {info.Email} </div>
          <div>About: {info.Bio}</div>
          <button onClick={()=>{localStorage.removeItem("Email"); history("/login" , {replace: true}); }} >Log Out</button>
        </div>
        <div id="graphic_001">
          <img src={graphic_002} width="100%" alt="" />
        </div>
      </div>
      <div id='options'>
      <div id='add_event'>
<button>Add Event</button>
      </div>
      </div>
      </>  )
}
