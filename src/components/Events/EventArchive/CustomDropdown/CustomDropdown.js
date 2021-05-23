import React, { useState } from 'react';
import './style.scss';

function CustomDropdown(props) {
  const [dropped, setDropped] = useState(false);

  return (
    <div className='dd-container'>
      <div className='dd-header'>
        <div className='dd-title'>{props.title}</div>
        <button type='button' className='dd-button'>{(dropped) ? '-' : '+'}</button>
      </div>
    </div>
  );
}

export default CustomDropdown;