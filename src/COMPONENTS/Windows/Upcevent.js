import React from 'react'
import Eventcard from '../card/Eventcard'

export default function Upcevent() {

  var scrollusingbtn = (direction)=>{
    document.getElementById("event_container").scrollLeft += 200;
  }


  // var event_container_style = {
    
  // }

  return (
<>
<div id='upcomingeventwind'>
    <div>
        <div id='linkeevent'>
Upcoming Events
        </div>
    </div>
    <div id='event_container' >
     <Eventcard/>
     <Eventcard/>
     <Eventcard/>
     <Eventcard/>
     <Eventcard/>
    </div>

    <button onClick={scrollusingbtn}> ok </button>
</div>
</>
  )
}
