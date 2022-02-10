export default function filterState(state, ...params){
    const outputData = [];

    Object.entries(state).forEach((itemState)=>{
        const outputEnt = [];

        Object.entries(itemState[1]).forEach((data)=>{
            if (data[1] === 0){ 
                if(data[0] === 'fixCommission' || data[0] === 'delivery' || data[0] === 'federal' 
                || data[0] === 'acceptance' || data[0] === 'magistral' || data[0] === 'lastMile' || data[0] === 'deliveryComission'){
                    data[1] = ''
                }

            };
            if (params.includes(data[0])){
                // if (data[1] === 0) data[1] = '00';
                outputEnt.push([data[0], data[1]])
            }
        })

        outputData.push([itemState[0], Object.fromEntries(outputEnt)])
    });

    return  Object.fromEntries(outputData);
}