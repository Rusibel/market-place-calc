import React from "react";
import './cell.scss'

export default function Cell ({value, classNames}) {
    classNames = classNames + ' cell'

    return (
        <div className={classNames}>{value}</div>
    )
}