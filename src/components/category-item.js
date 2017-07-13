import React from 'react'

import {FundsTable} from './table'

import {SmScreenFundSet} from './sm-screen'

export default class CategoryItem extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      tableToggle: false,
      showTable: false,
      width:  window.innerWidth,
    }

  }
  /**
   * Calculate & Update state of new dimensions
   */

  updateDimensions() {
    if(window.innerWidth > 1100) {
      this.setState({showTable: true})
    } else {
      this.setState({showTable: false})
    }
  }

  /**
   * Add event listener
   */

  componentDidMount() {
    this.updateDimensions()
    window.addEventListener("resize", this.updateDimensions.bind(this))
  }

  /**
   * Remove event listener
   */

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this))
  }

  handleToggle(e){
    e.preventDefault();
    this.setState({tableToggle: !this.state.tableToggle})
  }

  render() {
    const {item, onClickItem} = this.props;

    let tableToggle =this.state.tableToggle
    let showTable = this.state.showTable

    let funds = item.funds
    let fundsObject = Object.values(funds)  // convert {} to []

    let arrowUp ="http://www.marlboroughfunds.com/images/arrowup.png"
    let arrowDown = "http://www.marlboroughfunds.com/images/arrowdown.png"

    let arrow =  tableToggle ? arrowUp : arrowDown 

    console.log(item.name)
    
    return (
      <div className="ItemContainer" >
        <a  
            href="/funds/Marlborough Fund Managers?open=MarlboroughMultiCapIncome" 
            className="ItemAnchor" 
            onClick={(e)=> this.handleToggle(e)}
        >
          <h2 className="ItemHeader">
            {item.name}
          </h2>
          <span className="ItemArrowContainer">
            <img className="ItemArrowImage" alt="arrow" src={arrow} />
          </span>
        </a>

        {tableToggle && showTable && <FundsTable funds={fundsObject} onClickItem={onClickItem} fundName={item.name}/>}
        {tableToggle && !showTable && <SmScreenFundSet  funds={fundsObject} />}
                  
      </div>
      )
    }
  }