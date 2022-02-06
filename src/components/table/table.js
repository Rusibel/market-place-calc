import React from "react";
import ProductCriteria from "../product-criteria/product-criteria";
import PriceRecomendation from "../price-recomendation/price-recomendation";
import filterState from "../filters/filterState";
import ManagerSettings from "../manager-settings/manager-settings";
import LinkBlock from "../link-block/link-block";
import './table.scss'

function Table () {
    

    return (
        <div className="table">
            <LinkBlock />
            <ManagerSettings filterState={filterState}/>
            <ProductCriteria filterState={filterState}/>
            <PriceRecomendation filterState={filterState}/>
        </div>
    )
}

export default Table;