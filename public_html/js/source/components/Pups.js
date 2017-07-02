'use strict';

import React from 'react';

class Pups extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      farbe: props.farbe,
      vorigeFarbe: '',
      ausklappert: false,
      text: props.text,
      text2: props.text2
    };
  }
  
  render() {
    var farbe = this.state.farbe;
    var text = this.state.text;
    var text2 = this.state.text2;
    return <h2 className={farbe}
      onClick={this.do.bind(this)}
      onMouseOver={this.over.bind(this)}
      onMouseOut={this.out.bind(this)}
      >{text} {farbe} usw.
      {
        this.state.ausklappert
          ? <div>{text2}</div>
          : <span></span>
      }
    </h2>;
  }
  
  over () {
    this.setState({
      farbe: 'gray',
      vorigeFarbe: this.state.farbe
    });
  }
  
  out () {
    this.setState({
      farbe: this.state.vorigeFarbe
    });
  }
  
  do(e) {
    var ausklappert = ! this.state.ausklappert;
    this.setState({ausklappert: ausklappert});
  }
};

export default Pups;