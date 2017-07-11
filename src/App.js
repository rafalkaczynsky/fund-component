import React, { Component } from 'react';

import {MainContainer} from './components';

var dataBase = require('./data/data.json'); 

class App extends Component {

  render() {

    return (
      <div className="App">
        <MainContainer 
          dataBase={dataBase}
        />
      </div>
    );
  }
}

export default App;
