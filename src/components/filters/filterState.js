export default function filterState(state, ...params){
    const outputData = [];

    Object.entries(state).forEach((itemState)=>{
        const outputEnt = [];

        Object.entries(itemState[1]).forEach((data)=>{
            if (data[1] === 0) data[1] = '';
            if (params.includes(data[0])){
                if (data[1] === 0) data[1] = '';
                outputEnt.push([data[0], data[1]])
            }
        })

        outputData.push([itemState[0], Object.fromEntries(outputEnt)])
    });

    return  Object.fromEntries(outputData);
}