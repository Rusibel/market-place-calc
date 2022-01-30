import React from 'react';
import {useSelector, shallowEqual} from 'react-redux';
import TableRow from "../table-row/table-row";
import InputBlock from '../input-block/input-block';
import './manager-settings.scss';


export default function ManagerSettings ({filterState}) {

    const state = useSelector(state => state, shallowEqual);
    // console.log(filterState)
    const {managerSettings: {
        minProfit, maxProfit, limitSum, minClearProfit, packRentPackerTotal, numberOfShipments, packRentPacker1pc}} = state;

    const headerFilteredState = filterState(state, "profitHeader", "profitValHeader",  "limitSumHeader", "minClearProfitHeader", "packRentPackerTotalHeader", "numberOfShipmentsHeader", 'packRentPacker1pcHeader')
    const firstRowFilteredState = filterState(state, "minProfitHeader", "minProfit", "limitSum", "minClearProfitNull", "packRentPackerTotal", "numberOfShipments", "packRentPacker1pc")
    const secondRowFilteredState = filterState(state, "maxProfitHeader", "maxProfit", "minClearProfit")
    // const thirdRowFilteredState = filterState(state, "output", "marketplaceCommission", "dep")

    const inputs = ["minProfit", 'maxProfit', "limitSum", "minClearProfit", "packRentPackerTotal", "numberOfShipments"];
    // const select = ["marketplaceCommission"];

    const header = <TableRow classNames="" data={headerFilteredState.managerSettings}  prefix='managerSettings' filterState={filterState} inputs={[]}/>
    const firstRow= <TableRow classNames="" data={firstRowFilteredState.managerSettings}  prefix='managerSettings' filterState={filterState} inputs={inputs} select={[]}/>
    const secondRow = <TableRow classNames="" data={secondRowFilteredState.managerSettings}  prefix='managerSettings' filterState={filterState} inputs={inputs} select={[]}/>
    // const yMarket = <TableRow classNames="" data={thirdRowFilteredState.yMarketCalc}  prefix='yMarketCalc' filterState={filterState} inputs={inputs} select={select}  />
    return (
        <div className='manager-settings'>
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
            {/* <form 
                className ="">
                <div className='min_profit'>
                    <InputBlock 
                        label={'Eсли товар дешевле пороговой суммы, хочу зарабатывать дополнительно, рублей, на вложенный 1 рубль'}
                        classNames=''
                        id={'managerSettings_minProfit'}
                        value={minProfit}
                        prefix={"managerSettings"}
                        param={"minProfit"}/>  
          
                </div>
                <div className='max_profit'>
                    <InputBlock 
                        label='Eсли товар дороже пороговой суммы, хочу зарабатывать дополнительно, рублей, на вложенный 1 рубль'
                        classNames=''
                        id='managerSettings_maxProfit'
                        value={maxProfit}
                        prefix='managerSettings'
                        param='maxProfit' />                   
                </div>
                <div className='limit_sum'>
                    <InputBlock 
                        label='Пороговая сумма, руб'
                        classNames=''
                        id='managerSettings_limitSum'
                        value={limitSum}
                        prefix='managerSettings'
                        param='limitSum' />                 
                </div>
    
                <div className='min_clear_profit'>
                    <InputBlock 
                        label='с минимальной чистой прибылью, руб'
                        classNames=''
                        id='minClearProfit'
                        value={minClearProfit}
                        prefix='managerSettings'
                        param='minClearProfit' /> 
                </div>
               */}
            {/* </form> */}
        </div>

    )
}