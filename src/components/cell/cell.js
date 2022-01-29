import React from "react";
import './cell.scss'

export default function Cell ({value, classNames, id, rub = ''}) {
    classNames = 'cell ' + classNames
   
    

    return (
        <div className={classNames} id={id}>{value + rub}</div>
    )
}