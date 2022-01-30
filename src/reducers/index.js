// import React from "react";

const initialState = {
    masterdata: {
        heightWidthLength: false,
        buy1pc: 1400,
        cell1pc: 2800,
        weight: 100
    },
    managerSettings: {
        profitHeader: 'Сколько хотите зарабатывать?',
        profitValHeader: "Рублей на 1 руб:",
        minProfitHeader: "Хочу зарабатывать дополнительно, рублей, на вложенный 1 рубль, если товар дешевле:",
        minProfit: 0.6,
        maxProfitHeader: "Хочу зарабатывать дополнительно, рублей, на вложенный 1 рубль, если товар дороже:",
        maxProfit: 0.2,
        limitSumHeader: "Граница дорогого товара:",
        limitSum: 1000,
        minClearProfitHeader: "C минимальной чистой прибылью:",
        minClearProfitNull: "---",
        minClearProfit: 300,
        packRentPackerTotalHeader: "Упаковка, аренда и прочие расходы в месяц",
        packRentPackerTotal: 4500,
        numberOfShipmentsHeader: "Количество отгрузок в месяц",
        numberOfShipments: 100,
        packRentPacker1pcHeader: 'Расход на 1 упаковку',
        packRentPacker1pc: 45,

    },
    header: {
        output: "Вывод",
        buy1pc: " Закупка, 1 шт",
        cell1pc: "Продажа, 1 шт",
        marketplaceCommission : "Комиссия маркетплейса",
        dep: 0,
        weight: "Вес, гр",
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
        tax: "Налог, 7%",
        tax1per: "Налог, 1%",
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
        PackRentPacker: 0,
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
        tax: 7,
        tax1per: 1,
        costsWithoutPurchase: 0,
        profit: 0
    },
    ozoneCalc: {
        output: "OZONE",
        outputCell: true,
        buy1pc: 1400,
        cell1pc: 2800,
        marketplaceCommission : 15,
        dep: "-  зависит от категории OZON",
        weight: 100,
        heightWidthLength: "Если больше 150 см, жми ↓",
        CP: 75.5,
        ROI: 1.055,
        buyMax: 1475.50,
        cellMin: 3004.58,
        cellZero: 2724.58,
        PackRentPacker: 45,
        returns: 10,
        reject: 3,
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
        tax1per: 55,
        costsWithoutPurchase: 1324.59,
        profit: 75.42
    },
    wbCalc: {
        output: "WB",
        outputCell: true,
        buy1pc: 1400,
        cell1pc: 2800,
        marketplaceCommission : 20,
        dep: "-  зависит от продаж",
        weight: 100,
        heightWidthLength: 0,
        CP: 316.9,
        ROI: 1.23,
        buyMax: 1716.9,
        cellMin: 2763.1,
        cellZero: 2483.1,
        PackRentPacker: 45,
        returns: 10,
        reject: 3,
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
        tax1per: 55,
        costsWithoutPurchase: 1083.1,
        profit: 316.9
    },
    yMarketCalc: {
        output: "YMarket",
        outputCell: true,
        buy1pc: 1400,
        cell1pc: 2800,
        marketplaceCommission : 7,
        dep: "-  зависит от категории Маркет",
        weight: 100,
        heightWidthLength: 0,
        CP: 316.90,
        ROI: 1.23,
        buyMax: 1716.9,
        cellMin: 2763.1,
        cellZero: 2483.1,
        PackRentPacker: 45,
        returns: 10,
        reject: 3,
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
        tax1per: 55,
        costsWithoutPurchase: 1083.1,
        profit: 316.90
    }
};

function calcParam(state, action, pref) {

    const prefix = state[pref]

    if(action.param === 'buy1pc' || action.param === 'cell1pc'){
        state.masterdata[action.param] = +action.payload}

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
    tax1per,
    costsWithoutPurchase,
    profit} = prefix;
    
    let {limitSum, minProfit, maxProfit, minClearProfit, packRentPacker1pc} = state.managerSettings,            
            cheapGoodsRoi =  minProfit + 1,
            expensiveGoodsRoi = maxProfit + 1;

        buy1pc = state.masterdata.buy1pc;
        cell1pc = state.masterdata.cell1pc;
        weight = state.masterdata.weight;
        delivery = (pref === 'yMarketCalc') ? (state.masterdata.heightWidthLength ? 250 : (weight/1000 >= 15) ? 350 : (cell1pc*0.04 < 55) ? 55 : (cell1pc*0.04 > 200) ? 200 : cell1pc*0.04) :
                    prefix.delivery;
        federal = (pref === 'yMarketCalc') ? ((cell1pc*0.01) >= 100 ? 100 : (cell1pc*0.01) > 10 ? cell1pc*0.01 : 10) :
                  prefix.federal;
        // packRentPacker1pc = (+state.managerSettings.packRentPacker/ +state.managerSettings.numberOfShipments).toFixed(2);
        packRentPacker = +(+state.managerSettings.packRentPackerTotal / +state.managerSettings.numberOfShipments).toFixed(2);
        magistral = (pref === 'ozoneCalc') ? (state.headerVal.magistral*(weight/1000) < 5 ? 5 : state.headerVal.magistral*(weight/1000) > 500 ? 500 : state.headerVal.magistral*(weight/1000)) :
                    prefix.magistral;                    
        lastMile = (pref === 'ozoneCalc') ? ((cell1pc*0.044 <= 50) ? 50 : (cell1pc*0.044 < 200) ? cell1pc*0.044 : 200) :
                    prefix.lastMile;
        deliveryComission = (pref === 'ozoneCalc') ? (acceptance + magistral + lastMile) :
                            (pref === 'yMarketCalc') ? (fixCommission + delivery + federal) : 0
        dkYm = +state.headerVal.dkYm * 0.01 * cell1pc;
        pt = +state.headerVal.pt * 0.01 * cell1pc;
        processing = cell1pc*0.01;
        commissionTotal = cell1pc*marketplaceCommission*0.01 + deliveryComission;
        adv = +state.headerVal.adv*cell1pc*0.01;
        returns = state.headerVal.returns;
        reject = state.headerVal.reject;
        rejectPrice = (pref === 'ozoneCalc') ? (packRentPacker + acceptance + ((magistral + lastMile) * 2) + dkYm + pt + adv + 20) :
                      (pref === 'wbCalc') ? (delivery*2 + packRentPacker + dkYm + pt + adv) : 
                      (pref === 'yMarketCalc') ? (delivery*2 + packRentPacker + dkYm + pt + adv + fixCommission) : 0;
        tax = (cell1pc - commissionTotal)*0.07;
        tax1per = (cell1pc - commissionTotal)*0.01;
        costsWithoutPurchase = packRentPacker + commissionTotal + dkYm + pt + adv + returns*0.01*rejectPrice + buy1pc*reject*0.01 + tax + tax1per;
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
        // state.masterdata.cell1pc = +cellMin.toFixed()

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
            tax1per: tax1per,
            costsWithoutPurchase: costsWithoutPurchase,
            profit: profit,

    }
    for (let key in newState){
        if (typeof(newState[key]) === 'number'){
            newState[key] = +newState[key].toFixed(2)
        }
    }
    return newState
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_VAL':
            const prefix = state[action.prefix];
            prefix[action.param] = +action.payload;
            // const packRentPacker1pc = (+state.managerSettings.packRentPackerTotal / +state.managerSettings.numberOfShipments).toFixed(2)
            const ozoneCalc = calcParam(state, action, 'ozoneCalc'),
                  wbCalc = calcParam(state, action, 'wbCalc'),
                  yMarketCalc = calcParam(state, action, 'yMarketCalc');
           
            return {
                ...state, 
                [action.prefix]: {
                    ...state[action.prefix],
                    [action.param]: +action.payload         
                },
                managerSettings:{
                    ...state.managerSettings,
                    packRentPacker1pc: (+state.managerSettings.packRentPackerTotal / +state.managerSettings.numberOfShipments).toFixed(2)
                },
                ozoneCalc,
                wbCalc,
                yMarketCalc
            }
            case 'ADD_VAL_MASTERDATA': 
                return {
                    ...state,
                        masterdata: {
                            ...state.masterdata,
                            heightWidthLength: !state.masterdata.heightWidthLength
                        }
            }
            case 'ADD_VAL_OUTPUT_SUCCESS': 
            const marketplaceName = (action.prefix === 'ozoneCalc') ? 'Озон' : (action.prefix === 'wbCalc') ? 'WB' : ' Я.Маркет'
            return {
                ...state, 
                [action.prefix]: {
                    ...state[action.prefix],
                    output: `Срочно выкладываем на ${marketplaceName}!`,
                    outputCell: true     
                },
               
            }
            case 'ADD_VAL_OUTPUT_UNSUCCESS': 
            const marketplaceNamess = (action.prefix === 'ozoneCalc') ? 'Озон' : (action.prefix === 'wbCalc') ? 'WB' : ' Я.Маркет'
            return {
                ...state, 
                [action.prefix]: {
                    ...state[action.prefix],
                    output: `На ${marketplaceNamess} не продаем, ищем дальше!`,
                    outputCell: false                         
                },
               
            }
                    
        default:
          return state;
      }
}

export default reducer;
