import React from 'react'

export default class FundItem extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    const {item} = this.props;

    return(
        <tr className="fundItemContainer">
          <td>
            <a href="/funds/Marlborough Fund Managers/MarlboroughMultiCapIncome/B5L8VH1">
              {item.name}
            </a>
          </td>
          <td>
            <a href="/funds/Marlborough Fund Managers/MarlboroughMultiCapIncome/B5L8VH1">
              {item.sedolNumber}
            </a>
          </td>
          <td>
            <a href="/funds/Marlborough Fund Managers/MarlboroughMultiCapIncome/B5L8VH1">
              {item.price}
            </a>
          </td>
          <td>
            <a href="/funds/Marlborough Fund Managers/MarlboroughMultiCapIncome/B5L8VH1">
              {item.bid}
            </a>
          </td>
          <td>
            <a href="/funds/Marlborough Fund Managers/MarlboroughMultiCapIncome/B5L8VH1">
              {item.canc}
            </a>
          </td>
          <td>
            <a href="/funds/Marlborough Fund Managers/MarlboroughMultiCapIncome/B5L8VH1">
              {item.yield}
            </a>
          </td>
          <td>
            <a href="/funds/Marlborough Fund Managers/MarlboroughMultiCapIncome/B5L8VH1">
              10/07/2017 - 12:00 
            </a>
          </td>
          <td>
            <a href="/funds/Marlborough Fund Managers/MarlboroughMultiCapIncome/B5L8VH1">
              Click Here
            </a>
          </td>
        </tr>     
    )
  }
}