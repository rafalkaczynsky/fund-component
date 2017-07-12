import React from 'react'

export default class Path extends React.Component {

    render(){
        const {indx, currentPosition} = this.props

        return(
            <p className="path">
                <span>
                    <a>
                        {indx[0]}
                    </a>
                </span>
                <span>
                <span> 
                    &gt; 
                </span>
                <a>
                    {indx[1]}
                </a>
                </span>
                <span>
                    <span> 
                        &gt; 
                    </span>
                    <a>
                        {indx[2]}
                    </a>
                </span>
                <span>
                    <span> 
                        &gt; 
                    </span>
                    <a>
                        {currentPosition}
                    </a>
                </span>
            </p>
        )
    }
} 