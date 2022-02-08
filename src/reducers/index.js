import calcParamResult from "../components/calc-param-result/calc-param-result";

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
        minClearProfitNull: "",
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
        dkYmR: "Зарплата менеджера кабинета, %",
        ptR: "Зарплата подборщика товаров, %",
        adv: "Реклама, % от продажи",
        deliveryComission: "Комиссия доставки МП, руб",
        processing: "Обработка, руб",
        commissionTotal: "Комиссия МП Итог, руб",
        tax: "Налог 7%, руб",
        tax1per: "Вывод средств 1%, руб",
        costsWithoutPurchase: "Расходы без закупки, руб",
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
        CP: 229,
        ROI: 1.16,
        buyMax: 1475,
        cellMin: 2911,
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
        profit: 229
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
        CP: 724,
        ROI: 1.52,
        buyMax: 1716,
        cellMin: 2265,
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
        profit: 724
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
        CP: 445,
        ROI: 1.32,
        buyMax: 1716,
        cellMin: 2628 ,
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
        profit: 445
    }
};




const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_VAL':
            const prefix = state[action.prefix];
            prefix[action.param] = +action.payload;
            const ozoneCalc = calcParamResult(state, action, 'ozoneCalc'),
                  wbCalc = calcParamResult(state, action, 'wbCalc'),
                  yMarketCalc = calcParamResult(state, action, 'yMarketCalc');
           
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
                        ozoneCalc : {
                            ...calcParamResult(state, action, 'ozoneCalc')
                        },
                        wbCalc: {
                            ...calcParamResult(state, action, 'wbCalc'),
                        },
                        yMarketCalc: {
                            ...calcParamResult(state, action, 'yMarketCalc')
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
