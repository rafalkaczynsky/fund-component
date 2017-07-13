import React, { Component } from 'react';

import {ListOfFundsMain, FundDetailsMain} from './components';
import axios from 'axios';

var XMLHttpRequest = require('xhr2');

var reqwest = require('reqwest')
var dataBase = require('./data/data.json'); 

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

  render() {
  //const rest_url = 'http://funds.marlboroughfunds.com/marlboroughfunds.json'
 // let fundsResults = reqwest({url: rest_url});
 axios
  .get("http://codepen.io/jobs.json")
  .then(function(result) {    
    // we got it!
     console.log(result)
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
