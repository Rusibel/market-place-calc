import React from "react";
import Row from "../row/row";
import TableRow from "../table-row/table-row";
import {useSelector, shallowEqual} from 'react-redux';
import './returns-defective.scss'

function ReturnsDefective ({filterState}) {
    const state = useSelector(state => state, shallowEqual)

    const filteredState = filterState(state, "output", "PackRentPacker", "returns", "reject", "rejectPrice")
    const inputs = ["PackRentPacker", "returns", "reject"];

    const header = <TableRow classNames="table__header" data={filteredState.header}  prefix='header' filterState={filterState} inputs={[]}/>
    const headerVal = <TableRow classNames="table__header" data={filteredState.headerVal}  prefix='headerVal' filterState={filterState} inputs={inputs}/>
    const ozone = <TableRow classNames="" data={filteredState.ozoneCalc}  prefix='ozoneCalc' filterState={filterState} inputs={[]}/>
    const wb = <TableRow classNames="" data={filteredState.wbCalc}  prefix='wbCalc' filterState={filterState} inputs={[]}/>
    const yMarket = <TableRow classNames="" data={filteredState.yMarketCalc}  prefix='yMarketCalc' filterState={filterState} inputs={[]}/>

    return (
        <div className="table__form__returns">
            <h1>Возвраты и брак</h1>
            <table >
                <thead className="table__header">
                    {header}
                    {headerVal}
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



export default ReturnsDefective;