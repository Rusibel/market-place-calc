import React from "react";
// import { combineReducers } from 'redux';
// import header from './header';
// import headerVal from './header-val';
// import ozoneCalc from './ozone-calc';
// import wbCalc from './wb-Calc';
// import yMarketCalc from './y-market-calc';


// const initialState = combineReducers({
//     header,
//     headerVal,
//     ozoneCalc,
//     wbCalc,
//     yMarketCalc
// })

// const rootReduser = function (state = initialState, action) {
//     // const {type, param, payload} = action;
//     // console.log(param)
//     // switch (type) {
//     //     case 'ADD_VAL':
//     //       state[param] = payload;
//     //       return { ...state };
//     //     default:
//     return state;
//     //   }
//   }

// const calcReducer = combineReducers({
//     header,
//     headerVal,
//     ozoneCalc,
//     wbCalc,
//     yMarketCalc
// })

// export default combineReducers({
//     calcReducer, rootReduser
// })




// const initialState = combineReducers({
//     header,
//     headerVal,
//     ozoneCalc,
//     wbCalc,
//     yMarketCalc
// })

// const reducer = (state = initialState) => {
//     console.log(state);
//     // switch (action.type) {
//     //     case 'MENU_LOADED': 
//     //         return {
//     //             menu: action.payload,
//     //             loading: false,
//     //             error: state.error
//     //         };
//     //     case 'MENU_REQUESTED': 
//     //         return {
//     //             menu: state.menu,
//     //             loading: true,
//     //             error: state.error
//     //         };
//     //     case 'MENU_ERROR': 
//     //         return {
//     //             menu: state.menu,
//     //             loading: false,
//     //             error: true
//     //         };
//     //     default: 
//             return state;
//     // }
// }

// export default reducer;

const initialState = {
    managerSettings: {
        minProfit: 0.6,
        maxProfit: 0.2,
        limitSum: 1000,
        minClearProfit: 300
    },
    header: {
        output: "Вывод",
        buy1pc: " Закупка, 1 шт",
        cell1pc: "Продажа, 1 шт",
        marketplaceCommission : "Комиссия маркетплейса",
        dep: 0,
        weight: "Вес, кг",
        heightWidthLength: "Высота + Ширина + Длина",
        CP: "ЧП",
        ROI: "ROI",
        buyMax: "Покупка Макс. ≈",
        cellMin: "Продажа Мин. ≈",
        cellZero: "Продажа вноль",
        PackRentPacker: "Упаковка, аренда, упаковщик",
        return: "% возвратов",
        reject: "% брака",
        rejectPrice: "Цена возврата",
        fixCommission: "Ком ФИКС",
        delivery: "Доставка",
        federal: "Федеральная ",
        acceptance: "Приемка отправления",
        magistral: "Магистраль, КГ х",
        lastMile: "Последняя миля",
        dkYm: "% ДК УМ",
        pt: "% ПТ",
        adv: "Реклама, %",
        deliveryComission: "Комиссия Дост МП",
        processing: "Обработка",
        commissionTotal: "Комиссия МП Итог",
        tax: "Налог, %",
        costsWithoutPurchase: "Косты без закупа",
        profit: "Прибыль "
    },
    headerVal: {
            output: 0,
            buy1pc: 0,
            cell1pc: 0,
            marketplaceCommission : 0,
            dep: 0,
            weight: 0,
            heightWidthLength: 0,
            CP: 0,
            ROI: 0,
            buyMax: 0,
            cellMin: 0,
            cellZero: 0,
            PackRentPacker: 45,
            return: 0.1,
            reject: 0.03,
            rejectPrice: 0,
            fixCommission: 0,
            delivery: 0,
            federal: 0,
            acceptance: 0,
            magistral: 19,
            lastMile: 0,
            dkYm: 0.05,
            pt: 0.03,
            adv: 1,
            deliveryComission: 0,
            processing: 0,
            commissionTotal: 0,
            tax: 8,
            costsWithoutPurchase: 0,
            profit: 0
    },
    ozoneCalc: {
        output: "OZONE",
        buy1pc: 1400,
        cell1pc: 2800,
        marketplaceCommission : 0.15,
        dep: "-  зависит от категории OZON",
        weight: 0.1,
        heightWidthLength: "Если больше 150 см, жми ↓",
        CP: 75.5,
        ROI: 1.055,
        buyMax: 1475.50,
        cellMin: 3004.58,
        cellZero: 2724.58,
        PackRentPacker: 45,
        return: 0.1,
        reject: 0.03,
        rejectPrice: 758.4,
        fixCommission: 0,
        delivery: 0,
        federal: 0,
        acceptance: 45,
        magistral: 5,
        lastMile: 123.20,
        dkYm: 140,
        pt: 84,
        adv: 168,
        deliveryComission: 173.2,
        processing: 0,
        commissionTotal: 593.2,
        tax: 176.55,
        costsWithoutPurchase: 1324.59,
        profit: 75.42
    },
    wbCalc: {
        output: "WB",
        buy1pc: 1400,
        cell1pc: 2800,
        marketplaceCommission : 0.2,
        dep: "-  зависит от продаж",
        weight: 0.1,
        heightWidthLength: 0,
        CP: 316.9,
        ROI: 1.23,
        buyMax: 1716.9,
        cellMin: 2763.1,
        cellZero: 2483.1,
        PackRentPacker: 45,
        return: 0.1,
        reject: 0.03,
        rejectPrice: 329,
        fixCommission: 0,
        delivery: 30,
        federal: 0,
        acceptance: 30,
        magistral: 0,
        lastMile: 0,
        dkYm: 140,
        pt: 84,
        adv: 0,
        deliveryComission: 0,
        processing: 0,
        commissionTotal: 560,
        tax: 179.20,
        costsWithoutPurchase: 1083.1,
        profit: 316.9
    },
    yMarketCalc: {
        output: "YMarket",
        buy1pc: 1400,
        cell1pc: 2800,
        marketplaceCommission : 0.2,
        dep: "-  зависит от продаж",
        weight: 0.1,
        heightWidthLength: 0,
        CP: 316.90,
        ROI: 1.23,
        buyMax: 1716.9,
        cellMin: 2763.1,
        cellZero: 2483.1,
        PackRentPacker: 45,
        return: 0.1,
        reject: 0.03,
        rejectPrice: 329,
        fixCommission: 0,
        delivery: 30,
        federal: 0,
        acceptance: 30,
        magistral: 0,
        lastMile: 0,
        dkYm: 140,
        pt: 84,
        adv: 0,
        deliveryComission: 0,
        processing: 0,
        commissionTotal: 560,
        tax: 179.20,
        costsWithoutPurchase: 1083.1,
        profit: 316.90
    }
}



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_VAL':
            console.log(action);
            const newState = state;
            newState[action.prefix][action.param] = action.payload;
            state = newState;
            console.log(state);
            return state
        default:
          return state;
      }
}

export default reducer;
