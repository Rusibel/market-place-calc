import React from "react";
// import {useSelector, shallowEqual} from 'react-redux';
import ProductCriteria from "../product-criteria/product-criteria";
import PriceRecomendation from "../price-recomendation/price-recomendation";
import ReturnsDefective from "../returns-defective/returns-defective";
import MarketplaceComission from "../marketplace-comission/marketplace-comission";
import AdvTotal from "../adv-total/adv-total";
import filterState from "../filters/filterState";
import './table.scss'

function Table () {
    

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

export default Table;