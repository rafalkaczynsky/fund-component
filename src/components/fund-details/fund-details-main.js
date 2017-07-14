import React from 'react'

import '../../styles/fund-details.css'
import {Path , FundDetailsContent, SideBar} from '../'

export default class FundDetailsMain extends React.Component {
    render(){

    const {dataBase, fundItem, fundName} = this.props 
    var jp = require('jsonpath');

        return(
            <div className="detailsContainer">
                <Path 
                    indx={["HOME","FUNDS", "MARLBOROUGH FUND MANAGERS"]}
                    currentPosition={fundItem.name}
                />
                <div className="mainContent">
                    <FundDetailsContent 
                        fundItem={fundItem}
                        fundName={fundName}
                        dataBase={dataBase}
                    />
                    <SideBar 
                        fundItem={fundItem}
                    />
            </div>
        </div>
        )
    }
}