import React from 'react'

export default class FundOverView extends React.Component {
    render(){
        const {description} = this.props

        return(
            <div className="detailsContent">
                <h4>
                    Fund Overview
                </h4>
                <p className="fundDescription" dangerouslySetInnerHTML={{__html: description}}>
                </p>
            </div>
        )
    }
}