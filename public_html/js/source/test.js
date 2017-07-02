'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Pups from './components/Pups';

var texte = [
  { text: 'Der erschte Text',
    text2: 'Details zu 1',
    farbe: 'red'
  },
  {
    text: 'Der andere Text',
    text2: 'Details zu Text Nummer zwo',
    farbe: 'green'
  }
];

ReactDOM.render(
  <div>
  {
    texte.map(function (val, idx) {
      return (
        <Pups farbe={val.farbe}
          text={val.text}
          text2={val.text2} />
      );
    })
  }
  </div>,
  document.getElementById('app')
);
