import React from "react";
import Row from "../row/row";
import {connect} from 'react-redux';
import './marketplace-comission.scss'

function MarketplaceComission ({state, filterState}) {


    const filteredState = filterState(state, "output", "fixCommission", "delivery", "federal", "acceptance", "magistral", "lastMile", "dkYm", "pt")
    const inputs = ["magistral", "dkYm", "pt"];

    const header = <Row classNames="table__header" data={filteredState.header}  prefix='header' filterState={filterState} inputs={[]}/>
    const headerVal = <Row classNames="" data={filteredState.headerVal}  prefix='headerVal' filterState={filterState} inputs={inputs}/>
    const ozone = <Row classNames="" data={filteredState.ozoneCalc}  prefix='ozoneCalc' filterState={filterState} inputs={[]}/>
    const wb = <Row classNames="" data={filteredState.wbCalc}  prefix='wbCalc' filterState={filterState} inputs={[]}/>
    const yMarket = <Row classNames="" data={filteredState.yMarketCalc}  prefix='yMarketCalc' filterState={filterState} inputs={[]}/>

    return (
        <>
            <h1>Комиссии маркетплейсов</h1>
            <form className="table__form__comission">
                {header}
                {headerVal}
                {ozone}
                {wb}
                {yMarket}
            </form>
        </>
    )
}

const mapStateToProps = (state) => {
    return  {state}
    
};

export default connect(mapStateToProps)(MarketplaceComission);