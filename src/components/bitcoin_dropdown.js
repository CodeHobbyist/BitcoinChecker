import React, { Component } from 'react';
import 'react-dropdown/style.css';
import Dropdown from 'react-dropdown';

const options = [
  'Choose Currency', 'USD', 'GBP', 'EURO'
]

const defaultOption = options[0];

class BitcoinDropDown extends Component {
  render(){
    return(
      <Dropdown
        options={options}
        onChange={this._onSelect}
        value={defaultOption}
        placeholder="Select an option"
        />
    );
  }
}

export default BitcoinDropDown;
