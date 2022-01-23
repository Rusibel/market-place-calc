import React from "react";
import Cell from "../cell/cell";
import './row.scss'
// import store from "../../store";

export default function InputsRow ({data, classNames, prefix}) {

    classNames = classNames + ' table_inputs_rows'

    return (
        <div className={classNames} >
            {
                Object.entries(data).map((item) => {
                    return <Cell
                            key={item[0]+prefix} 
                            value={item[1]} />
                    })

            }
        </div>

    )
}


