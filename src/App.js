import React, { Component } from 'react';

import {ListOfFundsMain, FundDetailsMain} from './components';

var dataBase = require('./data/data.json'); 
// var data = require('http://funds.marlboroughfunds.com/marlboroughfunds.json'); 

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      listVisible: true,
      detailsVisible: false,
      sedolNumber: null,
      fundName: 'testNameFund',
    }
  }
  handleToggle(e, sedolNumber, fundName){
    e.preventDefault();
    this.setState({listVisible: false, detailsVisible: true, sedolNumber: sedolNumber, fundName: fundName})
  }

  handleChangeView(){

    if (this.state.sedolNumber) {
       this.setState({listVisible: !this.state.listVisible, detailsVisible: !this.state.detailsVisible})
    } else {
      alert('If you want see fund details page select one!')
    }
   
  }

  getJSONP(url, success) {

    var ud = '_' + +new Date,
        script = document.createElement('script'),
        head = document.getElementsByTagName('head')[0] 
               || document.documentElement;

    window[ud] = function(data) {
        head.removeChild(script);
        success && success(data);
    };

    script.src = url.replace('callback=?', 'callback=' + ud);
    head.appendChild(script);

  }

  render() {
    
    this.getJSONP('http://funds.marlboroughfunds.com/marlboroughfunds.json', function(data){
      console.log('livedb')
      console.log(data);
    }); 


    return (
      <div className="App">
        <button onClick={this.handleChangeView.bind(this)}>Change View</button>
        {this.state.listVisible && 
        <ListOfFundsMain
          dataBase={dataBase}
          onClickItem={(e, sedolNumber, fundName)=> this.handleToggle(e, sedolNumber, fundName)}
        />}
        {this.state.detailsVisible && 
        <FundDetailsMain 
          dataBase={dataBase}
          sedolNumber={this.state.sedolNumber}
          fundName={this.state.fundName}
        />
        }
      </div>
    );
  }
}

export default App;
