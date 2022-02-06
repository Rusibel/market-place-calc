import React from "react";
import { useSelector, shallowEqual } from 'react-redux';
import TableRow from "../table-row/table-row";
import './product-criteria.scss'



function ProductCriteria ({filterState}) {
    const state = useSelector(state => state, shallowEqual);
    const headerFilteredState = filterState(state, "buy1pc", "cell1pc", "marketplaceCommission", "weight", "heightWidthLength", "output")
    const firstRowFilteredState = filterState(state, "buy1pc", "cell1pc", "marketplaceCommission", "dep", "weight", "heightWidthLength", "output")
    const secondRowFilteredState = filterState(state, "marketplaceCommission", "dep", "heightWidthLength", "output")
    const thirdRowFilteredState = filterState(state, "marketplaceCommission", "dep", "output")

    const inputs = ["buy1pc", "cell1pc", "marketplaceCommission", "weight"];
    const select = ["marketplaceCommission"];

    const header = <TableRow classNames="table__header" data={headerFilteredState.header}  prefix='header' filterState={filterState} inputs={[]}/>
    const ozone = <TableRow classNames="" data={firstRowFilteredState.ozoneCalc}  prefix='ozoneCalc' filterState={filterState} inputs={inputs} select={select}/>
    const wb = <TableRow classNames="" data={secondRowFilteredState.wbCalc}  prefix='wbCalc' filterState={filterState} inputs={inputs} select={select}/>
    const yMarket = <TableRow classNames="" data={thirdRowFilteredState.yMarketCalc}  prefix='yMarketCalc' filterState={filterState} inputs={inputs} select={select}  />
    // console.log(JSON.stringify(state))
    return (

        <div className="table__product__criteria">
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