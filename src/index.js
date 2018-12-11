import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BitcoinHeader from './components/bitcoin_header';
import BitcoinContent from './components/bitcoin_content';
import * as serviceWorker from './components/serviceWorker';

export const ROOT_URL = "https://api.coindesk.com/v1/bpi/currentprice.json";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BitcoinHeader />
        <BitcoinContent />
      </React.Fragment>
    );
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
