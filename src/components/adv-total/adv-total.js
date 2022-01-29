import React from "react";
import {useSelector, shallowEqual} from 'react-redux';
import TableRow from "../table-row/table-row";
import Row from "../row/row";
import {connect} from 'react-redux';
import './adv-total.scss'

function AdvTotal ({filterState}) {
    const state = useSelector(state => state, shallowEqual)

    const filteredState = filterState(state, "output", "deliveryComission", "processing", "commissionTotal", "tax", "costsWithoutPurchase", "profit")
    // const inputs = ["adv", "tax"];

    const header = <TableRow classNames="table__header" data={filteredState.header}  prefix='header' filterState={filterState} inputs={[]}/>
    const headerVal = <TableRow classNames="table__header" data={filteredState.headerVal}  prefix='headerVal' filterState={filterState} inputs={[]}/>
    const ozone = <TableRow classNames="" data={filteredState.ozoneCalc}  prefix='ozoneCalc' filterState={filterState} inputs={[]}/>
    const wb = <TableRow classNames="" data={filteredState.wbCalc}  prefix='wbCalc' filterState={filterState} inputs={[]}/>
    const yMarket = <TableRow classNames="" data={filteredState.yMarketCalc}  prefix='yMarketCalc' filterState={filterState} inputs={[]}/>

    return (
        <div className="table__form__total">
            <h1>Итого</h1>
            <table>
                <thead className="table__header">
                    {header}
                    {/* {headerVal} */}
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

const mapStateToProps = (state) => {
    return  {state}
    
};

export default connect(mapStateToProps)(AdvTotal);