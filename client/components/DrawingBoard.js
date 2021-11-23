import {useState, useLayoutEffect, useEffect, useRef} from 'react';
import React from 'react'
import { CanvasHTMLAttributes } from 'react';
import Header from './Header';
import Canvas from './Canvas';

function DrawingBoard(){
    return(
        <div className = 'container'>
            <Header title = 'Line Share'/>
            <Canvas/>
        </div>
    )
}

export default DrawingBoard;
