import React from "react";
import Row from "../row/row";
import store from "../../store";
import {connect} from 'react-redux';
import './product-criteria.scss'

function ProductCriteria ({state, filterState}) {
    // const {header, headerVal, ozoneCalc, wbCalc, yMarketCalc} = props.state
    console.log(state);

    const filteredState = filterState(state, "output", "buy1pc", "cell1pc", "marketplaceCommission", "dep", "weight", "heightWidthLength")
    const inputs = ["buy1pc", "cell1pc", "marketplaceCommission", "weight", "heightWidthLength"];

    const header = <Row classNames="table_header" data={filteredState.header}  prefix='header' filterState={filterState} inputs={[]}/>
    const ozone = <Row classNames="" data={filteredState.ozoneCalc}  prefix='ozoneCalc' filterState={filterState} inputs={inputs}/>
    const wb = <Row classNames="" data={filteredState.wbCalc}  prefix='wbCalc' filterState={filterState} inputs={inputs}/>
    const yMarket = <Row classNames="" data={filteredState.yMarketCalc}  prefix='yMarketCalc' filterState={filterState} inputs={inputs}/>

    return (
        <>
        <form className="table_form">
            {header}
            {ozone}
            {wb}
            {yMarket}
            {/* <Row data={props.state.headerVal} prefix='headerVal' />
            <Row data={props.state.ozoneCalc}  prefix='ozoneCalc'/>
            <Row data={props.state.wbCalc} prefix='wbCalc'/>
            <Row data={props.state.yMarketCalc} prefix='yMarketCalc'/> */}
        </form>
{/* 
        <form className="table_form">
            <Row classNames="table_header" data={header}  prefix='header'/>
            <Row data={headerVal} prefix='headerVal' />
            <Row data={ozoneCalc}  prefix='ozoneCalc'/>
            <Row data={wbCalc} prefix='wbCalc'/>
            <Row data={yMarketCalc} prefix='yMarketCalc'/>
        </form> */}
        </>
    )
}

const mapStateToProps = (state) => {
    // const {header, headerVal, ozoneCalc, wbCalc, yMarketCalc} = state;

    return  {state
            // header: {
            //     output: state.header.output,
            //     buy1pc: state.header.buy1pc,
            //     cell1pc: state.header.cell1pc ,
            //     marketplaceCommission : state.header. marketplaceCommission,
            //     dep: state.header.dep,
            //     weight: state.header.weight,
            //     heightWidthLength: state.header.heightWidthLength
            // }
        }
    
};

export default connect(mapStateToProps)(ProductCriteria);