import React from "react";
import Cell from "../cell/cell";
import Input from "../input/input";
import './row.scss'
// import store from "../../store";

export default function Row ({data, classNames, prefix, inputs}) {

    const row = Object.entries(data).map((item) => {
        
        if (item[0] === 'heightWidthLength' && prefix !== 'header' && prefix !== 'ozoneCalc'){
            return <Input
            classNames={classNames}
            key={item[0]+prefix} 
            value={item[1]}
            id={item[0]+prefix} 
            checkbox={true}/>
        }else if (inputs.includes(item[0])){
            return <Input
               classNames={classNames}
               key={item[0]+prefix} 
               value={item[1]}
               id={item[0]} />
        }
        
      
        {
            return <Cell
            classNames={classNames}
            key={item[0]+prefix} 
            value={item[1]} />
        }
    })
    // console.log(inputs.includes('dep'))
    return (
        <>
            {row}
        </>

    )
}