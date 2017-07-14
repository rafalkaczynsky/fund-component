import React from 'react'

import {FundDocuments, FundOverView} from '../'

export default class FundDetailsContent extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            overViewShow: true,
            literatureShow: false,
        }
    }

    handleOverview(e){
        e.preventDefault();
        this.setState({overViewShow: true, literatureShow: false})
    }

    handleLiterature(e){
        e.preventDefault();
        this.setState({overViewShow: false, literatureShow: true})
    }


    render(){
        const {fundItem, dataBase, fundName} = this.props
        const overViewShow = this.state.overViewShow
        const literatureShow = this.state.literatureShow

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
                    <li className={overViewShow ? 'active' : null} >
                        <a onClick={(e)=> this.handleOverview(e)}>
                            Overview
                        </a>
                    </li>
                    <li className={literatureShow ? 'active' : null}>
                        <a onClick={(e)=> this.handleLiterature(e)}>
                            Literature
                        </a>
                    </li>
                </ul>
            </div>
            {overViewShow && <FundOverView description={fundItem.description}/>}
            {literatureShow && <FundDocuments fundItem={fundItem} fundName={fundName} dataBase={dataBase}/>}
        </div>        
        )
    }

}