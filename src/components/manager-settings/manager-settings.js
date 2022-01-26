import React from 'react';
import {useSelector, shallowEqual} from 'react-redux';
import InputBlock from '../input-block/input-block';
import './manager-settings.scss';


export default function ManagerSettings () {

    const state = useSelector(state => state, shallowEqual);
    console.log(state)
    const {managerSettings: {
        minProfit, maxProfit, limitSum, minClearProfit}} = state;
    return (
        <div className='manager-settings'>
            <h1>Управленческие настройки</h1><br></br>
            <form 
                className ="">
                <div className='min_profit'>
                    <InputBlock 
                        label={'Eсли товар дешевле пороговой суммы, хочу зарабатывать дополнительно, рублей, на вложенный 1 рубль'}
                        classNames=''
                        id={'managerSettings_minProfit'}
                        value={minProfit}
                        prefix={"managerSettings"}
                        param={"minProfit"}/>  
          
                </div>
                <div className='max_profit'>
                    <InputBlock 
                        label='Eсли товар дороже пороговой суммы, хочу зарабатывать дополнительно, рублей, на вложенный 1 рубль'
                        classNames=''
                        id='managerSettings_maxProfit'
                        value={maxProfit}
                        prefix='managerSettings'
                        param='maxProfit' />                   
                </div>
                <div className='limit_sum'>
                    <InputBlock 
                        label='Пороговая сумма, руб'
                        classNames=''
                        id='managerSettings_limitSum'
                        value={limitSum}
                        prefix='managerSettings'
                        param='limitSum' />                 
                </div>
    
                <div className='min_clear_profit'>
                    <InputBlock 
                        label='с минимальной чистой прибылью, руб'
                        classNames=''
                        id='minClearProfit'
                        value={minClearProfit}
                        prefix='managerSettings'
                        param='minClearProfit' /> 
                </div>
              
            </form>
        </div>

    )
}