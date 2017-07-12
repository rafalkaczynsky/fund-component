import React from 'react'

import {CategoryBox} from './'

import '../styles/App.css';

export default class ListOfFundsMain extends React.Component {

  render(){

    const {dataBase, onClickItem} = this.props 
    var jp = require('jsonpath');

    const categoriesSearch = jp.query(dataBase, '$..category')
    const arrayOfCategories = [...new Set(categoriesSearch)]

    return(
        <div className="Container">
          <a className="ShowAllAnchor">
              Expand All  
          </a>
          <span></span>
          {arrayOfCategories.map((category, index) => 
            <CategoryBox 
              key={index}
              CategoryName={category}
              dataBase={dataBase}
              onClickItem={onClickItem}
            />
          )}
        </div>
    )
  }
}