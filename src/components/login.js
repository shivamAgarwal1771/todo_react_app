import React, { useState } from 'react'
import '../css/login.css'
import { Link } from 'react-router-dom';

function Login(){
    const [data, setData]=useState("LOGIN")
  return (
    <div className='body'>

    <div className='wrap'>
        <div>
<h2>{data}</h2>
<div className='username'>
    
    <input type='text' placeholder='username'required  />
    <span style={{color:"black"}}>spcae</span>
<input type='text' placeholder='password' required/>
</div>
<div className='forgot'>
<a href="" >FORGOT PASSWORD</a>
</div>
<Link to="/icon"><button>LOGIN</button></Link>

<div className='account'>
    <span>DONT HAVE ANY ACCOUNT?</span><a onClick={()=>{
        if(data=="LOGIN")
        setData("SIGNUP")
    else
    setData("LOGIN")
    }}>REGISTER</a>
</div>
        </div>

    </div>
  
    </div>
  );
}

export default Login;