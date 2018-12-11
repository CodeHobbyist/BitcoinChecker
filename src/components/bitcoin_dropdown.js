import React, { Component } from 'react';
import 'react-dropdown/style.css';
import Dropdown from 'react-dropdown';
import axios from 'axios';
import { ROOT_URL } from '../index';

class BitcoinDropDown extends Component {
  constructor(props){
    super(props);

    this.state = { term: [] };
  }

  componentDidMount(){
      axios.get(ROOT_URL).then( (response) => {
        const options = Object.keys(response.data.bpi);
        this.setState({
            term: options
        })
      });
  }

  render(){
    return(
       <Dropdown
        options={this.state.term}
        onChange={this._onSelect}
        value=''
        placeholder="Choose Currency"
        />
    );
  }
}

export default BitcoinDropDown;
