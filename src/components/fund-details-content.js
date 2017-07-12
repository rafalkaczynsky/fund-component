import React from 'react'

export default class FundDetailsContent extends React.Component {

    render(){
        const {fundItem} = this.props

        return(
            <div className="detailsHeaderGroup">
                <h3>
                    Marlborough Fund Managers
                </h3>
                <h2>
                    {fundItem.name}
                </h2>
                <div>
                <ul>
                    <li>
                        <a href="/funds/Marlborough Fund Managers/MarlboroughMultiCapIncome/B42TBF4/" >
                            Overview
                        </a>
                    </li>
                    <li>
                        <a href="/funds/Marlborough Fund Managers/MarlboroughMultiCapIncome/B42TBF4/documents">
                            Literature
                        </a>
                    </li>
                    <li>
                        <a href="/funds/Marlborough Fund Managers/MarlboroughMultiCapIncome/B42TBF4/managers">
                            Managers
                        </a>
                    </li>
                </ul>
            </div>
            <div className="detailsContent">
                <h4>
                    Fund Overview
                </h4>
                <p className="fundDescription" dangerouslySetInnerHTML={{__html: fundItem.description}}>
                </p>
            </div>
        </div>        
        )
    }

}