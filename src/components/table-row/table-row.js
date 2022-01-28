import React from "react";
import Cell from "../cell/cell";
import Input from '../input/input'
import Select from '../select/select'
import './table-row.scss'
// import store from "../../store";

export default function TableRow ({data, classNames, prefix, inputs}) {
    
    const row = Object.entries(data).map((item) => {

        if (item[0] === 'marketplaceCommission' && prefix === 'header'){
            return (
                <td colSpan = '2' key={item[0]+prefix} >
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
                <td rowSpan={3} key={item[0]+prefix}>
                    <Input
                    classNames={classNames}
                    key={item[0]+prefix} 
                    value={item[1]}
                    id={item[0]+'__'+prefix} 
                    prefix={prefix}
                    param={item[0]}
                    />
                </td>
            )        
        }else      
        if (item[0] === 'heightWidthLength' && prefix === 'wbCalc'){
            return (
                <td rowSpan='2' key={item[0]+prefix}>
                    <Input
                    classNames={classNames}
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
        if ((item[0] === 'marketplaceCommission' && prefix === 'ozoneCalc' ) || 
            (item[0] === 'marketplaceCommission' && prefix ===  'wbCalc') || 
            (item[0] === 'marketplaceCommission' && prefix === 'yMarketCalc')){
            return (
                <td key={item[0]+prefix}>
                    <Select
                    classNames={classNames}
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
                <td key={item[0]+prefix}>
                    <Input
                    classNames={classNames}
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
                <td key={item[0]+prefix} >
                    <Cell
                    classNames={classNames}
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
        <tr>
            {row}
        </tr>
    )
}


