import React, { useState ,useEffect} from 'react'
import BasicExample from './dropdown'
import {Switch} from "antd"
import '../css/assist.css'
export default function Toggle() {
  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <div className='smart-system'>
        <header className='header'>
          <div className='head'>
            <span>EXL</span><span className='span'>Smart system agent</span>
            <div className='toggle'><Switch ></Switch></div>
            <div><button className='buttons'>Available</button></div>
            <div><div className='symbol'></div></div>
            <div className='dropdowns'><BasicExample name="Ready for Calls" subname="Ready for Text" bgs="black" /></div>
            <div className='profile'>
              <div className='avatar'><i class="fa-solid fa-user"></i></div>
              <div className='user-name'><BasicExample name="Ratnesh Chandra" subname="Shivam Agarwal" bgs="black" /></div>
            </div>
          </div>
        </header>
      </div>
    </>
  )
}