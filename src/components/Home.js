import React from 'react'
import "../css/home.css"
import { Link } from 'react-router-dom';
function Home() {
  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <div className='List-icon'> 
    <ul className='emoji_list'>
        <Link to="/chat"><li className='emoji'><i class="fa-brands fa-rocketchat"></i></li></Link>
        <Link to="/todo"><li  className='emoji'><i class="fa-solid fa-pencil"></i></li></Link>
        <Link to="/assist"><li  className='emoji'><i class="fa-solid fa-pen"></i></li></Link>
    </ul>
    </div>
    </>
  )
}

export default Home;