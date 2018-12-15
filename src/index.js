import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BitcoinHeader from './components/bitcoin_header';
import BitcoinContent from './components/bitcoin_content';
import axios from 'axios';
import * as serviceWorker from './components/serviceWorker';

export const ROOT_URL = "https://api.coindesk.com/v1/bpi/currentprice.json";

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
    selectedCurrency: '',
    currencyVal: '',
    currencyDesc: '',
  }
  this.BitcoinHeader = React.createRef();
  }

  bitcoinHeaderCallback(currency){

    this.setState({
      selectedCurrency: currency
    });

    axios.get(ROOT_URL).then( (response) => {
       switch (this.state.selectedCurrency) {
          case 'USD':
           const Test = response.data.bpi.USD.rate;
           this.setState({
                currencyVal: Test,
                currencyDesc: response.data.bpi.USD.description
            });
          break;
          case 'EUR':
            this.setState({
                currencyVal: response.data.bpi.EUR.rate,
                currencyDesc: response.data.bpi.EUR.description
            });
          break;
          case 'GBP':
            this.setState({
                currencyVal: response.data.bpi.GBP.rate,
                currencyDesc: response.data.bpi.GBP.description
            });
          break;
          default:
          break;
      }
    }).catch( (error) => {
       console.log(error);
    });;

  }
  themeColorCallback(themeColor){
    const color = `themeColor-${themeColor}`
    switch (color) {
        case 'themeColor-green':
            document.body.classList.add(color);
            document.body.classList.remove('themeColor-blue');
            document.body.classList.remove('themeColor-yellow');
            document.body.classList.remove('themeColor-pink');
        break;
        case 'themeColor-blue':
            document.body.classList.add(color);
            document.body.classList.remove('themeColor-green');
            document.body.classList.remove('themeColor-yellow');
            document.body.classList.remove('themeColor-pink');
        break;
        case 'themeColor-yellow':
            document.body.classList.add(color);
            document.body.classList.remove('themeColor-green');
            document.body.classList.remove('themeColor-blue');
            document.body.classList.remove('themeColor-pink');
        break;
        case 'themeColor-pink':
            document.body.classList.add(color);
            document.body.classList.remove('themeColor-green');
            document.body.classList.remove('themeColor-blue');
            document.body.classList.remove('themeColor-yellow');
        break;
        default:
        break;
    }
  }

  minusFontSizeCallback(decVal){
  this.BitcoinHeader.current.minusFontSize(decVal);
  }

  addFontSizeCallback(incVal){
  this.BitcoinHeader.current.addFontSize(incVal);
  }
  render() {
      const bitcoinHeaderCallback = (currency) => {this.bitcoinHeaderCallback(currency)}
      const themeColorCallback = (themeColor) => {this.themeColorCallback(themeColor)}
      const minusFontSizeCallback = (decVal) => {this.minusFontSizeCallback(decVal)}
      const addFontSizeCallback = (incVal) => {this.addFontSizeCallback(incVal)}
      return (
          <React.Fragment>
            <BitcoinHeader
              ref={this.BitcoinHeader}
              getSelectedCurrency = {bitcoinHeaderCallback}
            />
            <BitcoinContent
              postSelectedCurrency = {this.state.selectedCurrency}
              postCurrencyVal = {this.state.currencyVal}
              postCurrencyDesc = {this.state.currencyDesc}
              getThemeColor = {themeColorCallback}
              getMinusFontSize = {minusFontSizeCallback}
              getAddFontSize = {addFontSizeCallback}
            />
          </React.Fragment>
      );
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
