import React from 'react'

import {SmScreenFundItem} from './'

export default class SmScreenFundSet extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        const {funds} = this.props
        
        return(
            <div>
                {funds.map((item, index)=> 
                    <SmScreenFundItem
                        key={index}
                        item={item}
                    />
              )}
            </div>
        )
    }
}