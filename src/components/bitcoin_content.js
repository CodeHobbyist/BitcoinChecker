import React, { Component } from 'react';
import BitcoinThemeChanger from './bitcoin_theme_changer';
import BitcoinRate from './bitcoin_rate';

class BitcoinContent extends Component {
  render(){
    return(
      <div className="bitcoin-content col-md-12">
        <BitcoinThemeChanger />
        <BitcoinRate />
      </div>
    );
  }
}


export default BitcoinContent;
