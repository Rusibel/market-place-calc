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
    
    let buyMaxCalc;

    function calcOutputVal ({state, prefix=pref}) {

        const marketplaceName = (prefix === 'ozoneCalc') ? 'Озон' : (prefix === 'wbCalc') ? 'WB' : ' Я.Маркет' ,
              success = {
                output: `Срочно выкладываем на ${marketplaceName}!`,
                outputCell: true 
              },       
              unsuccess = {
                output: `На ${marketplaceName} не продаем, ищем дальше!`,
                outputCell: false 
              }          
      
    
        if(state[prefix].profit > 0){
            if(state.masterdata.cell1pc <= state.managerSettings.limitSum){
                if(state[prefix].ROI >= (+state.managerSettings.minProfit/100 + 1) && state[prefix].CP >= state.managerSettings.minClearProfit){
                    
                    // state[prefix].output = `Срочно выкладываем на ${marketplaceName}!`
                    // state[prefix].outputCell = true 
                } else { 

                    // state[prefix].output = `На ${marketplaceName} не продаем, ищем дальше!`
                    // state[prefix].outputCell = false 
                }
            } else {
                if(state[prefix].CP >= state.managerSettings.minProfit){
                    if(state[prefix].ROI >= (+state.managerSettings.maxProfit/100 + 1) && state[prefix].CP >= state.managerSettings.minClearProfit){
                        state[prefix].output = `Срочно выкладываем на ${marketplaceName}!`
                        state[prefix].outputCell = true 
                    } else {                     
                        state[prefix].output = `На ${marketplaceName} не продаем, ищем дальше!`
                        state[prefix].outputCell = false 
                }
                } else {                     
                    state[prefix].output = `На ${marketplaceName} не продаем, ищем дальше!`
                    state[prefix].outputCell = false 
                }
            } 
        }  else { 
                state[prefix].output = `На ${marketplaceName} не продаем, ищем дальше!`
                state[prefix].outputCell = false 
                }
        state[prefix].output = `Срочно выкладываем на ${marketplaceName}!`
        state[prefix].outputCell = true   
        }

    function calcResult ({state, pref, prefix, buy1pc, cell1pc}) {
        
            // console.log(state)
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
            dkYm = +state.headerVal.dkYm * 0.01 * cell1pc;
            pt = +state.headerVal.pt * 0.01 * cell1pc;
            processing = cell1pc*0.01;
            commissionTotal = (pref === 'yMarketCalc') ? cell1pc*marketplaceCommission*0.01 + deliveryComission + processing : 
                               cell1pc*marketplaceCommission*0.01 + deliveryComission;
            adv = +state.headerVal.adv*cell1pc*0.01;
            returns = state.headerVal.returns;
            reject = state.headerVal.reject;
            rejectPrice = (pref === 'ozoneCalc') ? (packRentPacker + acceptance + ((magistral + lastMile) * 2) + dkYm + pt + adv + 20) :
                          (pref === 'wbCalc') ? (delivery*2 + packRentPacker + dkYm + pt + adv) : 
                          (pref === 'yMarketCalc') ? (delivery*2 + packRentPacker + dkYm + pt + adv + fixCommission) : 0;
            tax = (cell1pc - commissionTotal)*0.07;
            tax1per = (cell1pc - commissionTotal)*0.01;
            costsWithoutPurchase = +Math.floor(packRentPacker + commissionTotal + dkYm + pt + adv + returns*0.01*rejectPrice + buy1pc*reject*0.01 + tax + tax1per).toFixed();


            

            profit = Math.floor(cell1pc - buy1pc - costsWithoutPurchase);
            cp = profit;
            roi = (cp + buy1pc) / buy1pc;

            
            cellMin = (cell1pc > limitSum) ? 
                        Math.max(((buy1pc * expensiveGoodsRoi) + costsWithoutPurchase), (minClearProfit + buy1pc + costsWithoutPurchase)) : 
                        (buy1pc * cheapGoodsRoi + costsWithoutPurchase);
            cellZero = buy1pc + costsWithoutPurchase;

            if(cell1pc > limitSum) {
                if(roi >= expensiveGoodsRoi){
                    buyMax = (cell1pc - costsWithoutPurchase) / expensiveGoodsRoi
                }
                buyMax = cell1pc - costsWithoutPurchase - minClearProfit
            } else {
                buyMax = (cell1pc - costsWithoutPurchase) / cheapGoodsRoi
            }
            // buyMaxCalc = ((cell1pc > limitSum)) ? 
            //             // Math.min((Math.floor((+cell1pc.toFixed() - +costsWithoutPurchase.toFixed()) / +expensiveGoodsRoi.toFixed(5))), (cell1pc - costsWithoutPurchase - minClearProfit)) : 
            //             cell1pc - costsWithoutPurchase - minClearProfit :
            //             ((cell1pc - costsWithoutPurchase) / cheapGoodsRoi);
            // buyMax = ((cell1pc > limitSum)) ? 
            //             Math.min(((cell1pc - costsWithoutPurchase) * 100/ expensiveGoodsRoi) * 0.01 , (cell1pc - costsWithoutPurchase - minClearProfit)) : 
            //             // cell1pc - costsWithoutPurchase - minClearProfit :
            //             ((cell1pc - costsWithoutPurchase) / cheapGoodsRoi);

                        // console.log(buyMax);
            // if(cell1pc > limitSum) {
            //     if(roi >= expensiveGoodsRoi){
            //         buyMax = cell1pc - costsWithoutPurchase - minClearProfit
            //     } else {

            //         buyMax = (cell1pc - costsWithoutPurchase) / expensiveGoodsRoi
            //     }
            // } else {
            //     buyMax = (cell1pc - costsWithoutPurchase) / cheapGoodsRoi
            // }
                        console.log(((cell1pc - costsWithoutPurchase)/ expensiveGoodsRoi));
                        console.log(cell1pc - costsWithoutPurchase - minClearProfit);
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
                    newState[key] = +newState[key].toFixed(0)
                }
            }
        
            newState = {
                ...newState,
                ROI: roi
            }
            return newState
    }



    function calcCellMin({state, pref, prefix, buy1pc, cell1pc}) {
        // console.log(prefix);
        calcResult({state, pref, prefix, buy1pc, cell1pc});
        if(cellMin.toFixed() !== cell1pc.toFixed()){
            calcCellMin({state, pref, prefix, buy1pc, cell1pc: cellMin})            
        }
        console.log(state);
        
        return cellMin
    };

    function calcCellZero({state, pref, prefix, buy1pc, cell1pc}) {
        // console.log(prefix);
        calcResult({state, pref, prefix, buy1pc, cell1pc});
        if(cellZero.toFixed() !== cell1pc.toFixed()){
            calcCellZero({state, pref, prefix, buy1pc, cell1pc: cellZero})            
        }
        // console.log(state);
        
        return cellZero
    };

    function calcBuyMax ({state, pref, prefix, buy1pc, cell1pc}) {

        calcResult({state, pref, prefix, buy1pc, cell1pc});
        if(buyMaxCalc.toFixed() !== buy1pc.toFixed()){

            calcBuyMax({state, pref, prefix, buy1pc: buyMaxCalc, cell1pc})            
        }
        return buyMax
    }

    // cellMin = calcCellMin({state, pref, prefix, buy1pc, cell1pc})
    const calcState = calcResult({state, pref, prefix, buy1pc, cell1pc});
    // console.log(calcState);
    // calcState.cellMin = calcCellMin({state, pref, prefix, buy1pc, cell1pc});
    // calcState.cellZero = calcCellZero({state, pref, prefix, buy1pc, cell1pc});
    calcState.buyMax = calcBuyMax({state, pref, prefix, buy1pc, cell1pc});
    console.log(calcState);

    return calcState;
}