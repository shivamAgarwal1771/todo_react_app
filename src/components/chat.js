import React from 'react'
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
  function sendMessage() {
    let date=  new Date().toLocaleTimeString('en-US', { hour12: false, 
      hour: "numeric", 
      minute: "numeric"});
    const userInput = document.getElementById("userInput").value;
    if (userInput != "") {
      var chatBox = document.getElementById("chatBox");
      var avatar = document.createElement("span");
      avatar.innerHTML="SHIVAM";
      var newMessage = document.createElement("div");
      newMessage.className = "user";
      chatBox.appendChild(avatar)
      newMessage.innerHTML =userInput +`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ${date}`;
      chatBox.appendChild(newMessage);
        setTimeout(function () {
          var bot_avatar=document.createElement("span");
          bot_avatar.innerHTML="BOT"
          var botMessage = document.createElement("div");
          botMessage.className = "bot";
          chatBox.appendChild(bot_avatar);
          for (var key in obj){
          if(key == userInput)
          {
            json_data=false;
            botMessage.innerHTML = obj[key] +`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${date}`;
          }
        }
        if(json_data)
          botMessage.innerHTML = "I got your message: "+ userInput +`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${date}`;
          chatBox.appendChild(botMessage);
        }, 500);
        document.getElementById("userInput").value = "";
        json_data=true;
    }
}
  return (
<div className='main-div'>
  <div className='container'>
    <div className='top-part'>
      <p style={{color:"white", padding:50}}>SIRI CHAT BOT</p>
    </div>
    <div id="chatBox">
      <div class="bot">Hello! How can I help you today?</div>
  </div>
  <div class="chat-input">
      <input type="text" id="userInput" placeholder="TYPE"/>
      <button onClick={()=>sendMessage()}>Send</button>
  </div>

  </div>

  </div>
  );
}


export default Chat;
