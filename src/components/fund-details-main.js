import React from 'react'

import '../styles/fund-details.css'

export default class FundDetailsMain extends React.Component {
    render(){
        return(
            <div className="detailsContainer">
                <p className="path">
                    <span>
                        <a href="/">
                            Home
                        </a>
                    </span>
                    <span>
                        <span> 
                            &gt; 
                        </span>
                        <a href="/page/funds">
                            Funds
                        </a>
                    </span>
                    <span>
                        <span> 
                            &gt; 
                        </span>
                        <a href="/funds/Marlborough Fund Managers">
                            Marlborough Fund Managers
                        </a>
                    </span>
                    <span>
                        <span> 
                            &gt; 
                        </span>
                        <a href="/funds/Marlborough Fund Managers/B42TBF4">
                            Marlborough Multi Cap Income A Inc
                        </a>
                    </span>
                </p>
                <div className="mainContent">
                    <div className="detailsHeaderGroup">
                        <h3>
                            Marlborough Fund Managers
                        </h3>
                        <h2>
                            Marlborough Multi Cap Income A Inc
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
                        <p className="fundDescription">
                            <ul>
                                <li><strong>Identifies strongest equity income opportunities across market cap spectrum</strong></li>
                                <li><strong>Selects from around 700 dividend-paying stocks</strong></li>
                                <li><strong>Bias to small and mid-cap stocks</strong></li>
                                <li><strong>Important diversification benefits, compared to peers focused on FTSE 100</strong></li>
                                <li><strong>Highly diversified portfolio of around 130 stocks to manage risk</strong></li>
                            </ul>
                            <p>
                                The <strong>Marlborough Multi Cap Income Fund</strong> is a UK equity income fund that takes a different approach. Instead of focusing on the same limited number of FTSE 100 giants that dominate so many equity income portfolios, manager Siddarth Chand Lall identifies the strongest opportunities across the market cap spectrum.
                            </p>
                            <p>
                                While he does hold FTSE 100 stocks, he has a bias to faster-growing small and mid-cap dividend-paying companies in the FTSE 250, AIM, FTSE SmallCap and FTSE Fledgling indices. This increases the number of opportunities from around 90 stocks to approximately 700.
                            </p>
                            <p>
                                <strong>Benefits of multi-cap strategy</strong>
                            </p>
                            <p>
                                As well as benefiting from the superior long-term growth potential of smaller companies, this multi-cap strategy allows the construction of a portfolio far more broadly diversified by industry sector and market capitalisation than is possible for a fund focused primarily on the main divided-paying companies in the FTSE 100.&nbsp;
                            </p>
                            <p>
                                <strong>Growing dividends</strong>
                            </p>
                            <p>
                                The manager looks for companies with strong cashflow and little or no debt that are able reinvest in the growth of their business and simultaneously pay an attractive and increasing dividend. This dividend growth is an important consideration for investors looking to protect or increase their income in real terms.
                            </p>
                            <p>
                                To manage stock-specific risk, diversification is key. The portfolio is spread across around 130 holdings, with even the largest position only representing 2%-2.5% of the fund.&nbsp;
                            </p>
                            <p>
                                The manager works with the support of a large and experienced team. They place a high value on the quality of management of the companies they are considering for investment. Wherever possible they will meet the management face to face before investing and once they have taken a position, they will meet them at least twice a year to follow up on results.
                            </p>
                            <p>
                                <strong>Risk Warning:&nbsp;</strong>The value of investments and the income from them may fall as well as rise and you may not get back the amount you originally invested. The Fund invests in smaller companies which carry a higher degree of risk than larger companies. The shares of smaller companies may be less liquid and their performance more volatile over shorter time periods. The Fund invests mainly in the UK. Therefore it may be more vulnerable to market sentiment in that country. To ensure that the principal objective of providing an above average and subsequently increasing level of income can be met, the annual Manager's charge is deducted from capital rather than income. Future capital growth may be constrained as a result.
                            </p>
                        </p>
                    </div>
                </div>
                <div className="sideBar">
                    <h4 className="fundOfferLabel" >
                        Fund Offer/Nav
                    </h4>
                    <p className="fundOfferValue">
                        156.34
                    </p>
                    <span>
                        <h4 className="fundYieldLabel">
                            Fund Yield
                        </h4>
                        <p className="fundYieldValue">
                            4.26%
                        </p>
                    </span>
                    <p className="valuationPoint">
                        Valuation Point:
                    </p>
                    <p className="valuationPoint">
                        12:00 11/07/2017 
                    </p>
                    <h4 className="keyFactsLabel">
                        Key Facts
                    </h4>
                    <p className="keyFactsItem">
                        SEDOL:  B42TBF4 
                    </p>
                    <p className="keyFactsItem">
                        ISIN:   GB00B42TBF45    
                    </p>
                    <p className="keyFactsItem">
                        Launch Date:    01/07/2011 
                    </p>
                    <p className="keyFactsItem">
                        Objective: Growth and Income 
                    </p>
                    <p className="keyFactsItem">
                        IA Sector:  UK Equity Income
                    </p>
                    <p className="keyFactsItem">
                        Morningstar Sector:  Mstar (IA) UK Equity Income  
                    </p>
                    <p className="keyFactsItem">
                        ISA Qualifying: Yes 
                    </p>
                </div>
            </div>
        </div>
        )
    }
}