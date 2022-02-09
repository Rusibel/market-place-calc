import React from "react";
import './cell.scss'

export default function Cell ({value, classNames, id, rub = ''}) {
    classNames = 'cell ' + classNames
   
    value = typeof(value) === 'number' ? value.toFixed(2).toLocaleString() : value

    return (
        <div className={classNames} id={id}>{value}</div>
    )
}