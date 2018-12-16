import React, { Component } from 'react';
import BitcoinDropDown from './bitcoin_dropdown';

class BitcoinHeader extends Component {
  constructor(props){
    super(props);
    this.state = {
        fontSize: 24
    }
  }
  dropDownCallback(selectedCurrency){
     this.props.getSelectedCurrency(selectedCurrency);
  }
  addFontSize(incVal){
     const newFontSize = this.state.fontSize + incVal;
     this.setState({
         fontSize: newFontSize
     });
  }
  minusFontSize(decVal){
     const newFontSize = this.state.fontSize - decVal;
     this.setState({
         fontSize: newFontSize
     });
  }
  render() {
    const dropDownCallback = (selectedCurrency) => {this.dropDownCallback(selectedCurrency)}
    return (
      <header className="bitcoin-header">
         <div className="col-md-6">
         <h3 style={{fontSize: this.state.fontSize+'px'}}>BITCOIN CHECKER</h3>
         </div>
         <div className="col-md-6">
           <BitcoinDropDown onSelectChange = {dropDownCallback} />
         </div>
      </header>
     );
  }
}

export default BitcoinHeader;
