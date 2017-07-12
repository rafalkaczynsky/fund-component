import React, { Component } from 'react';

import {ListOfFundsMain, FundDetailsMain} from './components';

var dataBase = require('./data/data.json'); 



class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      listVisible: false,
      detailsVisible: true,
    }
  }

  render() {

    return (
      <div className="App">
        {this.state.listVisible && 
        <ListOfFundsMain
          dataBase={dataBase}
        />}
        {this.state.detailsVisible && 
        <FundDetailsMain />
        }
      </div>
    );
  }
}

export default App;
