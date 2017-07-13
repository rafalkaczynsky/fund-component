import React from 'react'



class OverView extends React.Component {
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

class DocumentListItem extends React.Component {
    render(){
        const  {path , title} = this.props
        return(
            <a className="documentListItem" href={path} target="_blank" >
                {title}
            </a>
        )
    }
}

class FundDocuments extends React.Component {
    render(){

        var jp = require('jsonpath');

        const {fundItem, dataBase, fundName} = this.props


        let KIIDpath, FactSheetPath, supplementaryInformationDocumentPath, ISAApplicationFormPath, OEICApplicationFormPath, JISAApplicationFormPath, APSFormPath, reportsAndAccounts2Path  = ''
        let KIID, FactSheet, supplementaryInformationDocument, ISAApplicationForm, OEICApplicationForm, JISAApplicationForm, APSForm, reportsAndAccounts2  = false

        const universalDocuments = dataBase.marlboroughFunds["Marlborough Fund Managers"].documents[""]
        const documentsOther = dataBase.marlboroughFunds["Marlborough Fund Managers"].documents

        
        if (fundName) {
            if (documentsOther[fundName]) {
                documentsOther[fundName].reportsAndAccounts2 ? reportsAndAccounts2 = true : reportsAndAccounts2 = false
            }
        } 
       
/*
                ====================== L I S T    O F     U N I V E R S A L     D O C U M E N T S ==========================

                "supplementaryInformationDocument":"14982067301559add649d36b6ec211e8662c3ed90fcc4.pdf",
                "ISAApplicationForm":"149146863361708e064e1585657fe130b47b2a5ad08eb.pdf",
                "OEICApplicationForm":"1489234830733929aed72ad124ab977317ff2ac1486aa.pdf",
                "JISAApplicationForm":"14914686336180941f16ec61e776d745ddbeda311c2c7.pdf",
                "APSForm":"1489483835958a9dcda1e36bf4eb426da2c96445d6ccf.pdf"},
*/

        if (fundItem.documents.kiid) {
            KIIDpath = "http://funds.marlboroughfunds.com/uploads/documents/" + fundItem.documents.kiid 
            KIID = true
        }

        if (fundItem.documents.factSheet) {
            FactSheetPath = "http://funds.marlboroughfunds.com/uploads/documents/" + fundItem.documents.factSheet 
            FactSheet = true
        }

        if (universalDocuments.supplementaryInformationDocument) {
            supplementaryInformationDocumentPath = "http://funds.marlboroughfunds.com/uploads/documents/" + universalDocuments.supplementaryInformationDocument
            supplementaryInformationDocument = true
        }

        if (universalDocuments.ISAApplicationForm) {
            ISAApplicationFormPath = "http://funds.marlboroughfunds.com/uploads/documents/" + universalDocuments.ISAApplicationForm
            ISAApplicationForm = true
        }

        if (universalDocuments.OEICApplicationForm) {
            OEICApplicationFormPath = "http://funds.marlboroughfunds.com/uploads/documents/" + universalDocuments.OEICApplicationForm
            OEICApplicationForm = true
        }

        if (universalDocuments.JISAApplicationForm) {
            JISAApplicationFormPath = "http://funds.marlboroughfunds.com/uploads/documents/" + universalDocuments.JISAApplicationForm
            JISAApplicationForm = true
        }

        if (universalDocuments.APSForm) {
            APSFormPath = "http://funds.marlboroughfunds.com/uploads/documents/" + universalDocuments.APSForm
            APSForm = true
        }

        if (reportsAndAccounts2){
            reportsAndAccounts2Path = "http://funds.marlboroughfunds.com/uploads/documents/" + documentsOther[fundName].reportsAndAccounts2
            reportsAndAccounts2 = true
        }

        return(
            <div className="detailsContent">
                <h4>
                    Fund Documents
                </h4>
                <p className="fundDescription">
                  {KIID && <DocumentListItem title="Key Investor Information Document" path={KIIDpath}/>}
                  {FactSheet && <DocumentListItem title="Fact Sheeet" path={FactSheetPath}/>}
                  {reportsAndAccounts2 && <DocumentListItem title="Reports and Accounts" path={reportsAndAccounts2Path}/>}
                  {supplementaryInformationDocument && <DocumentListItem title="Supplementary Information Document" path={supplementaryInformationDocumentPath}/>}
                  {ISAApplicationForm && <DocumentListItem title="ISA Application Form" path={ISAApplicationFormPath}/>}
                  {OEICApplicationForm && <DocumentListItem title="OEIC Application Form" path={OEICApplicationFormPath}/>}
                  {JISAApplicationForm && <DocumentListItem title="JISA Application Form" path={JISAApplicationFormPath}/>}
                  {APSForm && <DocumentListItem title="APS Form" path={APSFormPath}/>}
                
                </p>
            </div>
        )
    }
}

export default class FundDetailsContent extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            overViewShow: true,
            literatureShow: false,
            managersShow: false
        }
    }

    handleOverview(e){
        e.preventDefault();
        this.setState({overViewShow: true, literatureShow: false, managersShow: false})
    }

    handleLiterature(e){
        e.preventDefault();
        this.setState({overViewShow: false, literatureShow: true, managersShow: false})
    }

    handleManagers(e){
        e.preventDefault();
        this.setState({overViewShow: false, literatureShow: false, managersShow: true})
        alert('Managers clicked')
    }

    render(){
        const {fundItem, dataBase, fundName} = this.props
        const overViewShow = this.state.overViewShow
        const literatureShow = this.state.literatureShow
        const managersShow = this.state.managersShow

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
                    <li className={managersShow ? 'active' : null}>
                        <a onClick={(e)=> this.handleManagers(e)}>
                            Managers
                        </a>
                    </li>
                </ul>
            </div>
            {overViewShow && <OverView description={fundItem.description}/>}
            {literatureShow && <FundDocuments fundItem={fundItem} fundName={fundName} dataBase={dataBase}/>}
        </div>        
        )
    }

}