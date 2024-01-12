import './App.css';
import React, { useState } from 'react'
import todo from "./todo.jpg"
function App() {
  const [val, setVal] = useState("")
  function handle() {
    const inputBox = document.getElementById('data')
    let delete_data = document.createElement('span')
    let edit_data = document.createElement('span')
    if (val === "")
      alert("enter something")
    else {
      let list = document.createElement("li")
      list.innerHTML = val
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
      alert("EDITED")
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
      
      </div>
    </>
  );
}

export default App;
