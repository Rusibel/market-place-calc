const initialState = {
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
}

export default function ozoneCalc(state = initialState, action) {
    const {type, param, payload} = action;
    // console.log(param)
    switch (type) {
        case 'ADD_VAL':
          state[param] = payload;
          return { ...state };
        default:
          return state;
      }
  }