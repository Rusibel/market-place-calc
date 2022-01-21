const initialState = {
    output: "OZONE",
    buy1pc: 1400,
    cell1pc: 2800,
    marketplaceCommission : 0.15,
    dep: "-  зависит от категории OZON",
    weight: 0.1,
    heightWidthLength: "Если больше 150 см, жми ↓",
    CP: 75.41599999999994,
    ROI: 1.053868571,
    buyMax: 1475.416,
    cellMin: 3004.584,
    cellZero: 2724.584,
    PackRentPacker: 45,
    return: 0.1,
    reject: 0.03,
    rejectPrice: 758.4,
    fixCommission: 0,
    delivery: 0,
    federal: 0,
    acceptance: 45,
    magistral: 5,
    lastMile: 123.19999999999999,
    dkYm: 140,
    pt: 84,
    adv: 168,
    deliveryComission: 173.2,
    processing: 0,
    commissionTotal: 593.2,
    tax: 176.544,
    costsWithoutPurchase: 1324.584,
    profit: 75.41599999999994
}

export default function ozoneCalc(state = initialState) {
    return state
  }