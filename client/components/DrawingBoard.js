import {useState, useEffect, useRef} from 'react';
import React from 'react'
import Header from './Header';
import Canvas from './Canvas';



function DrawingBoard(){
    return(
        <div className = 'container'>
            <Header title = 'Sketchify'/>
            <Canvas/>
        </div>
    )
}

export default DrawingBoard;
