import React from "react"
import './input.scss';

export default function Input ({value, id, classNames, checkbox}) {
    console.log(checkbox)

    let input 
    if (checkbox){
        input = <input
        type='checkbox'
        placeholder={value}
        id={id}
        className={classNames}
        />
    } else {
        input = 
        <input
        type='text'
        placeholder={value}
        id={id}
        className={classNames}
        />
    }
    classNames = classNames + ' input'

    return (
        <>
         {input}
        </>
        // <input
        // type='text'
        // placeholder={value}
        // id={id}
        // className={classNames}
        // />
    )
}