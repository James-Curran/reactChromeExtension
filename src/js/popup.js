import '../css/popup.css';
import React from 'react';
import { render } from 'react-dom';
import Popup from './popup/popup';

/* eslint-disable react/jsx-filename-extension */
render(
  <Popup />,
  window.document.getElementById('app-container'),
);
