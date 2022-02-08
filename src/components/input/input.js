import React, { useCallback } from 'react';
import { useActions } from '../../hooks/useActions';
import {useSelector, shallowEqual} from 'react-redux';
import './input.scss';

function addInputsVal ({e, param='', prefix=''}) {
    return { type: 'ADD_VAL', prefix: prefix, param: param, payload: +e.target.value.replace(/\s/g, '')};
  }
function addInputsValMasterdata ({e, param='', prefix=''}) {
    return { type: 'ADD_VAL_MASTERDATA', prefix: prefix, param: param};
}

export default function Input ({value, id, classNames, checkbox, prefix, param, type='number', input, step}) {
    const state = useSelector(state => state, shallowEqual)

    const [addValActionDispatch] = useActions([addInputsVal]);
    const addVal = useCallback((e) => addValActionDispatch({e, param: param, prefix: prefix}), [addValActionDispatch]);
    const [addValMasterdataActionDispatch] = useActions([addInputsValMasterdata]);
    const addValMasterdata = useCallback((e) => addValMasterdataActionDispatch({e, param: param, prefix: prefix}), [addValActionDispatch]);
    classNames =  'input ' + classNames
    let inputCell;
    if (checkbox){
        inputCell = <input
        type='checkbox'
        placeholder={value}
        id={id}
        className={classNames}
        prefix={prefix}
        checked={state.masterdata.heightWidthLength}
        onChange={() => {
            addValMasterdata();
        }}
        />
    } else {
        inputCell = !input ?
        <input 
        type='text'
        value={value.toLocaleString()}
        placeholder={value.toLocaleString()}
        id={id}
        className={classNames}
        onChange={(e) => {
            addVal(e)}}
        onInput={(e) => {
        if(e.target.value < 0) e.target.value=0
            }
        }
        prefix={prefix}
        /> : <input 
            type='number'
            value={value}
            placeholder={value}
            id={id}
            className={classNames}
            onChange={(e) => {
                addVal(e)}}
            onInput={(e) => {
                if(e.target.value < 0) e.target.value=0
                    }
                }
            prefix={prefix}
            step={step}
            />
    }    
    return (
        <>
            {inputCell}
        </>

    )
}