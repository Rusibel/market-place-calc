import React from "react";
import Row from "../row/row";
import store from "../../store";
import {connect} from 'react-redux';
import ProductCriteria from "../product-criteria/product-criteria";
import PriceRecomendation from "../price-recomendation/price-recomendation";
import './table.scss'

function Table ({state}) {
    // const {header, headerVal, ozoneCalc, wbCalc, yMarketCalc} = props.state
    // console.log(props.state);

    function filterState(state, ...params){
        const outputData = [];

        Object.entries(state).forEach((item, i, entries)=>{
            const outputEnt = [];
            Object.entries(item[1]).forEach((data)=>{
                if (data[1] == 0) data[1] = '-';
                if (params.includes(data[0])){
                    if (data[1] == 0) data[1] = '-';
                    outputEnt.push([data[0], data[1]])
                }
            })

            outputData.push([item[0], Object.fromEntries(outputEnt)])
        });
        return  Object.fromEntries(outputData);
    }

    return (
        <div className="table">
        <ProductCriteria filterState={filterState}/>
        <PriceRecomendation filterState={filterState}/>
        {/* <form className="table_form2">
            <Row classNames="table_header" data={props.state.header.inputs}  prefix='header'/>
            <Row data={props.state.headerVal} prefix='headerVal' />
            <Row data={props.state.ozoneCalc}  prefix='ozoneCalc'/>
            <Row data={props.state.wbCalc} prefix='wbCalc'/>
            <Row data={props.state.yMarketCalc} prefix='yMarketCalc'/>
        </form> */}
{/* 
        <form className="table_form">
            <Row classNames="table_header" data={header}  prefix='header'/>
            <Row data={headerVal} prefix='headerVal' />
            <Row data={ozoneCalc}  prefix='ozoneCalc'/>
            <Row data={wbCalc} prefix='wbCalc'/>
            <Row data={yMarketCalc} prefix='yMarketCalc'/>
        </form> */}
        </div>
    )
}

const mapStateToProps = (state) => {
    return { state
    }
};

export default connect(mapStateToProps)(Table);