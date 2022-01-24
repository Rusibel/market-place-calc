import React from "react";
// import {useSelector, shallowEqual} from 'react-redux';
import ProductCriteria from "../product-criteria/product-criteria";
import PriceRecomendation from "../price-recomendation/price-recomendation";
import ReturnsDefective from "../returns-defective/returns-defective";
import MarketplaceComission from "../marketplace-comission/marketplace-comission";
import AdvTotal from "../adv-total/adv-total";
import './table.scss'

function Table () {
    // const {header, headerVal, ozoneCalc, wbCalc, yMarketCalc} = props.state
    // console.log(props.state);
    // const state = useSelector(state => state, shallowEqual)

    function filterState(state, ...params){
        const outputData = [];

        Object.entries(state).forEach((item)=>{
            const outputEnt = [];
            Object.entries(item[1]).forEach((data)=>{
                if (data[1] === 0) data[1] = '-';
                if (params.includes(data[0])){
                    if (data[1] === 0) data[1] = '-';
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
            <ReturnsDefective filterState={filterState}/>
            <MarketplaceComission filterState={filterState}/>
            <AdvTotal filterState={filterState}/>     
        </div>
    )
}

// const mapStateToProps = (state) => {
//     return { state
//     }
// };

export default Table;