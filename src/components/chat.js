import React, { useRef } from 'react'
import { useEffect, useState } from 'react';
import '../css/chat.css'
var json_data=true;
const obj= {
  "heyy":"hello",
  "i need help":"How can i help you",
  "i am user":"nice to meet you",
  "who are you":"i am your personal chat bot",
  "who is aman":"he is your best friend"
}

function Chat(){
  const [data,setData]=useState("")
  let date=  new Date().toLocaleTimeString('en-US', { hour12: false, 
          hour: "numeric", 
          minute: "numeric"});
   function sendMessage() {
        if (data != "") {
          var msg_date= document.createElement("span")
          msg_date.innerHTML=date;
          var chatbox = document.getElementsByClassName("chatbox");
          var newMessage = document.createElement("div");
          var blue= document.createElement("div")
          blue.className="avatar_blue"
          blue.innerHTML="U"
          newMessage.appendChild(blue)
          var newData = document.createElement("p");
          newMessage.className = "chat outgoing";
          newData.innerHTML =data;
          newMessage.appendChild(newData);
          newMessage.appendChild(msg_date)
          chatbox[0].appendChild(newMessage)
            setTimeout(function () {
              var m_date= document.createElement("span")
              m_date.innerHTML=date;
              var botMessage = document.createElement("div");
              var botData = document.createElement("p");
              var green= document.createElement("div")
              green.className="avatar_green"
              green.innerHTML="B"
              botMessage.appendChild(green)
              botMessage.className = "chat incoming";
              botData.innerHTML="get it"
              botMessage.appendChild(botData)
              botMessage.appendChild(m_date)
              chatbox[0].appendChild(botMessage);
            }, 500);
            document.getElementsByClassName("data")[0].value = "";
        }
      }
  return(
  <div className='chatbot'>
   <header>
    <h2>Chatbot</h2>
   </header>
   <div className='chatbox'>
<div className='chat incoming'>
  <div className='avatar_green'>B</div>
<p>Hi, How can i help you?</p>
<span className='date'>{date}</span>
</div>
<div className='chat outgoing'>
<div className='avatar_blue'>U</div>
<p>Hi, i need help urgently</p>
<span className='date'>{date}</span>
</div>
   </div>
   <div className='input'>
    <textarea className='data' placeholder='Enter your message'></textarea>
    <span className="input_span"onClick={()=>
    {
      setData(document.getElementsByClassName("data")[0].value);
      sendMessage()}}>SEND</span>
   </div>
  </div>
  );
}



export default Chat;
