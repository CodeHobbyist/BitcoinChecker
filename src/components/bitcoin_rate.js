import React from 'react';
const BitcoinRate = ({postSelectedCurrency, postCurrencyVal, postCurrencyDesc, fontSizeTitle, fontSizePhrase}) => {
let bitcoinPhrase = `Bitcoin Rate For ${postCurrencyDesc}, ${postSelectedCurrency} ${postCurrencyVal}`;
if(postSelectedCurrency === '' || postSelectedCurrency === 'default'){
    bitcoinPhrase = "Please Choose Bitcoin Currency"
 }
return(
    <div className="bitcoin-rate col-md-12 col-xs-12">
      <div className="col-md-12 col-xs-12">
        <h3 style={{fontSize: fontSizeTitle +'px'}}>Check current bitcoin rate:</h3>
      </div>
      <div className="col-md-12 col-xs-12">
        <h2 style={{fontSize: fontSizePhrase +'px'}}> <p>{bitcoinPhrase}</p></h2>
      </div>
    </div>
  );
};

export default BitcoinRate;
