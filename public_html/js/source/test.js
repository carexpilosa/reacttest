'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Trial from './components/Trial';

var texte = [
  { text: 'Der erschte Text',
    text2: 'Detaillierte Informationen zum ersten Thema folgen dann hier. Sätze'
           + 'in großer Ausführlichkeit beschreiben den Sachverhalt',
    farbe: 'red'
  },
  {
    text: 'Der andere Text',
    text2: 'Auch hier sind Einzelheiten beschrieben, die den interessierten Leser'
           + 'mit interessanten Informationen versorgen und ihn auf den neuesten'
           + 'Stand der Forschung bringen.',
    farbe: 'green'
  }
];

ReactDOM.render(
  <span>
  {
    texte.map(function (val, idx) {
      return (
        <Trial farbe={val.farbe}
          text={val.text}
          text2={val.text2}
          key={idx} />
      );
    })
  }
  </span>,
  document.getElementById('app')
);
