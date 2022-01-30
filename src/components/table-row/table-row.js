import React, { useEffect, useCallback }  from "react";
import { useSelector, shallowEqual } from 'react-redux';
import { useActions } from '../../hooks/useActions';
import Cell from "../cell/cell";
import Input from '../input/input'
import Select from '../select/select'
import Link from '../links/links'
import './table-row.scss'
// import store from "../../store";

export default function TableRow ({data, classNames, prefix, inputs, select = []}) {

    const state = useSelector(state => state, shallowEqual);

    function calcOutputVal ({e, prefix=''}) {
        
        if(state[prefix].profit > 0){
            if(state.masterdata.cell1pc <= state.managerSettings.limitSum){
                if(state[prefix].ROI >= (state.managerSettings.minProfit + 1)){
                    // rowClassnames = 'table__row__green'
                    return { type: 'ADD_VAL_OUTPUT_SUCCESS', prefix: prefix};
                    // console.log('success')
                } else { 
                return { type: 'ADD_VAL_OUTPUT_UNSUCCESS', prefix: prefix};}
            } else {
                if(state[prefix].CP >= state.managerSettings.minProfit){
                    if(state[prefix].ROI >= (state.managerSettings.maxProfit + 1)){
            
                        return { type: 'ADD_VAL_OUTPUT_SUCCESS', prefix: prefix };
                    } else { return { type: 'ADD_VAL_OUTPUT_UNSUCCESS', prefix: prefix,} }
                } else { return { type: 'ADD_VAL_OUTPUT_UNSUCCESS', prefix: prefix}}
            } 
        }  else { state[prefix].output  =( 'На OZON не продаём, ищем дальше!')}
        return { type: 'ADD_VAL_OUTPUT_UNSUCCESS', prefix: prefix}
      }
      
    const [calcOutputValDispatch] = useActions([calcOutputVal]);
    const outputVal = useCallback((e) => calcOutputValDispatch({e, prefix: prefix}), [calcOutputValDispatch]);


    useEffect(() => {
        if( prefix !== 'header' && prefix !== 'headerVal'){
            outputVal();
        }
    }, [state[prefix].CP, state[prefix].ROI, state.managerSettings.maxProfit, state.managerSettings.minProfit, state.managerSettings.limitSum, state.managerSettings.minClearProfit, state.managerSettings.packRentPacker1pc] );

    const row = Object.entries(data).map((item) => {

        let tdClassNames = (item[0] !== 'buy1pc' && item[0] !== 'cell1pc' && item[0] !== 'marketplaceCommission' && item[0] !== 'weight' && item[0] !== 'heightWidthLength' && item[0] !== 'dep') ?
                                ((prefix !== 'header' && prefix !== 'headerVal' && prefix !== 'managerSettings') ? 
                                    ((!state[prefix].outputCell) ? 'table__row__red' : 'table__row__green') 
                                    : (prefix === 'header' && prefix === 'headerVal') ? 'table__header' : ''
                            ) : ((prefix !== 'header' && prefix !== 'headerVal') ? 
                                    'table__row__yellow' : (prefix === 'header' && prefix === 'headerVal') ? 'table__header' : '')

        classNames = ' ' + tdClassNames
        const rub = item[1] ? ' ₽' : '';

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
                <td rowSpan={3} key={item[0]+prefix} className={tdClassNames} >
                    <Input
                    classNames={''}
                    key={item[0]+prefix} 
                    value={item[1]}
                    id={item[0]+'__'+prefix} 
                    prefix={prefix}
                    param={item[0]}
                    rub={rub}
                    />
                </td>
            )        
        }else
        if ((item[0] === 'dep' && prefix !== 'header')){
            let url = prefix === 'ozoneCalc' ? 'https://calculator.ozon.ru' : prefix === 'wbCalc' ? 'https://seller.wildberries.ru/dynamic-product-categories' : "https://yandex.ru/legal/marketplace_services_rate_table/"
            return (
                <td key={item[0]+prefix} className={tdClassNames} >
                    <Link
                    classNames={''}
                    key={item[0]+prefix} 
                    value={item[1]}
                    id={item[0]+'__'+prefix}
                    prefix={prefix}
                    url={url}/>
                </td>
            )        
        }else
        if ((item[0] === 'limitSum' || item[0] === 'packRentPackerTotal' || item[0] === 'numberOfShipments' || item[0] === 'packRentPacker1pc')  && prefix === 'managerSettings'){
            return (
                <td rowSpan={2} key={item[0]+prefix} className={tdClassNames} >
                    <Input
                    classNames={''}
                    key={item[0]+prefix} 
                    value={item[1]}
                    id={item[0]+'__'+prefix} 
                    prefix={prefix}
                    param={item[0]}
                    rub={rub}
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
                <td key={item[0]+prefix} className={tdClassNames}  >
                    <Input
                    classNames={'   '}
                    key={item[0]+prefix} 
                    value={item[1]}
                    id={item[0]+'__'+prefix} 
                    prefix={prefix}
                    param={item[0]}/>
                </td>
            )
        }
        
      
        {
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
    // console.log(inputs.includes('dep'))
    return (
        <tr className='table__row'>
            {row}
        </tr>
    )
}


