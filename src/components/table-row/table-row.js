import React, { useEffect, useCallback, useState }  from "react";
import { useSelector, shallowEqual } from 'react-redux';
import { useActions } from '../../hooks/useActions';
import Cell from "../cell/cell";
import Input from '../input/input'
import Select from '../select/select'
import Td from "./table-date/td";
import './table-row.scss'

export default function TableRow ({data, classNames, prefix, inputs, select = []}) {

    const state = useSelector(state => state, shallowEqual);
    const [input, setInput] = useState(false);

    function calcOutputVal ({e, prefix=''}) {
        
        if(state[prefix].profit > 0){
            if(state.masterdata.cell1pc <= state.managerSettings.limitSum){
                if(state[prefix].ROI >= (+state.managerSettings.minProfit/100 + 1) && state[prefix].CP >= state.managerSettings.minClearProfit){
                    return { type: 'ADD_VAL_OUTPUT_SUCCESS', prefix: prefix};
                } else { 
                return { type: 'ADD_VAL_OUTPUT_UNSUCCESS', prefix: prefix};}
            } else {
                if(state[prefix].CP >= state.managerSettings.minProfit){
                    if(state[prefix].ROI >= (+state.managerSettings.maxProfit/100 + 1) && state[prefix].CP >= state.managerSettings.minClearProfit){
                        return { type: 'ADD_VAL_OUTPUT_SUCCESS', prefix: prefix };
                    } else { return { type: 'ADD_VAL_OUTPUT_UNSUCCESS', prefix: prefix,} }
                } else { return { type: 'ADD_VAL_OUTPUT_UNSUCCESS', prefix: prefix}}
            } 
        }  else { state[prefix].output  =( 'На OZON не продаём, ищем дальше!')}
        return { type: 'ADD_VAL_OUTPUT_UNSUCCESS', prefix: prefix}
      }
      
    const [calcOutputValDispatch] = useActions([calcOutputVal]);
    const outputVal = useCallback((e) => calcOutputValDispatch({e, prefix: prefix}), [calcOutputValDispatch]);

    useEffect((e) => {
        if( prefix !== 'header' && prefix !== 'headerVal'){
            outputVal(e, prefix);
        }
    }, [state[prefix].CP, state[prefix].ROI, state.managerSettings.maxProfit, state.managerSettings.minProfit, state.managerSettings.limitSum, 
        state.managerSettings.minClearProfit, state.managerSettings.packRentPacker1pc]); //Работает - don't touch

    const row = Object.entries(data).map((item) => {

        let tdClassNames = (item[0] !== 'buy1pc' && item[0] !== 'cell1pc' && item[0] !== 'marketplaceCommission' && item[0] !== 'weight' && item[0] !== 'heightWidthLength' && item[0] !== 'dep') ?
                                ((prefix !== 'header' && prefix !== 'headerVal' && prefix !== 'managerSettings') ? 
                                    ((!state[prefix].outputCell) ? 'table__row__red' : 'table__row__green') 
                                    : (prefix === 'header' && prefix === 'headerVal') ? 'table__header' : ''
                            ) : ((prefix !== 'header' && prefix !== 'headerVal') ? 
                                    'table__row__yellow' : (prefix === 'header' && prefix === 'headerVal') ? 'table__header' : '')

        classNames = ' ' + tdClassNames
        const rub = item[1] ? ' ₽' : '';

    // const inputsCell = (item, prefix) => {
    //     if (!input) {
    //         return(<Input
    //             classNames={'   '}
    //             key={item[0]+prefix} 
    //             value={item[1].toLocaleString()}
    //             id={item[0]+'__'+prefix} 
    //             prefix={prefix}
    //             param={item[0]}
    //             type='text'/>)
    //     }
    //     return (<Input
    //         classNames={'   '}
    //         key={item[0]+prefix} 
    //         value={item[1]}
    //         id={item[0]+'__'+prefix} 
    //         prefix={prefix}
    //         param={item[0]}
    //         type='number'/>)
    // } 

            let inputsCell = !input ?
                <Input
                classNames={'   '}
                key={item[0]+prefix} 
                value={item[1].toLocaleString()}
                id={item[0]+'__'+prefix} 
                prefix={prefix}
                param={item[0]}
                type='text'/> : 
                    <Input
                    classNames={'   '}
                    key={item[0]+prefix} 
                    value={item[1]}
                    id={item[0]+'__'+prefix} 
                    prefix={prefix}
                    param={item[0]}
                    type='number'/>

        if (item[0] === 'marketplaceCommission' && prefix === 'header'){
            return (
                <td colSpan = '2' key={item[0]+prefix}  className={tdClassNames} >
                    <Cell
                    classNames={classNames}
                    key={item[0]+prefix} 
                    value={item[1]}
                    id={item[0]+'__'+prefix}
                    prefix={prefix} 
                     />
                </td>
            )    
        } else
        if ((item[0] === 'buy1pc' || item[0] === 'cell1pc' || item[0] === 'weight')  && prefix === 'ozoneCalc'){
            return (
                <Td 
                item={item}
                rowSpan={3}
                prefix={prefix}
                tdClassNames={tdClassNames}
                key={item[0]+prefix} />
                // <td rowSpan={3} key={item[0]+prefix} className={tdClassNames} >
                //     <Input
                //     classNames={''}
                //     key={item[0]+prefix} 
                //     value={item[1]}
                //     id={item[0]+'__'+prefix} 
                //     prefix={prefix}
                //     param={item[0]}
                //     rub={rub}
                //     />
                // </td>
            )        
        }else
        if ((item[0] === 'limitSum' || item[0] === 'packRentPackerTotal' || item[0] === 'numberOfShipments')  && prefix === 'managerSettings'){
            return (
                <Td 
                item={item}
                rowSpan={2}
                prefix={prefix}
                tdClassNames={tdClassNames}
                key={item[0]+prefix} />
                // <td rowSpan={2} 
                // key={item[0]+prefix} 
                // className={tdClassNames} 
                // onMouseEnter={() => setInput(true)}
                // onMouseLeave={() => setInput(false)}
                // >
                //     {/* {inputsCell} */}
                //     <Input
                //     classNames={''}
                //     key={item[0]+prefix} 
                //     value={item[1]}
                //     id={item[0]+'__'+prefix} 
                //     prefix={prefix}
                //     param={item[0]}
                //     rub={rub}
                //     input={input}
                //     />
                // </td>
            )        
        }else
        if ((item[0] === 'packRentPacker1pc')  && prefix === 'managerSettings'){
            return (
                <td rowSpan={2} key={item[0]+prefix} className={tdClassNames} >
                    <Cell
                    classNames={classNames}
                    key={item[0]+prefix} 
                    value={item[1]}
                    id={item[0]+'__'+prefix}
                    prefix={prefix} 
                     />
            </td>
            )        
        }else          
        if (item[0] === 'heightWidthLength' && prefix === 'wbCalc'){
            return (
                <td rowSpan='2' key={item[0]+prefix} className={tdClassNames} >
                    <Input
                    classNames={''}
                    key={item[0]+prefix} 
                    value={item[1]}
                    id={item[0]+'__'+prefix} 
                    checkbox={true}
                    prefix={prefix}
                    param={item[0]}
                    />
                </td>
            )
        }else 
        if (select.includes(item[0]))
            {
            return (
                <td key={item[0]+prefix} className={tdClassNames}>
                    <Select
                    classNames={''}
                    key={item[0]+prefix} 
                    value={item[1]}
                    id={item[0]+'__'+prefix} 
                    prefix={prefix}
                    param={item[0]}/>
                </td>
            )
        } else
        if (inputs.includes(item[0])){
            

            return (
                <Td 
                item={item}
                rowSpan={1}
                prefix={prefix}
                tdClassNames={tdClassNames} 
                key={item[0]+prefix}/>
                // <td 
                // key={item[0]+prefix} 
                // className={tdClassNames}  
                // onMouseEnter={() => setInput(true)}
                // onMouseLeave={() => setInput(false)}
                // >

                //     {inputsCell}

                // </td>
            )
        } else{
            return (
                <td key={item[0]+prefix} className={tdClassNames} >
                    <Cell
                    classNames={''}
                    key={item[0]+prefix} 
                    value={item[1]}
                    id={item[0]+'__'+prefix}
                    prefix={prefix} />
                </td>
            )
        }
    })

    return (
        <tr className='table__row'>
            {row}
        </tr>
    )
}


