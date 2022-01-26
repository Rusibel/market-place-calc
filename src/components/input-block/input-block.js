import React from 'react'
import Input from '../input/input'

export default function InputBlock (label, classNames, key, value, prefix, param) {
    return (
        <>dfsgf
            <label htmlFor={param}>{label}</label>
            <Input
               classNames={classNames}
               key={key} 
               value={value}
               id={key} 
               prefix={prefix}
               param={param}/>       
        </>
    )
}