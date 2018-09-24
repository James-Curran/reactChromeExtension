import React from 'react';
import { hot } from 'react-hot-loader';
import icon from '../../img/icon-128.png';

function Popup() {
  return (
    <div>
      <p>Hello, find me on src/js/popup/greeting_component.jsx</p>
      <img src={icon} alt="Temp Holder Image" />
    </div>
  );
}

export default hot(module)(Popup);
