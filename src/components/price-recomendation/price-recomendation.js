import React from "react";
import Row from "../row/row";
import {connect} from 'react-redux';
import './price-recomendation.scss'

function PriceRecomendation ({state, filterState}) {


    const filteredState = filterState(state, "output", "CP", "ROI", "buyMax", "cellMin", "cellZero")
    // const inputs = ["buy1pc", "cell1pc", "marketplaceCommission", "weight", "heightWidthLength"];

    const header = <Row classNames="table_header" data={filteredState.header}  prefix='header' filterState={filterState} inputs={[]}/>
    const ozone = <Row classNames="" data={filteredState.ozoneCalc}  prefix='ozoneCalc' filterState={filterState} inputs={[]}/>
    const wb = <Row classNames="" data={filteredState.wbCalc}  prefix='wbCalc' filterState={filterState} inputs={[]}/>
    const yMarket = <Row classNames="" data={filteredState.yMarketCalc}  prefix='yMarketCalc' filterState={filterState} inputs={[]}/>

    return (
        <>
            <form className="table_form_price">
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

export default connect(mapStateToProps)(PriceRecomendation);