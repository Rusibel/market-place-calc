const initialState = {
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
    return: 0.1,
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
    adv: 0.06,
    deliveryComission: 0,
    processing: 0,
    commissionTotal: 0,
    tax: 8,
    costsWithoutPurchase: 0,
    profit: 0
}

export default function headerVal(state = initialState, action) {
    const {type, param, payload} = action;
    console.log(state)
    switch (type) {
        case 'ADD_VAL':
          state[param] = payload;
          return { ...state };
        default:
          return state;
      }
  }