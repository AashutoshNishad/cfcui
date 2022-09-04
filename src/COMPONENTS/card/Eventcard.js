import React from 'react'
import "./card.css";
import img1 from "./img1.jpeg"
export default function Eventcard() {
  return (
   <>
 <div class="card" style={{width: "30rms"}}>
  <img src={img1} class="card-img-top" alt=".."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">this event is a best event of CFC. so join event and ...</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
   </>
  )
}
