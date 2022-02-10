export default function calcParamResult(state, action, pref) {

    const prefix = state[pref]

    if(action.param === 'buy1pc' || action.param === 'cell1pc' || action.param === 'weight'){
        state.masterdata[action.param] = +action.payload}

    let {limitSum, minProfit, maxProfit, minClearProfit, packRentPackerTotal, numberOfShipments} = state.managerSettings,            
        cheapGoodsRoi =  +(minProfit/100 + 1),
        expensiveGoodsRoi = +(maxProfit/100 + 1),
        buy1pc = state.masterdata.buy1pc,
        cell1pc = state.masterdata.cell1pc;

    let {marketplaceCommission, weight, output, 
        CP: cp,
        ROI: roi,
        buyMax, cellMin, cellZero,
        PackRentPacker: packRentPacker,
        returns, reject, rejectPrice, fixCommission, delivery, federal, acceptance,
        magistral, lastMile, dkYm, pt, adv, deliveryComission, processing, commissionTotal,
        tax, tax1per, costsWithoutPurchase, profit} = prefix;   
    



    function calcResult ({state, pref, prefix, buy1pc, cell1pc}) {

            dkYm = +(+state.headerVal.dkYm * 0.01* cell1pc).toFixed(3);
            pt = +(+state.headerVal.pt * 0.01* cell1pc).toFixed(3);
            adv = +(+state.headerVal.adv*0.01* cell1pc).toFixed(3);
            returns = state.headerVal.returns;
            reject = +(+state.headerVal.reject*0.01).toFixed(2);

            weight = state.ozoneCalc.weight;
            delivery = (pref === 'yMarketCalc') ? (state.masterdata.heightWidthLength ? 250 : (weight/1000 >= 15) ? 350 : (cell1pc*0.04 < 55) ? 55 : (cell1pc*0.04 > 200) ? 200 : cell1pc*0.04) :
                        prefix.delivery;
            federal = (pref === 'yMarketCalc') ? ((cell1pc*0.01) >= 100 ? 100 : (cell1pc*0.01) > 10 ? cell1pc*0.01 : 10) :
                      prefix.federal;
            packRentPacker = +(+packRentPackerTotal / +numberOfShipments);
            magistral = (pref === 'ozoneCalc') ? (state.headerVal.magistral*(weight/1000) < 5 ? 5 : state.headerVal.magistral*(weight/1000) > 500 ? 500 : state.headerVal.magistral*(weight/1000)) :
                        prefix.magistral;                    
            lastMile = (pref === 'ozoneCalc') ? ((cell1pc*0.044 <= 50) ? 50 : (cell1pc*0.044 < 200) ? cell1pc*0.044 : 200) :
                        prefix.lastMile;
            deliveryComission = (pref === 'ozoneCalc') ? (acceptance + magistral + lastMile) :
                                (pref === 'yMarketCalc') ? (fixCommission + delivery + federal) : 0
            processing = +(cell1pc*0.01).toFixed(3);

            commissionTotal = (pref === 'yMarketCalc') ? cell1pc*marketplaceCommission*0.01 + deliveryComission + processing : 
                               cell1pc*marketplaceCommission*0.01 + deliveryComission;

            rejectPrice = (pref === 'ozoneCalc') ? (packRentPacker + acceptance + ((magistral + lastMile) * 2) + dkYm + pt + adv+ 20) :
                          (pref === 'wbCalc') ? (delivery*2 + packRentPacker + dkYm + pt + adv) : 
                          (pref === 'yMarketCalc') ? (delivery*2 + packRentPacker + dkYm + pt + adv + fixCommission) : 0;
            tax = (cell1pc - commissionTotal)*0.07;
            tax1per = (cell1pc - commissionTotal)*0.01;
            costsWithoutPurchase = +Math.floor(packRentPacker + commissionTotal + dkYm + pt  + adv + returns*0.01*rejectPrice + buy1pc*reject + tax + tax1per).toFixed();
            profit = cell1pc - buy1pc - costsWithoutPurchase;
            cp = profit;
            roi = (cp + buy1pc) / buy1pc;

            cellMin = (cell1pc > limitSum) ? 
                        Math.max(((buy1pc * expensiveGoodsRoi) + costsWithoutPurchase), (minClearProfit + buy1pc + costsWithoutPurchase)) : 
                        (buy1pc * cheapGoodsRoi + costsWithoutPurchase);
            cellZero = buy1pc + costsWithoutPurchase;

            if(cell1pc > limitSum) {
                if(expensiveGoodsRoi - 1 <= 1){
                    buyMax = Math.min((cell1pc - costsWithoutPurchase) / (expensiveGoodsRoi), (cell1pc - costsWithoutPurchase - minClearProfit))
                } else {
                    buyMax = Math.max((cell1pc - costsWithoutPurchase) / (expensiveGoodsRoi), (cell1pc - costsWithoutPurchase - minClearProfit))
                }
          
            } else {
                buyMax = +(+cell1pc - +costsWithoutPurchase) / +(cheapGoodsRoi)
            }
     
            let newState =  {
                ...state[pref],
                    CP: cp,
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
                if (typeof(newState[key]) === 'number' && key !== 'marketplaceCommission'){            
                    newState[key] = +newState[key].toFixed()
                }
            }
        
            newState = {
                ...newState,
                ROI: roi
            }
            return newState
    }



    function calcCellMin({state, pref, prefix, buy1pc, cell1pc}) {

        calcResult({state, pref, prefix, buy1pc, cell1pc});
        if(cellMin.toFixed() !== cell1pc.toFixed()){
            calcCellMin({state, pref, prefix, buy1pc, cell1pc: cellMin})            
        }

        return cellMin
    };

    function calcCellZero({state, pref, prefix, buy1pc, cell1pc}) {
        calcResult({state, pref, prefix, buy1pc, cell1pc});
        if(cellZero.toFixed() !== cell1pc.toFixed()){
            calcCellZero({state, pref, prefix, buy1pc, cell1pc: cellZero})            
        }
       
        return cellZero
    };

    function calcBuyMax ({state, pref, prefix, buy1pc, cell1pc}) {

        calcResult({state, pref, prefix, buy1pc, cell1pc});
        console.log(+buyMax.toFixed() !== +buy1pc.toFixed())
       
        if(+buyMax.toFixed() !== +buy1pc.toFixed() && +(buyMax + 1).toFixed() !== +buy1pc.toFixed() && +(buyMax - 1).toFixed() !== +buy1pc.toFixed()){
            calcBuyMax({state, pref, prefix, buy1pc: buyMax, cell1pc})            
        }
        return buyMax
    }

    const calcState = calcResult({state, pref, prefix, buy1pc, cell1pc});
    const calccellMin = calcCellMin({state, pref, prefix, buy1pc, cell1pc})
    const calcCellZeroState = calcCellZero({state, pref, prefix, buy1pc, cell1pc})
    const calcBuyMaxState = calcBuyMax({state, pref, prefix, buy1pc, cell1pc})

    calcState.cellMin = Math.ceil(calccellMin);
    calcState.cellZero = +calcCellZeroState.toFixed();
    calcState.buyMax = Math.floor(calcBuyMaxState);

    // console.log(calcState)
    return calcState;
}