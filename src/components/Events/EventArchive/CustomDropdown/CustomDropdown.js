import React, { useState } from 'react';
import './style.scss';

function CustomDropdown(props) {
  const [dropped, setDropped] = useState(false);

  return (
    <div className='dd-container'>
      <div className='dd-header'>
        <div className='dd-title'>{props.title}</div>
        <button type='button' className='dd-button' onClick={() => setDropped(!dropped)}>{(dropped) ? '-' : '+'}</button>
      </div>
      <div className='dd-content'>
        <ul class="dropdown_menu dropdown_menu--animated dropdown_menu-6">
          <li class="dropdown_item-1">Item 1</li>
          <li class="dropdown_item-2">Item 2</li>
          <li class="dropdown_item-3">Item 3</li>
          <li class="dropdown_item-4">Item 4</li>
          <li class="dropdown_item-5">Item 5</li>
        </ul>
      </div>
    </div>
  );
}

export default CustomDropdown;