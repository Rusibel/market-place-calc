import React, {  useState }  from "react";
import Input from "../../input/input";

export default function Td ({item, prefix, tdClassNames, rowSpan, step }) {
    const [input, setInput] = useState(false);

    return (
        <td rowSpan={rowSpan} 
        key={item[0]+prefix+input} 
        className={tdClassNames} 
        onMouseEnter={() => setInput(true)}
        onMouseLeave={() => setInput(false)}
        >
            <Input
            classNames={''}
            key={item[0]+prefix+input} 
            value={item[1]}
            id={item[0]+'__'+prefix} 
            prefix={prefix}
            param={item[0]}
            input={input}
            step={step}
            />
        </td>
    )
}