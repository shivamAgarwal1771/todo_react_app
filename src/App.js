import './App.css';
import {Link,NavLink} from 'react-router-dom'
import { Route,Routes } from 'react-router-dom';
import React, { useState } from 'react'
import todo from "./todo.jpg"
import Home from "./Home"
var count=0;
var dat=0;
const input_array = [];
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
      input_array.push(val);
       dat=count+1;
      list.innerHTML = input_array[count]
      count=count+1
      inputBox.appendChild(list)
      delete_data.innerHTML = "DELETE"
      list.appendChild(delete_data)
      edit_data.innerHTML = "EDIT"
      list.appendChild(edit_data)
    }
    delete_data.addEventListener("click", function (e) {
      e.target.parentElement.remove();
      count=count-1;
    })
    edit_data.addEventListener("click", function (e) {
      
    let a=document.createElement("input")
    let b=document.createElement("button")
    b.innerHTML="Edit"
    list.appendChild(a)
   list.appendChild(b)
    b.addEventListener("click",function(e){
    
    // input_array[dat]=a.value;
    for(var i=0;i<=count;i++)
    {
      console.log(input_array[i] + i)
    }
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
          <div>
            <p>“Attitude is a choice. Happiness is a choice. Optimism is a choice. Kindness is a choice. Giving is a choice. Respect is a choice. Whatever choice you make makes you. Choose wisely.”</p>
            <div className='picture'>
              <img src={todo} />
            </div>
          </div>
        </div>
      <Home/>
      </div>
    </>
  );
}

export default App;
