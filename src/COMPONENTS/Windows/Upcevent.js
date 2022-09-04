import { Box, Container } from '@mui/system'
import React from 'react'
import Eventcard from '../card/Eventcard'

export default function Upcevent() {
  // var event_container_style = {
    
  // }

  return (
<>
<div id='upcomingeventwind'>
    <div>
        <div className='linkeevent'>
Upcoming Events
        </div>
    </div>
    
    <Container >
  <Box id='event_container'>
     <Eventcard/>
     <Eventcard/>
     <Eventcard/></Box>
    </Container>
</div>
</>
  )
}
