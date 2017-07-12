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
                        <a >
                            Overview
                        </a>
                    </li>
                    <li>
                        <a>
                            Literature
                        </a>
                    </li>
                    <li>
                        <a>
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