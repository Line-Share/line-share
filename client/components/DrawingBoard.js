import React, {useState, useLayoutEffect, useEffect, useRef} from 'react';
import { CanvasHTMLAttributes } from 'react';
import Header from './Header';
import Canvas from './Canvas';

function DrawingBoard(){
    return(
        <div className = 'container'>
            <> 
            <Header title = 'Line Share'/>
            <Canvas pageWidth = {600} pageHeight = {300}/>
        
            </>
        </div>
    )
}

export default DrawingBoard;
