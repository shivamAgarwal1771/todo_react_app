import Dropdown from 'react-bootstrap/Dropdown';
import '../css/assist.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'
function BasicExample(props) {
  const [open, setOpen] = useState(false)
  var colors=props.bgs;
  var col=props.colors;
  var [data, setData] = useState(props.name)
  var [text, setText] = useState(props.subname);
  const Title = styled.select`
background-color: ${colors};
color:${col}
  padding:6px
`;
  return (
    <div className='drop_id'>
    <Title className='assist-css' style={{color:col}}>
    <option style={{color:col, backgroundColor:colors}}>{data}</option>
    <option style={{color:col, backgroundColor:colors}}>{text}</option>
    </Title>
    </div>
  );
}

export default BasicExample;




// <div className='drop_id'>
// <Title className='assist-css' onClick={(e) => { setOpen(!open) }}>
// </Title>
// {open &&
//   <ul>
//     <li className='menu' onClick={() => {
//       setOpen(false)
//       if (data == props.name) {
//         setData(text)
//         setText(props.name)
//       }
//       else {
//         setData(text)
//         setText(props.subname)
//       }
//     }}>{text}</li>
//   </ul>
// }

// </div>