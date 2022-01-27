// import React from "react";

const initialState = {
    masterdata: {
        heightWidthLength: false,
    },
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
        returns: "% возвратов",
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
        returns: 0.1,
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
        returns: 0.1,
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
        returns: 0.1,
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
        returns: 0.1,
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
            const prefix = state[action.prefix];
            let {output,
            buy1pc,
            cell1pc,
            marketplaceCommission,
            weight,
            heightWidthLength,
            CP: cp,
            ROI: roi,
            buyMax,
            cellMin,
            cellZero,
            PackRentPacker: packRentPacker,
            returns,
            reject,
            rejectPrice,
            fixCommission,
            delivery,
            federal,
            acceptance,
            magistral,
            lastMile,
            dkYm,
            pt,
            adv,
            deliveryComission,
            processing,
            commissionTotal,
            tax,
            costsWithoutPurchase,
            profit} = prefix;

            prefix[action.param] = action.payload;
            packRentPacker = state.headerVal.PackRentPacker.length === 0 ? null : state.headerVal.PackRentPacker;
            magistral = state.headerVal.magistral*weight < 5 ? 5 : state.headerVal.magistral*weight > 500 ? 500 : state.headerVal.magistral*weight
            lastMile = (cell1pc) => {
                if (cell1pc*0.044 < 200){
                    if (cell1pc*0.044 > 50) {
                        return cell1pc*0.044
                    } else {
                        return 50
                    }
                } 
                return 200
            }
            deliveryComission = acceptance + magistral + lastMile;
            dkYm = state.headerVal.dkYm*cell1pc*0.01;
            pt = state.headerVal.pt*cell1pc*0.01;
            commissionTotal = cell1pc*marketplaceCommission*0.01 - deliveryComission;
            adv = state.headerVal.adv*cell1pc*0.01;
            returns = state.headerVal.returns;
            rejectPrice = packRentPacker + acceptance + ((magistral + lastMile) * 2) + dkYm + pt + adv + 20;
            tax = (cell1pc - commissionTotal)*0.08;
            costsWithoutPurchase = packRentPacker + commissionTotal + dkYm + pt + adv + returns*0.01*rejectPrice + buy1pc*reject*0.01 + tax
            profit = cell1pc - buy1pc - costsWithoutPurchase;
            cp = profit;
            




            return {
                ...state, 
                [action.prefix]: {
                    ...state[action.prefix],
                    [action.param]: +action.payload,   
                    costsWithoutPurchase: costsWithoutPurchase,     
                    profit: profit,
                    CP: cp,
                }
            }
        default:
          return state;
      }
}

export default reducer;

// const st = {ozoneCalc :{
//             buyMax: 1475.50,
//             cellMin: 3004.58,
//             cellZero: 2724.58,
//             PackRentPacker: 45,
//             return: 0.1,
//             reject: 0.03,
//             rejectPrice: 758.4,
//             fixCommission: 0,
//             delivery: 0,
//             federal: 0,
//             acceptance: 45,
//             magistral: 5,
//             lastMile: 123.20,
//             dkYm: 140,
//             pt: 84,
//             adv: 168,
//             deliveryComission: 173.2,
//             processing: 0,
//             commissionTotal: 593.2,
//             tax: 176.55,
//             costsWithoutPurchase: 1324.59,
//             profit: 75.42,
//             CP: ozoneCalc.profit,
//             ROI: 1.055,
//         }
//     }