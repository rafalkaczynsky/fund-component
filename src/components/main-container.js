import React from 'react'

import {FundsTableHeader, FundItem, FundsTable} from './table'
import {CategoryBox} from './'
import '../App.css';

export default class MainContainer extends React.Component {
  constructor(props){
    super(props)

  }

  render(){

    const {dataBase} = this.props 
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
            />
          )}
        </div>
    )
  }
}