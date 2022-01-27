import React from "react";
import Row from "../row/row";
import {useSelector, shallowEqual} from 'react-redux';
import './returns-defective.scss'

function ReturnsDefective ({filterState}) {
    const state = useSelector(state => state, shallowEqual)

    const filteredState = filterState(state, "output", "PackRentPacker", "returns", "reject", "rejectPrice")
    const inputs = ["PackRentPacker", "return", "reject"];

    const header = <Row classNames="table__header" data={filteredState.header}  prefix='header' filterState={filterState} inputs={[]}/>
    const headerVal = <Row classNames="" data={filteredState.headerVal}  prefix='headerVal' filterState={filterState} inputs={inputs}/>
    const ozone = <Row classNames="" data={filteredState.ozoneCalc}  prefix='ozoneCalc' filterState={filterState} inputs={[]}/>
    const wb = <Row classNames="" data={filteredState.wbCalc}  prefix='wbCalc' filterState={filterState} inputs={[]}/>
    const yMarket = <Row classNames="" data={filteredState.yMarketCalc}  prefix='yMarketCalc' filterState={filterState} inputs={[]}/>

    return (
        <>
            <h1>Возвраты и брак</h1>
            <form className="table__form__returns">
                {header}
                {headerVal}
                {ozone}
                {wb}
                {yMarket}
            </form>
        </>
    )
}



export default ReturnsDefective;