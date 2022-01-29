import React from "react";
import {useSelector, shallowEqual} from 'react-redux';
import TableRow from "../table-row/table-row";
import Row from "../row/row";
import {connect} from 'react-redux';
import './marketplace-comission.scss'

function MarketplaceComission ({filterState}) {

    const state = useSelector(state => state, shallowEqual)

    const filteredState = filterState(state, "output", "fixCommission", "delivery", "federal", "acceptance", "magistral", "lastMile", "dkYm", "pt", 'adv')
    const inputs = ["magistral"];
    const select = ["dkYm", "pt", "adv"];
    const header = <TableRow classNames="table__header" data={filteredState.header}  prefix='header' filterState={filterState} inputs={[]}/>
    const headerVal = <TableRow classNames="table__header" data={filteredState.headerVal}  prefix='headerVal' filterState={filterState} inputs={inputs} select={select}/>
    const ozone = <TableRow classNames="" data={filteredState.ozoneCalc}  prefix='ozoneCalc' filterState={filterState} inputs={["acceptance"]}/>
    const wb = <TableRow classNames="" data={filteredState.wbCalc}  prefix='wbCalc' filterState={filterState} inputs={["acceptance"]}/>
    const yMarket = <TableRow classNames="" data={filteredState.yMarketCalc}  prefix='yMarketCalc' filterState={filterState} inputs={["acceptance"]}/>

    return (

        <div className="table__form__comission">
            <h1>Комиссии маркетплейсов</h1>
            <table>
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

const mapStateToProps = (state) => {
    return  {state}
    
};

export default connect(mapStateToProps)(MarketplaceComission);