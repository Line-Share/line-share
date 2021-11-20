import React, {useState, useLayoutEffect, useEffect, useRef} from 'react';
import { CanvasHTMLAttributes } from 'react';
import Header from './Header';
import Canvas from './Canvas';

function DrawingBoard(){
    return(
        <div className = 'container'>
            <> 
            <Header title = 'Line Share'/>
            <Canvas width = {600} height = {300}/>
        
            </>
        </div>
    )
}

export default DrawingBoard;
