import React from 'react';

export default class FundsTableHeader extends React.Component {

  render(){
    return(
      <tr>
        <th className="tableHeader">
          Name
        </th>
        <th className="tableHeader">
          Sedol
        </th>
        <th className="tableHeader">
          Offer/Nav
        </th>
        <th className="tableHeader">
          Bid
        </th>
        <th className="tableHeader">
          Canc
        </th>
        <th className="tableHeader">
          Yield
        </th>
        <th className="tableHeader">
          Valuation Point/Date
        </th>
        <th className="tableHeader">
          More Info
        </th>
      </tr>      
    )
  }
}