import Dropdown from 'react-bootstrap/Dropdown';
import  '../css/assist.css';
import { useState } from 'react';
function BasicExample(props) {
    var [data,setData]=useState(props.name)
    var [text,setText]=useState(props.subname);
  return (
    <div className='drop_id'>
    <Dropdown className='drop'>
      <Dropdown.Toggle variant="success" className='dropdown_id'>
       {data}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item className='menu' onClick={()=>
            {
if(data==props.name)
{
    setData(text) 
    setText(props.name)
}
else 
{
    setData(text) 
    setText(props.subname)
}
              
            }}>{text}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
  );
}

export default BasicExample;