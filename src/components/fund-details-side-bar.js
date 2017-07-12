import React from 'react'

export default class SideBar extends React.Component {
    render(){
        const {fundItem} = this.props

        return(
                <div className="sideBar">
                    <h4 className="fundOfferLabel" >
                        Fund Offer/Nav
                    </h4>
                    <p className="fundOfferValue">
                        {fundItem.price}
                    </p>
                    <span>
                        <h4 className="fundYieldLabel">
                            Fund Yield
                        </h4>
                        <p className="fundYieldValue">
                            {fundItem.yield}
                        </p>
                    </span>
                    <p className="valuationPoint"> 
                        Valuation Point:
                    </p>
                    <p className="valuationPoint">
                        12:00 11/07/2017 
                    </p>
                    <h4 className="keyFactsLabel">
                        Key Facts
                    </h4>
                    <p className="keyFactsItem">
                        SEDOL: {fundItem.sedolNumber}
                    </p>
                    <p className="keyFactsItem">
                        ISIN: {fundItem.ISIN}
                    </p>
                    <p className="keyFactsItem">
                        Launch Date: {fundItem.launchDate} 
                    </p>
                    <p className="keyFactsItem">
                        Objective: {fundItem.objective}
                    </p>
                    <p className="keyFactsItem">
                        IA Sector:  {fundItem.iaSector}
                    </p>
                    <p className="keyFactsItem">
                        Morningstar Sector:  {fundItem.MorningstarSector}
                    </p>
                    <p className="keyFactsItem">
                        ISA Qualifying: Yes 
                    </p>
                </div>
        )
    }
}