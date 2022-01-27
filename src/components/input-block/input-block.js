import React from 'react'
import Input from '../input/input'

export default function InputBlock ({label, classNames, id, value, prefix, param}) {

    return (
        <>        
            <label htmlFor={param}> {label} </label>
            <Input
               className={classNames}
               key={id} 
               value={value}
               id={id} 
               prefix={prefix}
               param={param}/>       
        </>

    )
}