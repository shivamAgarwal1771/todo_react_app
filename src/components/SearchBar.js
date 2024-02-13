import React, { useState } from 'react'
import '../css/assist_comp.css'
function SearchBar() {
    const [input,setInput]=useState("")
  return (
    <div>
    Search
    <div className='search_bar'><i class="fa-solid fa-search"></i> <input style={{color:"black",width:140,height:27,padding:0}} placeholder='Search' onChange={(e)=>
        {
            setInput(e.target.value)
        }
       }/></div>
    </div>
  )
}

export default SearchBar