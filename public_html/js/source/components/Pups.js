'use strict';

import React from 'react';

class Pups extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      farbe: props.farbe,
      addrow: false,
      ausklappert: false
    };
  }
  
  render() {
    var farbe = this.state.farbe;
    return <h2 className={farbe}
      onClick={this.do.bind(this)}
      onMouseOver={this.over.bind(this)}
      onMouseOut={this.out.bind(this)}
      >Test mit Babel in {farbe} usw.
      
      {
        this.state.addrow
          ? <table><tr><td>Aber:</td><td>Added Row!</td></tr></table>
          : <span></span>
      }
      
    </h2>;
  }
  
  over () {
    //this.setState({
      //farbe: 'gray',
      //vorigeFarbe: this.state.farbe
    //  addrow: true
    //});
  }
  
  out () {
    //this.setState({
      //farbe: this.state.vorigeFarbe
      //addrow: false
    //});
  }
  
  do(e) {
    
    
    
    /*var farben = [
      'red', 'green', 'orange'
    ];
    var farbe = this.state.farbe;
    var i;
    farben.map(function(val, idx) {
      if(val === farbe) {
        i = idx;
      }
    });
    if (i !== undefined) {
      i++;
      if (i > farben.length -1) {
        i = 0;
      }
      this.setState({farbe: farben[i]});
    }
  }*/
};

export default Pups;