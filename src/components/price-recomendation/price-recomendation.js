import React from "react";
import { useSelector, shallowEqual } from 'react-redux';
import TableRow from "../table-row/table-row";
import './price-recomendation.scss'

function PriceRecomendation ({filterState}) {
    
    const state = useSelector(state => state, shallowEqual)

    const filteredState = filterState(state, "CP", "ROI", "buyMax", "cellMin", "cellZero", "rejectPrice", "fixCommission", "delivery", "federal", "acceptance", 
    "magistral", "lastMile", "dkYm", "pt", 'adv', "deliveryComission", "processing", "commissionTotal", "tax", "tax1per", "costsWithoutPurchase")
    
    const header = <TableRow classNames="table__header" data={filteredState.header}  prefix='header' filterState={filterState} inputs={[]}/>
    const ozone = <TableRow classNames="" data={filteredState.ozoneCalc}  prefix='ozoneCalc' filterState={filterState} inputs={[]}/>
    const wb = <TableRow classNames="" data={filteredState.wbCalc}  prefix='wbCalc' filterState={filterState} inputs={[]}/>
    const yMarket = <TableRow classNames="" data={filteredState.yMarketCalc}  prefix='yMarketCalc' filterState={filterState} inputs={[]}/>

    return (
        <div className="table__calc__result">
            <h1>Результаты расчетов</h1>
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