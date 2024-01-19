import React from 'react'
import { useEffect, useState } from 'react';
import './Home.css'
let count=0;
function Home(){
  const [data, setData] = useState('heyy');
function handle()
{
console.log(data);
if(!data) return;
}
function changer(){
  count=count+1;
}
function handle()
{
const temp=document.createElement('li')
const addData=document.querySelector('.box')
const addData2=document.querySelector('.box2')
temp.innerHTML=data;

  if(count%2==0)
  addData.appendChild(temp)
else
  addData2.appendChild(temp)

}



  return (
   <div className='bot'>
    <header>
      <h3>CHATBOT</h3>
    </header>
    <ul className='box'>
      <li className='inbox'>
        <p className='input_data'>How can i help you</p>
        </li> 
    </ul>
    <ul className='box2'>
    <li className='outbox'>
        <p className='output_data'>Heyy</p>
        </li> 
       
    </ul>
    <button onClick={()=>changer()}>change</button>
    <div className='chat_input'>
      <textarea placeholder='Enter your text' onChange={(e)=>{setData(e.target.value)}} ></textarea>
      <button onClick={()=>handle()} >send</button>
    </div>
   </div>

  )
}

export default Home;