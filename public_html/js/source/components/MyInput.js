'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MyInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    };
    this.do = this.do.bind(this);
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.do} />
      </div>
    );
  }

  do(event) {
    console.log(event.target.value);
    this.setState({
      value: event.target.value
    })
  }
};

MyInput.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string
};

MyInput.defaultProps = {
  type: 'text',
  text: 'kein Text'
};

export default MyInput;
