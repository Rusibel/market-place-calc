import React, { useCallback } from 'react';
import { useActions } from '../../hooks/useActions';
import {useSelector, shallowEqual} from 'react-redux';
import './input.scss';

function addInputsVal ({e, param='', prefix=''}) {
    return { type: 'ADD_VAL', prefix: prefix, param: param, payload: e.target.value * 1};
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
        let type = 'text'
        // value = type === 'text' ? value.toLocaleString() : value
        console.log(type)
        input = 
        <input 
        onBlur={(e) => {
            e.target.type = 'text'
            e.target.value = value.toLocaleString()
            }
        }
        value={value}
        placeholder={value}
        id={id}
        className={classNames}
        onChange={(e) => {
            // e.target.value = +e.target.value.replace(/\s/g, '')
            addVal(e)}}
        onFocus={(e) => {
            e.target.type = 'number'   
            console.log(e.target.value)
            console.log(value)
            value = typeof(value) === 'number' ? value : +value.replace(/\s/g, '')
            e.target.value = value
        }}
        type={type}
        // onBlur={(value) => value.toLocalestring()}
        onInput={(e) => {
            console.log(type)
            // if(e.target.value < 0) e.target.value=0
            }
        }
        prefix={prefix}
        />
    }    
    return (
        <>
            {input}
        </>

    )
}