import React from 'react'

export default class DocumentListItem extends React.Component {
    render(){
        const  {path , title} = this.props
        return(
            <a className="documentListItem" href={path} target="_blank" >
                {title}
            </a>
        )
    }
}