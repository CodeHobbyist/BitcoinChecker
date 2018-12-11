import React, { Component } from 'react';
import BitcoinDropDown from './bitcoin_dropdown';

class BitcoinHeader extends Component {
  render() {
    return (
      <header className="bitcoin-header">
         <div className="col-md-6"><h3>BITCOIN CHECKER</h3></div>
         <div className="col-md-6">
           <BitcoinDropDown />
         </div>
      </header>
     );
  }
}

export default BitcoinHeader;
