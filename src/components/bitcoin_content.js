import React, { Component } from 'react';
import BitcoinThemeChanger from './bitcoin_theme_changer';
import BitcoinRate from './bitcoin_rate';

class BitcoinContent extends Component {
  constructor(props){
    super(props);
    this.state = {
      fontSizeTitle: 24,
      fontSizePhrase: 30
     }
   }
  themeColorCallback(themeColor){
     this.props.getThemeColor(themeColor);
  }
  minusFontSizeCallback(decVal){
    this.props.getMinusFontSize(decVal);
    this.setState({
        fontSizeTitle: this.state.fontSizeTitle - decVal,
        fontSizePhrase: this.state.fontSizePhrase - decVal
    });
  }
 addFontSizeCallback(incVal){
    this.props.getAddFontSize(incVal);
    this.setState({
        fontSizeTitle: this.state.fontSizeTitle + incVal,
        fontSizePhrase: this.state.fontSizePhrase + incVal
    });
  }
render(){
    const themeColorCallback = (themeColor) => {this.themeColorCallback(themeColor)}
    const minusFontSizeCallback = (decVal) => {this.minusFontSizeCallback(decVal)}
    const addFontSizeCallback = (incVal) => {this.addFontSizeCallback(incVal)}
    return(
      <div className="bitcoin-content col-md-12 col-xs-12">
        <BitcoinThemeChanger
            getThemeColor = {themeColorCallback}
            getMinusFontSize = {minusFontSizeCallback}
            getAddFontSize = {addFontSizeCallback}
        />
        <BitcoinRate
          postSelectedCurrency = {this.props.postSelectedCurrency}
          postCurrencyVal = {this.props.postCurrencyVal}
          postCurrencyDesc = {this.props.postCurrencyDesc}
          fontSizeTitle = {this.state.fontSizeTitle}
          fontSizePhrase = {this.state.fontSizePhrase}
        />
      </div>
    )
  }
}


export default BitcoinContent;
