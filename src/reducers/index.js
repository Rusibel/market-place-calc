// import React from "react";

const initialState = {
    masterdata: {
        heightWidthLength: false,
        buy1pc: 1400,
        cell1pc: 2800
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
        rejectPrice: "Цена возврата, руб",
        fixCommission: "Ком ФИКС, руб",
        delivery: "Доставка, руб",
        federal: "Федеральная ",
        acceptance: "Приемка отправления, руб",
        magistral: "Магистраль, КГ х",
        lastMile: "Последняя миля",
        dkYm: "% ДК УМ",
        pt: "% ПТ",
        adv: "Реклама, %",
        deliveryComission: "Комиссия Дост МП",
        processing: "Обработка",
        commissionTotal: "Комиссия МП Итог",
        tax: "Налог, 7+1%",
        costsWithoutPurchase: "Косты без закупа",
        profit: "Прибыль "
    },
    headerVal: {
        output: 0,
        buy1pc: 0,
        cell1pc: 1000,
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
        returns: 10,
        reject: 3,
        rejectPrice: 0,
        fixCommission: 0,
        delivery: 0,
        federal: 0,
        acceptance: 0,
        magistral: 19,
        lastMile: 0,
        dkYm: 5,
        pt: 3,
        adv: 1,
        deliveryComission: 0,
        processing: 0,
        commissionTotal: 0,
        tax: 0,
        costsWithoutPurchase: 0,
        profit: 0
    },
    ozoneCalc: {
        output: "OZONE",
        buy1pc: 1400,
        cell1pc: 2800,
        marketplaceCommission : 15,
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
        lastMile: 123,
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
        marketplaceCommission : 20,
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
        marketplaceCommission : 20,
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
        fixCommission: 30,
        delivery: 112,
        federal: 0,
        acceptance: 0,
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
};

function calcParam(state, action, pref) {

    const prefix = state[pref]
    console.log(prefix)
    console.log(action.param)
    console.log(prefix[action.param])
    console.log(pref)
    if(action.param === 'buy1pc' || action.param === 'cell1pc'){
        state.masterdata[action.param] = +action.payload}
    // } else {
    //     prefix[action.param] = +action.payload;
    // }
    console.log(prefix[action.param])
    console.log(state[pref])

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

    console.log(state[pref])
    
    
    const {limitSum, minProfit, maxProfit, minClearProfit} = state.managerSettings,            
            cheapGoodsRoi =  minProfit + 1,
            expensiveGoodsRoi = maxProfit + 1;

        buy1pc = state.masterdata.buy1pc;
        cell1pc = state.masterdata.cell1pc;
        delivery = (pref === 'yMarketCalc') ? (heightWidthLength ? 250 : (weight >= 15) ? 350 : (cell1pc*0.04 < 55) ? 55 : (cell1pc*0.04 > 200) ? 200 : cell1pc*0.04) :
                    prefix.delivery;
        federal = (pref === 'yMarketCalc') ? ((cell1pc*0.01) >= 100 ? 100 : (cell1pc*0.01) > 10 ? cell1pc*0.01 : 10) :
                  prefix.federal;

        packRentPacker = state.headerVal.PackRentPacker.length === 0 ? null : +state.headerVal.PackRentPacker;
        magistral = (pref === 'ozoneCalc') ? (state.headerVal.magistral*weight < 5 ? 5 : state.headerVal.magistral*weight > 500 ? 500 : state.headerVal.magistral*weight) :
                    prefix.magistral;                    
        lastMile = (pref === 'ozoneCalc') ? ((cell1pc*0.044 <= 50) ? 50 : (cell1pc*0.044 < 200) ? cell1pc*0.044 : 200) :
                    prefix.lastMile;
        deliveryComission = acceptance + magistral + lastMile;
        dkYm = +state.headerVal.dkYm * 0.01 * cell1pc;
        pt = +state.headerVal.pt * 0.01 * cell1pc;
        processing = cell1pc*0.01;
        commissionTotal = cell1pc*marketplaceCommission*0.01 - deliveryComission;
        adv = +state.headerVal.adv*cell1pc*0.01;
        returns = state.headerVal.returns;
        rejectPrice = packRentPacker + acceptance + ((magistral + lastMile) * 2) + dkYm + pt + adv + 20;
        tax = (cell1pc - commissionTotal)*0.08;
        costsWithoutPurchase = packRentPacker + commissionTotal + dkYm + pt + adv + returns*0.01*rejectPrice + buy1pc*reject*0.01 + tax;
        cellZero = buy1pc + costsWithoutPurchase;
        cellMin = (cell1pc > state.managerSettings.limitSum) ? 
                    Math.max(((buy1pc * expensiveGoodsRoi) + costsWithoutPurchase), (minClearProfit + buy1pc + costsWithoutPurchase)) : 
                    ((buy1pc * cheapGoodsRoi) + costsWithoutPurchase);
        buyMax = ((cell1pc > limitSum)) ? 
                    Math.max(((cell1pc - costsWithoutPurchase) / cheapGoodsRoi), (cell1pc - costsWithoutPurchase - minClearProfit)) : 
                    ((cell1pc - costsWithoutPurchase) / cheapGoodsRoi);
        profit = cell1pc - buy1pc - costsWithoutPurchase;
        cp = profit;
        roi = (cp + buy1pc) / buy1pc;
        console.log(state[pref])
    const newState =  {
        ...state[pref],

            CP: cp,
            ROI: roi,
            buyMax: buyMax,
            cellMin: cellMin,
            cellZero: cellZero,
            PackRentPacker: packRentPacker,
            returns: returns,
            reject: reject,
            rejectPrice: rejectPrice,
            fixCommission,
            delivery: delivery,
            federal: federal,
            acceptance,
            magistral: magistral,
            lastMile: lastMile,
            dkYm: dkYm,
            pt: pt,
            adv: adv,
            deliveryComission,
            processing: processing,
            commissionTotal: commissionTotal,
            tax: tax,
            costsWithoutPurchase: costsWithoutPurchase,
            profit: profit,

    }
    for (let key in newState){
        if (typeof(newState[key]) === 'number'){
            newState[key] = +newState[key].toFixed(2)
        }
        // newState[key] = newState[key].toFixed(2)
    }
    console.log(newState)
    console.log(state[pref])
    return newState

}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_VAL':
            const prefix = state[action.prefix];
            prefix[action.param] = +action.payload;
            // console.log(calcParam(state, action, 'ozoneCalc'))
            const ozoneCalc = calcParam(state, action, 'ozoneCalc'),
                  wbCalc = calcParam(state, action, 'wbCalc'),
                  yMarketCalc = calcParam(state, action, 'yMarketCalc');
           

            return {
                ...state, 
                [action.prefix]: {
                    ...state[action.prefix],
                    [action.param]: +action.payload         
                },
                ozoneCalc,
                wbCalc,
                yMarketCalc
            }
            case 'ADD_VAL_MASTERDATA': 
                console.log(state)
                return {
                    ...state,
                        masterdata: {
                            ...state.masterdata,
                            heightWidthLength: !state.masterdata.heightWidthLength
                        }
                }
        default:
          return state;
      }
}

export default reducer;
