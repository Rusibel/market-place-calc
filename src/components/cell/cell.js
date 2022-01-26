import React from "react";
import './cell.scss'

export default function Cell ({value, classNames, id}) {
    classNames = classNames + ' cell'
    // let cell = () => {

    // }

    return (
        <div className={classNames} id={id}>{value}</div>
    )
}