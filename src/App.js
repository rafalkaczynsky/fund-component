import React, { Component } from 'react';

import {ListOfFundsMain, FundDetailsMain} from './components';

var dataBase = require('./data/data.json'); 



class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      listVisible: true,
      detailsVisible: false,
      sedolNumber: null
    }
  }
  handleToggle(e, sedolNumber){
    e.preventDefault();
    this.setState({listVisible: false, detailsVisible: true, sedolNumber: sedolNumber})
  }

  handleChangeView(){

    if (this.state.sedolNumber) {
       this.setState({listVisible: !this.state.listVisible, detailsVisible: !this.state.detailsVisible})
    } else {
      alert('If you want see fund details page select one!')
    }
   
  }

  render() {

    return (
      <div className="App">
        <button onClick={this.handleChangeView.bind(this)}>Change View</button>
        {this.state.listVisible && 
        <ListOfFundsMain
          dataBase={dataBase}
          onClickItem={(e, sedolNumber)=> this.handleToggle(e, sedolNumber)}
        />}
        {this.state.detailsVisible && 
        <FundDetailsMain 
          dataBase={dataBase}
          sedolNumber={this.state.sedolNumber}
        />
        }
      </div>
    );
  }
}

export default App;
