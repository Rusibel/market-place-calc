import React, { useCallback } from 'react';
import { useActions } from '../../hooks/useActions';
import { useSelector, shallowEqual } from 'react-redux';
import { addInputsVal } from '../actions/actions';


export default function Select ({id, classNames, prefix, param}) {
    const state = useSelector(state => state, shallowEqual);

    const [addValActionDispatch] = useActions([addInputsVal]);
    const addVal = useCallback((e) => addValActionDispatch({e, param: param, prefix: prefix}), [addValActionDispatch]);

    const optionsOfSelect = () => {
        const opt = [];

        for (let i = 0; i <= 100; i++){
            opt.push(i)
        }

        const options = opt.map((number) => 
            <option value={number} key={number + prefix + param}>{number}%</option>)
        return options
    }

    let select = <select
        value={state[prefix][param]}
        id={id}
        className={classNames}
        prefix={prefix}
        onChange={addVal}>
             {optionsOfSelect()} 
        </select>

    return (
        <>
            {select}
        </>

    )
}