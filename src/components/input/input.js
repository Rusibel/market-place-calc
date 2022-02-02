import React, { useCallback } from 'react';
import { useActions } from '../../hooks/useActions';
import {useSelector, shallowEqual} from 'react-redux';
import './input.scss';

function addInputsVal ({e, param='', prefix=''}) {
    return { type: 'ADD_VAL', prefix: prefix, param: param, payload: e.target.value };
  }
function addInputsValMasterdata ({e, param='', prefix=''}) {
    return { type: 'ADD_VAL_MASTERDATA', prefix: prefix, param: param};
}

export default function Input ({value, id, classNames, checkbox, prefix, param, rub=''}) {
    const state = useSelector(state => state, shallowEqual)

    const [addValActionDispatch] = useActions([addInputsVal]);
    const addVal = useCallback((e) => addValActionDispatch({e, param: param, prefix: prefix}), [addValActionDispatch]);
    const [addValMasterdataActionDispatch] = useActions([addInputsValMasterdata]);
    const addValMasterdata = useCallback((e) => addValMasterdataActionDispatch({e, param: param, prefix: prefix}), [addValActionDispatch]);
    classNames =  'input ' + classNames
    let input;
    if (checkbox){
        input = <input
        type='checkbox'
        placeholder={value}
        id={id}
        className={classNames}
        prefix={prefix}
        checked={state.masterdata.heightWidthLength}
        onChange={() => {
            addValMasterdata();
            // addVal()
        }}
        />
    } else {
        input = 
        <input
        type='number'
        value={value}
        placeholder={value}
        id={id}
        className={classNames}
        onChange={addVal}
        onInput={(e) => {
            if(e.target.value < 0) e.target.value=0}}
        prefix={prefix}
        />
    }    
    return (
        <>
            {input}
        </>

    )
}