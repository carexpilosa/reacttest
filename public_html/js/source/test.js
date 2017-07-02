'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Pups from './components/Pups';

ReactDOM.render(
  <div>
    <Pups farbe={'red'} text={'Der erschte Text'} text2={'Details zu 1'}/>
    <Pups farbe={'green'} text={'Der andere Text'} text2={'Details zu Text Nummer zwo'}/>
  </div>,
  document.getElementById('app')
);
