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
  function sendMessage() {
    const userInput = document.getElementById("userInput").value;
    if (userInput != "") {
      var chatBox = document.getElementById("chatBox");
      var newMessage = document.createElement("div");
      newMessage.className = "user";
      newMessage.textContent =userInput;
      chatBox.appendChild(newMessage);
        setTimeout(function () {
          var botMessage = document.createElement("div");
          botMessage.className = "bot";
          for (var key in obj){
          if(key == userInput)
          {
            json_data=false;
            botMessage.textContent = obj[key];
          }
        }
        if(json_data)
          botMessage.textContent = "I got your message: "+ userInput;
          chatBox.appendChild(botMessage);
        }, 500);
        document.getElementById("userInput").value = "";
        json_data=true;
    }
}



  return (
<>
  <div id="chatBox">
      <div class="bot">Hello! How can I help you today?</div>
  </div>
  <div class="chat-input">
      <input type="text" id="userInput" placeholder="Type your message here"/>
      <button onClick={()=>sendMessage()}>Send</button>
  </div>
  </>
  );
}

export default Chat;
