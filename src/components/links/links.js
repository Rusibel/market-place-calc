import React from "react";

export default function Link ({value, classNames, id, url = ''}) {
    classNames = 'links ' + classNames     

    return (
        <a href={url}>{value}</a>
    )
}