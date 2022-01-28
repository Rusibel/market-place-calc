import React from "react";
import Row from "../row/row";
import TableRow from "../table-row/table-row";
import {useSelector, shallowEqual} from 'react-redux';
import './product-criteria.scss'



function ProductCriteria ({filterState}) {
    const state = useSelector(state => state, shallowEqual)

    const headerFilteredState = filterState(state, "output", "buy1pc", "cell1pc", "marketplaceCommission", "weight", "heightWidthLength")
    const firstRowFilteredState = filterState(state, "output", "buy1pc", "cell1pc", "marketplaceCommission", "dep", "weight", "heightWidthLength")
    const secondRowFilteredState = filterState(state, "output", "marketplaceCommission", "dep", "heightWidthLength")
    const thirdRowFilteredState = filterState(state, "output", "marketplaceCommission", "dep")

    const inputs = ["buy1pc", "cell1pc", "marketplaceCommission", "weight", "heightWidthLength"];

    const header = <TableRow classNames="table__header" data={headerFilteredState.header}  prefix='header' filterState={filterState} inputs={[]}/>
    const ozone = <TableRow classNames="" data={firstRowFilteredState.ozoneCalc}  prefix='ozoneCalc' filterState={filterState} inputs={inputs}/>
    const wb = <TableRow classNames="" data={secondRowFilteredState.wbCalc}  prefix='wbCalc' filterState={filterState} inputs={inputs}/>
    const yMarket = <TableRow classNames="" data={thirdRowFilteredState.yMarketCalc}  prefix='yMarketCalc' filterState={filterState} inputs={inputs}/>
    console.log(state);
    return (
//        
        <div className="table__form__product-criteria">
            <h1>Критерии товара</h1>
            <table >
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


export default ProductCriteria;