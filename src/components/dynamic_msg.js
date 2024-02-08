import React from 'react'
import '../css/assist_comp.css'
import Chat from "./chat"
function Dymanic_msg() {
  let date = new Date().toLocaleTimeString([], {
    hour: '2-digit',
    hour12: true,
    minute: '2-digit'
  });
  const arr=["Can you guide me for my query","Heyy give me a brief of the app","Nice to meet you how can i help you"]
  return (
    < div className="style">
    <div className='main-ui'>
      {arr.map((arr,i) => {
        return( 
          <>
           <div className='container_data'>
    <div className="container_style">
     <div className='text'>
        SA 
     </div>
     <div className='data'>
         Recommendation
     </div>
     <div className='time'>
       {date}
     </div>
    </div>
    <div className='msg'>
    {arr}
    </div>
    </div>
    </>
        )
      })
}
  </div>
     <div>
<Chat/>
  </div>
  </div>
  )
}

export default Dymanic_msg