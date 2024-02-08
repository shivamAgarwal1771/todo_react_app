import Dropdown from 'react-bootstrap/Dropdown';
import '../css/assist.css';
import { useState } from 'react';
import styled from 'styled-components'
function BasicExample(props) {
  const [open, setOpen] = useState(false)
  var colors=props.bgs;
  var [data, setData] = useState(props.name)
  var [text, setText] = useState(props.subname);
  const Title = styled.div`
background-color: ${colors};
  padding:6px
`;
  return (
    <div className='drop_id'>
      <Title className='assist-css' onClick={(e) => { setOpen(!open) }}>
        {data}
      </Title>
      {open &&
        <ul>
          <li className='menu' onClick={() => {
            setOpen(false)
            if (data == props.name) {
              setData(text)
              setText(props.name)
            }
            else {
              setData(text)
              setText(props.subname)
            }
          }}>{text}</li>
        </ul>
      }

    </div>
  );
}

export default BasicExample;
