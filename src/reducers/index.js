import { combineReducers } from 'redux';
import header from './header';
import headerVal from './header-val';
import ozoneCalc from './ozone-calc';
import wbCalc from './wb-Calc';
import yMarketCalc from './y-market-calc';

export default combineReducers({
    header,
    headerVal,
    ozoneCalc,
    wbCalc,
    yMarketCalc
})