import React from 'react'

export default class Path extends React.Component {

    render(){
        const {indx, currentPosition} = this.props

        return(
            <p className="path">
                <span>
                    <a href="/">
                        {indx[0]}
                    </a>
                </span>
                <span>
                <span> 
                    &gt; 
                </span>
                <a href="/page/funds">
                    {indx[1]}
                </a>
                </span>
                <span>
                    <span> 
                        &gt; 
                    </span>
                    <a href="/funds/Marlborough Fund Managers">
                        {indx[2]}
                    </a>
                </span>
                <span>
                    <span> 
                        &gt; 
                    </span>
                    <a href="/funds/Marlborough Fund Managers/B42TBF4">
                        {currentPosition}
                    </a>
                </span>
            </p>
        )
    }
} 