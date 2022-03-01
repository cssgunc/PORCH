import React from 'react';
import ReactDOM from 'react-dom';
import '../../index.css';
import './Button.css';

export default function Button({id, text, icon=null, func=null, href=null}) {
    return <a href={href}>
        <button
            id={id}
            onClick={func}
        >{text}<img id={id + "-img"} width="32" src={icon}/></button>
    </a>

    //for other parts, make folder with your item + css folder to import
}