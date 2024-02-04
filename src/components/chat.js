import React, { useRef } from 'react'
import { useEffect, useState } from 'react';
import '../css/chat.css'
import { Input } from 'postcss';
var count = -1;
const arr = ["Heyy, How are you?", "I am here to help you", "i can't get you", "Can you repeat the query please", "can you explain it properly", "Can't get you"];
function Chat() {
  const [data, setData] = useState("")
  const [msg, setMsg] = useState([
    {
      text: "Heyy nice to meet you!!",
      bot: true
    }
  ])
  let date = new Date().toLocaleTimeString([], {
    hour: '2-digit',
    hour12: true,
    minute: '2-digit'
  });
  const sendMessage=()=>{
    count = count + 1;
    if (data != "") {
      setMsg([...msg, { text: data, bot: false }, { text: arr[count], bot: true }])
    }
  }

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <div className='chatbot'>
        <div className='chatbox'>
          {msg.map((msg, i) => {
            return (
              <div className='chat incoming'>
              <div className='column'>
                <div className='avatar_green'>{msg.bot==true?"R":"S"}</div>
                <div><p className='user_name'>{msg.bot==true?"Ratnesh Chandra":"Shivam Agarwal"}</p>
                  <p>{msg.text}</p>
                </div>
              </div>
              <span className='date'>{date}</span>
             </div>
            )
          })}
          
        </div>
        <div className='input'>
          <input className='dataa' type="text" placeholder='Enter your message' onChange={(e) => { setData(e.target.value) 
          }} />
          <div className="input_span" onClick={() => {
          document.getElementsByClassName('dataa')[0].value=""
            sendMessage()
          }}>SEND</div>
        </div>
      </div>
    </>
  );
}



export default Chat;
