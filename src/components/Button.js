import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';

export default function Button({id, text, icon, func}) {
    return <button
        id={id}
        onClick={func}
    >{text}<img width="32" src={icon}/></button>

    //for other parts, make folder with your item + css folder to import
}