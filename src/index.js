import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BitcoinHeader from './components/bitcoin_header';
import BitcoinContent from './components/bitcoin_content';
import * as serviceWorker from './components/serviceWorker';


class App extends Component {
  render() {
    return (
      <div>
        <BitcoinHeader />
        <BitcoinContent />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
