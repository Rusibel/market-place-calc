import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import TableRow from "../table-row/table-row";

import './manager-settings.scss';


export default function ManagerSettings ({filterState}) {

    const state = useSelector(state => state, shallowEqual);
   
    const headerFilteredState = filterState(state, "profitHeader", "profitValHeader",  "limitSumHeader", "minClearProfitHeader", "packRentPackerTotalHeader", "numberOfShipmentsHeader", 'packRentPacker1pcHeader') 
    const firstRowFilteredState = filterState(state, "minProfitHeader", "minProfit", "limitSum", "minClearProfitNull", "packRentPackerTotal", "numberOfShipments", "packRentPacker1pc")
    const secondRowFilteredState = filterState(state, "maxProfitHeader", "maxProfit", "minClearProfit")
    const thirdFilteredState = filterState(state, 'packRentPacker1pcHeader', "returns", "reject", "dkYmR", "ptR", 'adv', "magistral")
    const foursFilteredState = filterState(state, 'packRentPacker1pcHeader', "returns", "reject", "dkYm", "pt", 'adv', "magistral")

    const inputs = ["minProfit", 'maxProfit', "limitSum", "minClearProfit", "packRentPackerTotal", "numberOfShipments"];
    const select = ["returns", "reject", "dkYm", "pt", "adv", "magistral"];

    const header = <TableRow classNames="" data={headerFilteredState.managerSettings}  prefix='managerSettings' filterState={filterState} inputs={[]}/>
    const firstRow= <TableRow classNames="" data={firstRowFilteredState.managerSettings}  prefix='managerSettings' filterState={filterState} inputs={inputs} select={[]}/>
    const secondRow = <TableRow classNames="" data={secondRowFilteredState.managerSettings}  prefix='managerSettings' filterState={filterState} inputs={inputs} select={[]}/>
    const thirdRow = <TableRow classNames="" data={thirdFilteredState.header}  prefix='header' filterState={filterState} inputs={inputs} select={[]}/>
    const foursRow = <TableRow classNames="" data={foursFilteredState.headerVal}  prefix='headerVal' filterState={filterState} inputs={inputs} select={select}/>


    return (
        <div className='manager__settings'>
            <h1>Управленческие настройки</h1><br></br>
            <table >
                <thead className="table__header">
                    {header}        
                </thead>
                <tbody>
                    {firstRow}
                    {secondRow}         
                </tbody>           
            
            </table>
            <table className="manager__settings__table__selects">
                 <thead className="table__header">
                    {thirdRow}      
                </thead>
                <tbody>
                    {foursRow}              
                </tbody>           
               
            </table>
        </div>
    )
}