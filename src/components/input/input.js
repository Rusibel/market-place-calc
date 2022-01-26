import React, { useCallback } from 'react';
import { useActions } from '../../hooks/useActions';
import './input.scss';

function addInputsVal ({e, param='', prefix=''}) {
    // console.log(e.target.value);
    // console.log(param);
    // console.log(prefix);
    return { type: 'ADD_VAL', prefix: prefix, param: param, payload: e.target.value };
  }


export default function Input ({value, id, classNames, checkbox, prefix, param, }) {

    const [addValActionDispatch] = useActions([addInputsVal]);
    const addVal = useCallback((e) => addValActionDispatch({e, param: param, prefix: prefix}), [addValActionDispatch]);

    // const label = label ? <label htmlFor={param}>{label}</label> : ""
    let input;
    if (checkbox){
        input = <input
        type='checkbox'
        placeholder={value}
        id={id}
        className={classNames}
        prefix={prefix}
        />
    } else {
        input = 
        <input
        type='text'
        placeholder={value}
        id={id}
        className={classNames}
        onInput={addVal}
        prefix={prefix}
        />
    }
    classNames = classNames + ' input'
    // console.log(value);
    return (
        <>
            {/* {label} */}
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