import React from "react";
// import './cell.scss'

export default function Link ({value, classNames, id, url = ''}) {
    classNames = 'links ' + classNames
   
    

    return (
        <a href={url}>{value}</a>
    )
}