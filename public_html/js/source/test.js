'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Pups from './components/Pups';

ReactDOM.render(
  <div>
    <Pups farbe={'red'} />
  </div>,
  document.getElementById('app')
);
