import React from 'react'

import {SmScreenFundItem} from './'

export default class SmScreenFundSet extends React.Component {

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