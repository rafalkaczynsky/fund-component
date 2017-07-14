import React from 'react'

export default class FundItem extends React.Component {


  render(){
    const {item, onClickItem, fundName} = this.props;

    const _fundName = fundName



    console.log(item)
    console.log(fundName)
    
    return(
        <tr className="fundItemContainer">
          <td >
            <a onClick={(e, sedolNumber, fundName)=> onClickItem(e, item, _fundName)} >
              {item.name}
            </a>
          </td>
          <td>
            <a>
              {item.sedolNumber}
            </a>
          </td>
          <td>
            <a>
              {item.price}
            </a>
          </td>
          <td>
            <a>
              {item.bid}
            </a>
          </td>
          <td>
            <a>
              {item.canc}
            </a>
          </td>
          <td>
            <a>
              {item.yield}
            </a>
          </td>
          <td>
            <a>
              10/07/2017 - 12:00 
            </a>
          </td>
          <td>
            <a>
              Click Here
            </a>
          </td>
        </tr>     
    )
  }
}