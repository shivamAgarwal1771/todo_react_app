import '../css/App.css';
import {Link,NavLink} from 'react-router-dom'
import { Route,Routes } from 'react-router-dom';
import React, { useState } from 'react'
import Home from "./chat"
function App() {
  const [val, setVal] = useState("")
  function handle() {
    const inputBox = document.getElementById('data')
    let delete_data = document.createElement('span')
    let edit_data = document.createElement('span')
    let list = document.createElement("li")
    if (val === "")
      alert("enter something")
    else {
      list.innerHTML =val
      inputBox.appendChild(list)
      delete_data.innerHTML = "DELETE"
      list.appendChild(delete_data)
      edit_data.innerHTML = "EDIT"
      list.appendChild(edit_data)
    }
    delete_data.addEventListener("click", function (e) {
      e.target.parentElement.remove();
    })
    edit_data.addEventListener("click", function (e) {
    let a=document.createElement("input")
    a.className="input_todo"
    let b=document.createElement("button")
    b.innerHTML="Edit"
    list.appendChild(a)
   list.appendChild(b)
    b.addEventListener("click",function(e){
   let new_data=document.getElementsByClassName('input_todo')[0].value;
   list.innerHTML=new_data
      list.appendChild(delete_data)
      list.appendChild(edit_data)
    })
    })
    setVal("")
   
  }
  return (
    <>
      <div className="main">
        <h1>TODO LIST</h1>
        <div className='align_data'>
          <div>
            <input className='Todo-input' type='text' placeholder='what is the task for today' onChange={(e) => { setVal(e.target.value) }} value={val} />
            <button className='btn' onClick={() => handle()}>  CLICK HERE TO ADD </button>
            <div>
              <ul id='data'></ul>
            </div>
          </div>
          </div>
        </div>
    </>
  );
}

export default App;
