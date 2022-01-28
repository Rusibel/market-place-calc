function addInputsVal ({e, param='', prefix=''}) {
    return { type: 'ADD_VAL', prefix: prefix, param: param, payload: e.target.value };
  }
function addInputsValMasterdata ({e}) {
    return { type: 'ADD_VAL_MASTERDATA' };
}

export {addInputsVal, addInputsValMasterdata}