import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Button(text, icon, func) {
    return <Button
    onPress={func}
    title={<span><img width='32' height='32'>{icon}</img>{text}</span>}
    color="#000000"
    backgroundColor="#A9B638"
    accessibilityLabel={text + ' button'}
    />

    //for other parts, make folder with your item + css folder to import
}