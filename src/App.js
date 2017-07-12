import React, { Component } from 'react';

import {ListOfFundsMain, FundDetailsMain} from './components';

var dataBase = require('./data/data.json'); 



class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      listVisible: true,
      detailsVisible: false,
      fundName: null
    }
  }
  handleToggle(e, name){
    e.preventDefault();
    this.setState({listVisible: false, detailsVisible: true, fundName: name})
  }

  handleChangeView(){

    if (this.state.fundName) {
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
          onClickItem={(e, name)=> this.handleToggle(e, name)}
        />}
        {this.state.detailsVisible && 
        <FundDetailsMain 
          dataBase={dataBase}
          fundName={this.state.fundName}
        />
        }
      </div>
    );
  }
}

export default App;
