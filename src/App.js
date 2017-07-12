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
        <button onClick={()=> this.setState({listVisible: !this.state.listVisible, detailsVisible: !this.state.detailsVisible})}>Change View</button>
        {this.state.listVisible && 
        <ListOfFundsMain
          dataBase={dataBase}
        />}
        {this.state.detailsVisible && 
        <FundDetailsMain 
          dataBase={dataBase}
        />
        }
      </div>
    );
  }
}

export default App;
