import React, { Component } from 'react';
import axios from 'axios';
import { ROOT_URL } from '../index';

class BitcoinDropDown extends Component {
  constructor(props){
    super(props);

    this.state = {
      term: [],
      selectedCurrency: '',
    };
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
       <select
         onChange={event => this._onHandleChange(event.target.value)}
        >
        <option key="default" value="default">Choose Currency</option>
         {this.state.term.map(currency => {
         return <option key={currency} value={currency}> {currency} </option>
         })}
       </select>
     );
  }

  _onHandleChange(value) {
      this.setState({
         selectedCurrency: value
      })
      this.props.onSelectChange(value);
  }
}

export default BitcoinDropDown;
