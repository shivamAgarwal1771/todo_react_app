import React from 'react'
import '../css/assist_comp.css'
import Chat from "./chat"
function Dymanic_msg() {
  return (
    <div className='main-ui'>
    <div className='container_data'>
    <div className="container_style">
     <div className='text'>
        SA 
     </div>
     <div className='data'>
         Recommendation
     </div>
     <div className='time'>
         7:43 pm
     </div>
    </div>
    <div className='msg'>
     Heyy Nice To Meet You How Can I Help You.
    </div>
  </div>
  <div>
<Chat/>
  </div>
  </div>
  )
}

export default Dymanic_msg