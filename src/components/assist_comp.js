import React from 'react'
import '../css/assist_comp.css'
import BasicExample from './dropdown'
import Dymanic_msg from './dynamic_msg'
function Assist_comp() {
  return (
    <>
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
     <div className='assist_comp'>
      <div>
      Search
      <div className='search_bar'><i class="fa-solid fa-search"></i> Search</div>
      </div>
      <div className='filter'>
      Filter by
    <div><BasicExample name="Filter by" subname="experience"/></div>
      </div>
      <div className='sort'>
      Sort by
    <div><BasicExample name="Sort by" subname="experience"/></div>
      </div>
     </div>
     <Dymanic_msg/>
    </>
  
  )
}

export default Assist_comp