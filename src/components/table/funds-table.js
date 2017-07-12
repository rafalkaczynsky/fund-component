import React from 'react'

import {FundsTableHeader, FundItem} from './'

export default class FundsTable extends React.Component {

  render(){
    const {funds} = this.props
    return(
        <table className="fundsTable" cellSpacing="0" cellPadding="0" >
            <thead>
              <FundsTableHeader />
            </thead>
            <tbody>
            {funds.map((item, index)=> 
              <FundItem 
                key={index}
                item={item}
              />
              )
            }
            </tbody>
        </table>      
    )
  }
}