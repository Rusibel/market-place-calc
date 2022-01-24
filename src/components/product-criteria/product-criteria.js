import React from "react";
import Row from "../row/row";
import {useSelector, shallowEqual} from 'react-redux';
import './product-criteria.scss'



function ProductCriteria ({filterState}) {
    const state = useSelector(state => state, shallowEqual)

    const filteredState = filterState(state, "output", "buy1pc", "cell1pc", "marketplaceCommission", "dep", "weight", "heightWidthLength")
    const inputs = ["buy1pc", "cell1pc", "marketplaceCommission", "weight", "heightWidthLength"];

    const header = <Row classNames="table__header" data={filteredState.header}  prefix='header' filterState={filterState} inputs={[]}/>
    const ozone = <Row classNames="" data={filteredState.ozoneCalc}  prefix='ozoneCalc' filterState={filterState} inputs={inputs}/>
    const wb = <Row classNames="" data={filteredState.wbCalc}  prefix='wbCalc' filterState={filterState} inputs={inputs}/>
    const yMarket = <Row classNames="" data={filteredState.yMarketCalc}  prefix='yMarketCalc' filterState={filterState} inputs={inputs}/>
    console.log(state);
    return (
        <>
            <h1>Критерии товара</h1>
            <form className="table__form__product-criteria">
                {header}
                {ozone}
                {wb}
                {yMarket}
            </form>
        </>
    )
}


export default ProductCriteria;