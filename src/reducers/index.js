const initialState = {
    masterdata: {
        heightWidthLength: false,
        buy1pc: 1400,
        cell1pc: 2800,
        weight: 100
    },
    managerSettings: {
        profitHeader: 'Сколько хотите зарабатывать?',
        profitValHeader: "Копеек на 1 руб",
        minProfitHeader: "Хочу зарабатывать дополнительно копеек, на вложенный 1 рубль, если товар дешевле",
        minProfit: 60,
        maxProfitHeader: "Хочу зарабатывать дополнительно копеек, на вложенный 1 рубль, если товар дороже",
        maxProfit: 20,
        limitSumHeader: "Граница дорогого товара, руб",
        limitSum: 1000,
        minClearProfitHeader: "C минимальной чистой прибылью, руб",
        minClearProfitNull: "---",
        minClearProfit: 300,
        packRentPackerTotalHeader: "Упаковка, аренда и прочие расходы в месяц, руб",
        packRentPackerTotal: 4500,
        numberOfShipmentsHeader: "Количество отгрузок в месяц",
        numberOfShipments: 100,
        packRentPacker1pcHeader: 'Расход на 1 упаковку, руб',
        packRentPacker1pc: 45,

    },
    header: {
        
        buy1pc: " Закупка, 1 шт",
        cell1pc: "Продажа, 1 шт",
        marketplaceCommission : "Комиссия маркетплейса, %",
        dep: 0,
        weight: "Вес, гр",
        heightWidthLength: "Высота + Ширина + Длина, см",
        CP: "ЧП, руб",
        ROI: "ROI",
        buyMax: "Максимальная цена закупки, руб",
        cellMin: "Минимальная цена продажи, руб",
        cellZero: "Продажа вноль, руб",
        PackRentPacker: "Упаковка, аренда, упаковщик, руб",
        output: "Вывод",
        returns: "% возвратов, %",
        reject: "% брака, %",
        rejectPrice: "Цена возврата, руб",
        fixCommission: "Фиксированная комиссия, руб",
        delivery: "Доставка, руб",
        federal: "Федеральная, руб",
        acceptance: "Приемка отправления, руб",
        magistral: "Магистраль, КГ х",
        lastMile: "Последняя миля, руб",
        dkYm: "Зарплата менеджера кабинета, руб",
        pt: "Зарплата подборщика товаров, руб",
        adv: "Реклама, % от продажи",
        deliveryComission: "Комиссия доставки МП, руб",
        processing: "Обработка, руб",
        commissionTotal: "Комиссия МП Итог, руб",
        tax: "Налог 7%, руб",
        tax1per: "Вывод средств 1%, руб",
        costsWithoutPurchase: "Косты без закупки, руб",
        profit: "Прибыль, руб"
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
        outputCell: true,
        buy1pc: 1400,
        cell1pc: 2800,
        marketplaceCommission : 15,
        dep: "-  зависит от категории OZON",
        weight: 100,
        heightWidthLength: "Если больше 150 см, жми ↓",
        output: "OZONE",
        CP: 75,
        ROI: 1.055,
        buyMax: 1475,
        cellMin: 3004,
        cellZero: 2724,
        PackRentPacker: 45,
        returns: 10,
        reject: 3,
        rejectPrice: 758,
        fixCommission: 0,
        delivery: 0,
        federal: 0,
        acceptance: 45,
        magistral: 5,
        lastMile: 123,
        dkYm: 140,
        pt: 84,
        adv: 168,
        deliveryComission: 173,
        processing: 0,
        commissionTotal: 593,
        tax: 176,
        tax1per: 55,
        costsWithoutPurchase: 1324,
        profit: 75
    },
    wbCalc: {
        
        outputCell: true,
        buy1pc: 1400,
        cell1pc: 2800,
        marketplaceCommission : 3,
        dep: "-  зависит от продаж",
        weight: 100,
        heightWidthLength: 0,
        output: "WB",
        CP: 316,
        ROI: 1.23,
        buyMax: 1716,
        cellMin: 2763,
        cellZero: 2483,
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
        tax: 179,
        tax1per: 55,
        costsWithoutPurchase: 1083,
        profit: 316
    },
    yMarketCalc: {        
        outputCell: true,
        buy1pc: 1400,
        cell1pc: 2800,
        marketplaceCommission : 7,
        dep: "-  зависит от категории Маркет",
        weight: 100,
        heightWidthLength: 0,
        output: "YMarket",
        CP: 316,
        ROI: 1.23,
        buyMax: 1716,
        cellMin: 2763,
        cellZero: 2483,
        PackRentPacker: 45,
        returns: 10,
        reject: 3,
        rejectPrice: 329,
        fixCommission: 30,
        delivery: 112,
        federal: 28,
        acceptance: 0,
        magistral: 0,
        lastMile: 0,
        dkYm: 140,
        pt: 84,
        adv: 0,
        deliveryComission: 0,
        processing: 0,
        commissionTotal: 560,
        tax: 179,
        tax1per: 55,
        costsWithoutPurchase: 1083,
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
    
    let {limitSum, minProfit, maxProfit, minClearProfit} = state.managerSettings,            
            cheapGoodsRoi =  +(minProfit/100) + 1,
            expensiveGoodsRoi = +(maxProfit/100 + 1);
            // console.log(cheapGoodsRoi)
        buy1pc = state.masterdata.buy1pc;
        cell1pc = state.masterdata.cell1pc;
        state.masterdata.weight = state.ozoneCalc.weight;
        weight = state.ozoneCalc.weight;
        delivery = (pref === 'yMarketCalc') ? (state.masterdata.heightWidthLength ? 250 : (weight/1000 >= 15) ? 350 : (cell1pc*0.04 < 55) ? 55 : (cell1pc*0.04 > 200) ? 200 : cell1pc*0.04) :
                    prefix.delivery;
        federal = (pref === 'yMarketCalc') ? ((cell1pc*0.01) >= 100 ? 100 : (cell1pc*0.01) > 10 ? cell1pc*0.01 : 10) :
                  prefix.federal;
        packRentPacker = +(+state.managerSettings.packRentPackerTotal / +state.managerSettings.numberOfShipments).toFixed(0);
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
        // cellMin = (cell1pc > state.managerSettings.limitSum) ? 
        //             Math.max(((buy1pc * expensiveGoodsRoi) + costsWithoutPurchase), (minClearProfit + buy1pc + costsWithoutPurchase)) : 
        //             ((buy1pc * cheapGoodsRoi) + costsWithoutPurchase);
        // buyMax = ((cell1pc > limitSum)) ? 
        //             Math.max(((cell1pc - costsWithoutPurchase) / cheapGoodsRoi), (cell1pc - costsWithoutPurchase - minClearProfit)) : 
        //             ((cell1pc - costsWithoutPurchase) / cheapGoodsRoi);
        profit = cell1pc - buy1pc - costsWithoutPurchase;
        cp = profit;
        roi = (cp + buy1pc) / buy1pc;
    const calcCellMin = () => {
        if (cell1pc > limitSum) {
            cellMin = Math.max(((buy1pc * expensiveGoodsRoi) + costsWithoutPurchase), (minClearProfit + buy1pc + costsWithoutPurchase));
            return cellMin
        } else {
            cellMin = (buy1pc * cheapGoodsRoi) + costsWithoutPurchase;
            return cellMin
            // return ((buy1pc * cheapGoodsRoi) + costsWithoutPurchase)
        }
    }   
    cellMin = calcCellMin();  
    const calcBuyMax = () => {
        if (cell1pc > limitSum) {
            return Math.max(((cell1pc - costsWithoutPurchase) / cheapGoodsRoi), (cell1pc - costsWithoutPurchase - minClearProfit))
        } else {return ((cell1pc - costsWithoutPurchase) / cheapGoodsRoi)}

    }
    buyMax = calcBuyMax();

    let newState =  {
        ...state[pref],
            CP: cp,
            buyMax: buyMax,
            cellMin: cellMin,
            cellZero: cellZero,
            PackRentPacker: packRentPacker,
            // output: output,
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
            newState[key] = +newState[key].toFixed(0)
        }
    }

    newState = {
        ...newState,
        ROI: +roi.toFixed(2)
    }
    return newState
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_VAL':
            const prefix = state[action.prefix];
            prefix[action.param] = +action.payload;
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
                    packRentPacker1pc: +(+state.managerSettings.packRentPackerTotal / +state.managerSettings.numberOfShipments).toFixed(0)
                },
                ozoneCalc,
                wbCalc,
                yMarketCalc
            }
            case 'ADD_VAL_MASTERDATA': 
                state.masterdata.heightWidthLength = !state.masterdata.heightWidthLength
                return {
                    ...state,
                        // masterdata: {
                        //     ...state.masterdata,
                        //     heightWidthLength: !state.masterdata.heightWidthLength
                        // },
                        ozoneCalc : {
                            ...calcParam(state, action, 'ozoneCalc')
                        },
                        wbCalc: {
                            ...calcParam(state, action, 'wbCalc'),
                        },
                        yMarketCalc: {
                            ...calcParam(state, action, 'yMarketCalc')
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
