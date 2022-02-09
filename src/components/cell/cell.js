import React from "react";
import './cell.scss'

export default function Cell ({value, classNames, id}) {
    classNames = 'cell ' + classNames
   
    if(id !== "ROI"){
        value = typeof(value) === 'number' ? value.toLocaleString() : value
    } else {value = typeof(value) === 'number' ? value.toFixed(4) : value }


    return (
        <div className={classNames} id={id}>{value}</div>
    )
}