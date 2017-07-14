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
      fundItem: null,
      fundName: 'testNameFund',
    }
  }

  handleToggle(e, fundItem, fundName){
    e.preventDefault();
    this.setState({listVisible: false, detailsVisible: true, fundItem: fundItem, fundName: fundName})
  }

  handleChangeView(){
    if (this.state.fundItem) {
       this.setState({listVisible: !this.state.listVisible, detailsVisible: !this.state.detailsVisible})
    } else {
      alert('If you want see fund details page select one!')
    }
  
  }

  render() {

    /**
     * 
     * 
     * 
     * 
     *  $..book[?(@.isbn)]	Filter all books with isbn number
        $..book[?(@.price<10)]	Filter all books cheaper than 10
        $..book[?(@.price==8.95)]	Filter all books that cost 8.95
        $..book[?(@.price<30 && @.category=="fiction")]	Filter all fiction books cheaper than 30
     */
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
          onClickItem={(e, fundItem, fundName)=> this.handleToggle(e, fundItem, fundName)}
        />}
        {this.state.detailsVisible && 
        <FundDetailsMain 
          dataBase={dataBase}
          fundItem={this.state.fundItem}
          fundName={this.state.fundName}
        />
        }
      </div>
    );
  }
}

export default App;
