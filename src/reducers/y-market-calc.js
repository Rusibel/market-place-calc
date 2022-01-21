const initialState = {
    output: "WB",
    buy1pc: 1400,
    cell1pc: 2800,
    marketplaceCommission : 0.2,
    dep: "-  зависит от продаж",
    weight: 0.1,
    heightWidthLength: 0,
    CP: 316.9000000000001,
    ROI: 1.226357143,
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
    tax: 179.20000000000002,
    costsWithoutPurchase: 1083.1,
    profit: 316.9000000000001
}

export default function yMarketCalc(state = initialState) {
    return state
  }