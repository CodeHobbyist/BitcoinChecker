import React, { Component } from 'react';

class BitcoinThemeChanger extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstCondition: false,
      secCondition: false,
      thirdCondition: false,
      fourthCondition: false,
      fontSize: 24
    }
  }
  _onClick(value){
      switch (value) {
          case 'green':
            this.setState({
              firstCondition: !this.state.firstCondition,
              secCondition: false,
              thirdCondition: false,
              fourthCondition: false
            })
          break;
          case 'blue':
            this.setState({
              firstCondition: false,
              secCondition: !this.state.secCondition,
              thirdCondition: false,
              fourthCondition: false
            });
          break;
          case 'yellow':
            this.setState({
              firstCondition: false,
              secCondition: false,
              thirdCondition: !this.state.thirdCondition,
              fourthCondition: false
            });
          break;
          case 'pink':
            this.setState({
              firstCondition: false,
              secCondition: false,
              thirdCondition: false,
              fourthCondition: !this.state.fourthCondition
            });
          break;
          default:
          break;
      }
     this.props.getThemeColor(value);
  };
  addFontSize(value){
  const newFontSize = this.state.fontSize + value;
    this.setState({
        fontSize: newFontSize
    });
    this.props.getAddFontSize(value);
  }
  minusFontSize(value){
  const newFontSize = this.state.fontSize - value;
  this.setState({
      fontSize: newFontSize
  });
  this.props.getMinusFontSize(value);
  }
    render(){
      return(
        <div className="bitcoin-theme-changer col-md-12 col-xs-12">
            <div className="col-md-5 col-xs-12">
              <h3 style={{fontSize: this.state.fontSize+'px'}}><p> App Theme Changer </p></h3>
              <h3 style={{fontSize: this.state.fontSize+'px'}}><p> Change Color: </p></h3>
              <div className="row change-color-row">
                <div className={this.state.firstCondition ? "col-md-3 col-xs-3 active" : "col-md-3 col-xs-3"} onClick={event => this._onClick(event = "green")}></div>
                <div className={this.state.secCondition ? "col-md-3 col-xs-3 active" : "col-md-3 col-xs-3"} onClick={event => this._onClick(event = "blue")}></div>
                <div className={this.state.thirdCondition ? "col-md-3 col-xs-3 active" : "col-md-3 col-xs-3"} onClick={event => this._onClick(event = "yellow")}></div>
                <div className={this.state.fourthCondition ? "col-md-3 col-xs-3 active" : "col-md-3 col-xs-3"} onClick={event => this._onClick(event = "pink")}></div>
              </div>
              <h3 style={{fontSize: this.state.fontSize+'px'}}><p> Decrease/Increase Font Size: </p></h3>
              <div className="row increase-text-row">
                <div className="col-md-3 col-xs-3" onClick={event => this.minusFontSize(event = 1)}><span>&#8722;</span></div>
                <div className="col-md-3 col-xs-3" onClick={event => this.addFontSize(event = 1)}><span>&#43;</span></div>
              </div>
            </div>
        </div>
      );
    }
}

export default BitcoinThemeChanger;
