import React from "react";
import {useSelector, shallowEqual} from 'react-redux';
import TableRow from "../table-row/table-row";
import {connect} from 'react-redux';
import './price-recomendation.scss'

function PriceRecomendation ({filterState}) {
    
    const state = useSelector(state => state, shallowEqual)

    const filteredState = filterState(state, "output", "CP", "ROI", "buyMax", "cellMin", "cellZero")
    // const inputs = ["buy1pc", "cell1pc", "marketplaceCommission", "weight", "heightWidthLength"];
    
    const header = <TableRow classNames="table__header" data={filteredState.header}  prefix='header' filterState={filterState} inputs={[]}/>
    const ozone = <TableRow classNames="" data={filteredState.ozoneCalc}  prefix='ozoneCalc' filterState={filterState} inputs={[]}/>
    const wb = <TableRow classNames="" data={filteredState.wbCalc}  prefix='wbCalc' filterState={filterState} inputs={[]}/>
    const yMarket = <TableRow classNames="" data={filteredState.yMarketCalc}  prefix='yMarketCalc' filterState={filterState} inputs={[]}/>

    return (
        <div className="table__form__price">
            <h1>Рекомендации по цене</h1>
            <table>
                <thead className="table__header">
                    {header}
                </thead>
                <tbody>
                    {ozone}
                    {wb}
                    {yMarket}
                </tbody>                             
            </table>
        </div>

    )
}


export default PriceRecomendation;