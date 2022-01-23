import React from "react";
import Row from "../row/row";
import {connect} from 'react-redux';
import './product-criteria.scss'

function ProductCriteria ({state, filterState}) {


    const filteredState = filterState(state, "output", "buy1pc", "cell1pc", "marketplaceCommission", "dep", "weight", "heightWidthLength")
    const inputs = ["buy1pc", "cell1pc", "marketplaceCommission", "weight", "heightWidthLength"];

    const header = <Row classNames="table_header" data={filteredState.header}  prefix='header' filterState={filterState} inputs={[]}/>
    const ozone = <Row classNames="" data={filteredState.ozoneCalc}  prefix='ozoneCalc' filterState={filterState} inputs={inputs}/>
    const wb = <Row classNames="" data={filteredState.wbCalc}  prefix='wbCalc' filterState={filterState} inputs={inputs}/>
    const yMarket = <Row classNames="" data={filteredState.yMarketCalc}  prefix='yMarketCalc' filterState={filterState} inputs={inputs}/>

    return (
        <>
            <form className="table_form">
                {header}
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

export default connect(mapStateToProps)(ProductCriteria);