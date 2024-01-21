import React from 'react'
import { useEffect, useState } from 'react';
import './Home.css'
let count=0;
function Home(){
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
          botMessage.textContent = "I got your message: "+ userInput;
          chatBox.appendChild(botMessage);
        }, 500);
        document.getElementById("userInput").value = "";
        chatBox.scrollTop=chatBox.scrollHeight;
    }
}



  return (
   <>
  <div class="chat-container">
  <div class="chat-header">
      <h2>Chatbot</h2>
  </div>
  <div id="chatBox">
      <div class="bot">Hello! How can I help you today?</div>
  </div>
  <div class="chat-input">
      <input type="text" id="userInput" placeholder="Type your message here"/>
      <button onClick={()=>sendMessage()}>Send</button>
  </div>
</div>
</>
  );
}

export default Home;
