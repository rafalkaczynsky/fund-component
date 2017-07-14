import React from 'react'

export default class SmScreenFundItem extends React.Component {

    render(){
        const {item} = this.props

        return(       
            <div className="SSFIcontainer">
                <div className="SSFIheader">
                    <a href="/funds/Marlborough Fund Managers/MarlboroughHighYieldFixedInterest/B03TN15">
                        {item.name}
                    </a>
                </div>
                <div className="SSFIitem">
                    <span>
                        Offer/Nav: 
                    </span>
                    <span>
                        {' ' + item.price}
                    </span>
                </div>
                <div className="SSFIitem">
                    <span>
                        Bid: 
                    </span>
                    <span>
                        {' ' + item.bid}
                    </span>
                </div>
                <div className="SSFIitem">
                    <span>
                        Canc: 
                    </span>
                    <span>
                        {' ' + item.canc}
                    </span>
                </div>
                <div className="SSFIitem">
                    <span>
                        Yield: 
                    </span>
                    <span>
                        {' ' + item.yield}
                    </span>
                </div>
                <div className="SSFIitem">
                    <span>
                        Sedol: 
                    </span>
                    <span>
                        {' ' + item.sedolNumber}
                    </span>
                </div>
                <div className="SSFIitem">
                    <span>
                        Price Date: 
                    </span>
                    <span>
                        10/07/2017
                    </span>
                </div>
                <div className="SSFIitem">
                    <span>
                        Valuation Point: 
                    </span>
                    <span>
                         12:00
                    </span>
                </div>
                <div className="SSFIitem">
                    <span>
                    </span>
                    <a className="viewAnchor" href="/funds/Marlborough Fund Managers/MarlboroughHighYieldFixedInterest/B03TN15">
                         View
                     </a>
                </div>
            </div> 
        )
    }
}
