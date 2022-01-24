import React from "react";
import Row from "../row/row";
import {connect} from 'react-redux';
import './adv-total.scss'

function AdvTotal ({state, filterState}) {


    const filteredState = filterState(state, "output", "adv", "deliveryComission", "processing", "commissionTotal", "tax", "costsWithoutPurchase", "profit")
    const inputs = ["adv", "tax"];

    const header = <Row classNames="table__header" data={filteredState.header}  prefix='header' filterState={filterState} inputs={[]}/>
    const headerVal = <Row classNames="" data={filteredState.headerVal}  prefix='headerVal' filterState={filterState} inputs={inputs}/>
    const ozone = <Row classNames="" data={filteredState.ozoneCalc}  prefix='ozoneCalc' filterState={filterState} inputs={[]}/>
    const wb = <Row classNames="" data={filteredState.wbCalc}  prefix='wbCalc' filterState={filterState} inputs={[]}/>
    const yMarket = <Row classNames="" data={filteredState.yMarketCalc}  prefix='yMarketCalc' filterState={filterState} inputs={[]}/>

    return (
        <>
            <h1>Итого</h1>
            <form className="table__form__total">
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

export default connect(mapStateToProps)(AdvTotal);