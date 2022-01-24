import React, { useCallback } from 'react';
import { useActions } from '../../hooks/useActions';
import './input.scss';

function addInputsVal (e, param='', title='', prefix='') {
    console.log(e.target.value);
    console.log(param);
    return { type: 'ADD_VAL', param: param, payload: e.target.value };
  }


export default function Input ({value, id, classNames, checkbox, e}) {

    const [addValActionDispatch] = useActions([addInputsVal]);
    const addVal = useCallback((e) => addValActionDispatch(e, id), [addValActionDispatch]);

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
        onInput={addVal}
        />
    }
    classNames = classNames + ' input'
    // console.log(value);
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