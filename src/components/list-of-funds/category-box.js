import React from 'react'

import {CategoryItem} from '../'

var jp = require('jsonpath');

export default class CategoryBox extends React.Component {

  render() {
    const {CategoryName, dataBase, onClickItem} = this.props;
    const ArrayOfItems = jp.query(dataBase, '$..fundRanges[?(@.category== "' + CategoryName + '" )]');

    return (
        <div className="CategoryContainer">
          <h2 className="CategoryHeader" >
            {CategoryName}
          </h2>
          {ArrayOfItems.map((item, index)=>
            <CategoryItem 
              key={index}
              item={item}
              onClickItem={onClickItem}
            />
            )
          }
        </div>      
    )
  }
}